# Vue render组件

## 需求背景

在Vue组件中，大部分情况下都是使用模板来编写页面结构，当遇到一些比较复杂的情况时模板不能很好的满足需求，如Vue官方文档中关于render function部分的例子

{% embed url="https://cn.vuejs.org/v2/guide/render-function.html" %}

文档中演示了如何使用render function的形式来编写一个组件，这种方式相对来说比较灵活，文档中的场景是将整个组件的dom结构都使用render function来输出，那么如何在只在组件的某一小部分代码使用render function来构建dom结构，使得能够同时利用两者的优点，下面介绍render组件来实现这一需求

```javascript
export default {
  functional: true,
  render: (h, { props }) => {
    return props.renderer(h)
  }
}
```

代码非常简单，下面来看下使用场景

```html
<template>
  <div>
    <Render :renderer="genTitle"></Render>
  </div>
</template>

<script>
import Render from "@/components/Render";
export default {
  components: {
    Render,
  },
  methods: {
    genTitle() {
      return <h1>12312</h1>;
    },
  },
};
</script>

```

以上代码中，当使用render组件之后可以在模板代码中使用更为灵活的render function
