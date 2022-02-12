# 响应式原理分析

## 初始化

首先从Vue实例的初始化开始

```javascript
// src\core\instance\index.js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

初始化Vue实例执行的是**Vue.prototype.\_init**方法  
这个方法的实现在**src\core\instance\init.js**  
将**options.data**转变为响应式的部分是调用了**src\core\instance\state.js**中的**initState**函数 ,处理**options.data**的是**initData**函数，在**initData**中，最后一行

```javascript
observe(data, true /* asRootData */)
```

在这里调用**observe**函数将data转换为响应式对象

**observe**中关键是这一句

```javascript
ob = new Observer(value)
```

在**Observer**的实例化过程中，会调用**walk**方法,在这个方法中会调用**defineReactive**函数，将data的每个字段重写为**reactiveGetter**和**reactiveSetter** 下面先来分析**reactiveGetter**

## reactiveGetter

reactiveGetter会在读取data的对应字段时执行，首次读取是在实例挂载到dom上时，也就是执行vm.$mount时。  
回到**Vue.prototype.\_init**方法中，可以看到在**Vue.prototype.\_init**的最后一行执行了这段代码

```javascript
if (vm.$options.el) {
      vm.$mount(vm.$options.el)
}
```

**$mounte**方法定义于**src\platforms\web\runtime\index.js**中,主要是执行了**mountComponent**方法

```javascript
// mountComponent代码片段
if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    //...
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
}
new Watcher(vm, updateComponent, noop, {
before () {
  if (vm._isMounted && !vm._isDestroyed) {
    callHook(vm, 'beforeUpdate')
  }
}
}, true /* isRenderWatcher */)
```

以上代码片段的**updateComponent**方法中会执行render函数，在这其中读取了data上的字段，将**updateComponent**作为参数传入**new Watcher**中实例化一个Watcher，实例化时会调用**Watcher.prototype.get**，这个方法代码片段

```javascript
// src\core\observer\watcher.js
get () {
    pushTarget(this)
}
let value
const vm = this.vm
try {
  value = this.getter.call(vm, vm) 
}
//...
```

**pushTarget**函数

```javascript
// src\core\observer\dep.js
export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}
```

**get**方法中的**this.getter.call\(vm, vm\)**就是**updateComponent**,上文说到调用这个方法会读取data下的值，也就是在这里首次执行了各个字段的**reactiveGetter**

下面来看下**reactiveGetter**的实现

```javascript
// reactiveGetter代码片段
Object.defineProperty(obj, key, {
  enumerable: true,
  configurable: true,
  get: function reactiveGetter () {
    const value = getter ? getter.call(obj) : val
    if (Dep.target) {
      dep.depend()
      if (childOb) {
        childOb.dep.depend()
        if (Array.isArray(value)) {
          dependArray(value)
        }
      }
    }
    return value
  },
```

分析上文的代码，首次执行**reactiveGetter**之前调用了**pushTarget**将**Dep.target**设为了当前实例的渲染Watcher，此时执行**dep.depend\(\)**，如下

```javascript
// Dep#depend
depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
}
// Watcher#addDep
addDep (dep: Dep) {
  const id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
}
```

将这个字段的dep实例与渲染Watcher绑定在一起，在后续的**reactiveSetter**将会使用这两者进行dom的更新

## reactiveSetter

reactiveSetter代码片段

```javascript
set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      //...
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
}
```

在这里一般情况下就是将闭包中的val变量重新赋值，让下次getters可以读取到新的值,然后调用**dep.notify\(\)**进行dom更新  
**notify**代码片段

```javascript
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    //..
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
```

这里的**subs**是在执行**Watcher\#addDep**方法时绑定到Dep实例上的，也就是执行执行**wahcher.update\(\)**

```javascript
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
```

一般是执行**queueWatcher\(this\)**，分析代码可知放入队列的代码 将会在主线程执行完之后逐个执行**watcher.run**进行dom的更新，这也就是Vue异步更新的机制

