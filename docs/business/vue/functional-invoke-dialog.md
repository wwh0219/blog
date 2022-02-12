# 函数式弹窗调用

## 需求背景

在Vue项目的日常开发中都会有很多弹窗调用的场景，以后台管理系统为例，搭配element-ui使用时一个包含弹窗调用的业务代码通常如下

```html
<template>
  <some-dialog
    :prop-a="propA"
    :visible.sync="dialogVisible.foo"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  ></some-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: {
        foo: false,
      },
      propA:123
    };
  },
  methods: {
    openDialog() {
      //这里可能会有一些数据获取的操作
    },
    handleConfirm() {
      //这里处理弹窗确认时的逻辑
    },
    handleCancel() {
      //这里处理弹窗取消时的逻辑
    },
  },
};
</script>
```

上面代码中的some-dialog是一个内部调用了el-dialog组件的业务组件，可以看到一个常规的弹窗至少包含几个必须的属性

* 显示控制的变量
* 确认、取消回调的处理方法
* 传递各种props到弹窗组件也需要父组件对应的变量

使用这种形式调用弹窗会有以下问题

* 当一个页面中有多个这样的弹窗时，父组件中对应的实例变量就越来越多
* 维护相关代码时通常会首先找到唤起弹窗的按钮，在找到对应的打开弹窗的方法，方法中通常会设置弹窗的显示属性为true，然后在模板代码中找到对应的弹窗所在的代码位置，然后又根据模板代码上的事件来找到对应的回调然后进行调试，维护这种代码时往往需要在文件中上下翻看反复找到各种分散在各处的变量、模板代码片段等等，维护起来比较费劲
* 无法在.vue文件以外的代码中使用弹窗，例如一个调用弹窗之后选择某条数据的操作在.vue代码中可以轻松实现，但是需要将这个操作进行封装时就比较麻烦，通常是编写一个mixin其中包含弹窗的显示隐藏控制、各种回调，但是mixin存在着命名空间冲突的缺点，另外就算使用mixin也需要在各个调用弹窗的父组件的模板代码中去编写业务弹窗组件的html代码，使用起来也比较麻烦

因此在开发过程中提炼了一套使用函数唤起弹窗的方法，使用时的代码大致如下

```html
<template>
  <button @click="openDialog">打开弹窗</button>
</template>

<script>
import {openDialog} from '@/utils'
import SomeDialog from '@/components/SomeDialog'

export default {
  data() {
    return {
      dialogVisible: {
        foo: false,
      },
    };
  },
  methods: {
    async openDialog() {
      //这里可能会有一些打开弹窗的前置操作，如数据获取
      const data=await openDialog({
        component:SomeDialog,
        props:{
          a:1,
          b:2
        }
      })
      //这里做弹窗中点击确认的后续操作
    },
    
  },
};
</script>
```

从上面的代码可以看出来打开弹窗主要是调用了openDialog这个方法，然后将弹窗组件作为一个变量的形式传入这个方法中，以上的代码可以看出来解决了上文中的三个缺点

* 对应的props、显示变量、回调处理都在打开弹窗的方法前后编写，变量都存在于方法的作用域内，大大减少在Vue组件实例上的变量数量
* 弹窗的唤起、回调代码都是在同一个方法内串行运行，阅读代码时只需要从上到下依次阅读便可以大概了解对应的逻辑，而不需要像之前反复在js代码、模板代码中来回翻阅
* 上面的弹窗调用过程可以轻松的封装为一个独立的方法在多个组件内复用，由于使用的变量都是在函数作用域内，因此也不需要通过mixin来声明组件实例的变量，另外也不需要在模板代码中重复编写调用弹窗组件的html代码，这部分代码可以在项目中的任意地方使用而不只是.vue文件中

## 具体的实现

### 核心代码

```javascript
import Vue from "vue";
import store from "@/store";
import router from "@/router";
/**
 * @description 弹窗组件的mixin
 */
export const confirmModal = {
  props: {
    //用于控制弹窗的显示隐藏，当弹窗组件以常规方式调用时可以使用这个prop来与父组件绑定来控制显隐
    visible: {
      type: undefined, //undefined boolean
    },
    //当弹窗以函数形式调用时传入给组件的promise控制方法，在恰当的时机进行resolve或者reject
    promiseInvoker: {
      reject: Function,
      resolve: Function,
    },
  },
  data() {
    return {
      //实际用于显示隐藏的属性，visible的值会同步到这个属性
      internalVisible: false,
      status: "pending", //pending resolved rejected
    };
  },
  mounted() {
    const dialogRef = this.$refs.dialog;
    if (dialogRef) {
      if (this.promiseInvoker) {
        dialogRef.$once("closed", () => {
          this.cancel();
          this.$destroy();
          this.$el.parentElement?.removeChild(this.$el);
        });
      }
    } else {
      console.error("$refs.dialog未配置，请检查代码");
    }
  },
  methods: {
    //用于触发promise reject的方法，一般绑定在取消按钮上
    cancel(err) {
      this.internalVisible = false;
      if (this.promiseInvoker) {
        this.promiseInvoker.reject(err);
        this.status = "rejected";
      }
    },
    //用于触发promise resolve的方法，一般绑定在确定按钮上
    confirm(data) {
      this.internalVisible = false;
      if (this.promiseInvoker) {
        this.promiseInvoker.resolve(data);
        this.status = "resolved";
      }
    },
  },
  watch: {
    //同步父组件的值到组件内部
    visible: {
      immediate: true,
      handler(val) {
        //使用函数唤起弹窗时val为undefined，则不做同步
        if (typeof val === "boolean") {
          this.internalVisible = val;
        }
      },
    },
    internalVisible: {
      handler(val) {
        //同步cancel confirm等的操作到父组件
        this.$emit("update:visible", val);
      },
    },
  },
};

/**
 * @description 使用这个方法调起弹窗
 * @param {Object} options
 * @param {Vue} options.component Vue组件
 * @param {Boolean} options.promisify true时函数返回promise，false返回创建的vue实例
 * @param {Oject} options.props 组件props数据
 */
export const openDialog = (options) => {
  //使用传入的Vue组件构建一个子类
  const ComponentClass = Vue.extend(options.component);
  const div = document.createElement("div");
  let vm;
  const promise = new Promise((resolve, reject) => {
    //构建Vue组件参数
    const vueOptions = {
      propsData: {
        ...options.props,
        promiseInvoker: {
          resolve,
          reject,
        },
        store,
        router,
      },
    };
    //实例化子类
    vm = new ComponentClass(vueOptions);
    vm.$once("hook:mounted", () => {
      document.body.appendChild(vm.$el);
      vm.internalVisible = true;
    });
    vm.$mount(div);
  });
  if (options.promisify) {
    return promise;
  }
  return vm;
};

```

### demo

使用el-dialog封装的业务弹窗组件

```html
<template>
  <el-dialog ref="dialog" title="提示" :visible.sync="internalVisible">
    <el-select v-model="value">
      <el-option :value="1">1</el-option>
      <el-option :value="2">2</el-option>
    </el-select>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { confirmModal } from "@/mixins/confirm-modal";
export default {
  mixins: [confirmModal],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleClose() {
      const err = new Error("xxxx");
      this.cancel(err);
    },
    handleConfirm() {
      this.confirm(this.value);
    },
  },
};
</script>

<style></style>

```

上述组件的调用

```html
<template>
  <div>
    <button @click="openDoubleDialog">打开弹窗</button>
    <!-- 模板引用形式 -->
    <SomeDialog :visible.sync="dialogVisible.foo"></SomeDialog>
  </div>
</template>

<script>
import { openDialog } from "@/mixins/confirm-modal";
import SomeDialog from "@/components/SomeDialog";
export default {
  data() {
    return {
      dialogVisible: {
        foo: false,
      },
    };
  },
  components: {
    SomeDialog,
  },
  methods: {
    openDoubleDialog() {
      //函数形式调用弹窗
      this.openDialog();
      //模板引用形式调用弹窗
      this.dialogVisible.foo = true;
    },
    async openDialog() {
      //这里可能会有一些打开弹窗的前置操作，如数据获取
      const data = await openDialog({
        component: SomeDialog,
        props: {
          a: 1,
          b: 2,
        },
      });
      console.log(data);
      //这里做弹窗中点击确认的后续操作
    },
  },
};
</script>


<style></style>
```

上面代码中包含了两种弹窗的调用形式

* 常规的模板引用形式
* 使用函数调用弹窗

实际开发中可以很大程度兼容原有的组件代码
