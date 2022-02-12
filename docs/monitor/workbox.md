---
description: 使用workbox提供的servicewoker能力优化首页性能，实现页面秒开
---

# workbox踩坑记录

demo地址：[https://github.com/sm00thCr1m1n4l/workbox-demo](https://github.com/sm00thCr1m1n4l/workbox-demo)

## 问题1:

开发时修改service-worker源码，打包出来的service-worker代码并不会更新

#### 解决方案：

使用构建后的代码来调试worker代码，demo中使用的方案是开启webpack的**watch**选项后进行调试，由于**vue-cli build**会自动注入 **p.rocess.env.NODE_ENV production** 变量，因此需要视项目具体情况来处理 **source-map**，**publicPath**等构建相关配置.

项目中使用一个简单的**express**来托管打包后的静态文件进行调试，具体见server.js



## 问题2：

构建报错，出现提示**self.\_\_WB\_MANIFEST** 不在worker源码中，原因是workerbox-webpack-plugin会对worker源码中的**self.\_\_WB\_MANIFEST**变量进行替换，即使不调用也需要在源码中写下这个占位符。

#### 解决方案：

源码顶部写入这个变量并添加`//eslint-disable-next-line`注释



## 问题3：

workbox-webpack-plugin会默认将所有需求都添加到precache列表中，由于项目的需求只需要缓存index.html，其他css、js资源则交由cdn处理，使用http强缓存即可，需要自定义precache列表。

#### 解决方案：

项目使用service-worker的需求背景是缓存index.html，并且在有更新时提示用户并刷新，默认情况下经过webpack打包后sw.js bundle会被注入**precache**列表信息，也就是上面的**self.\_\_WB\_MANIFEST** 变量，导致每次有文件更新都会更新sw.js中的**rivision**变量，因此就要让业务代码的打包不影响到sw的生成，避免每次都需要更新用户设备上的service-worker。

```javascript
// Some code
const path=require('path')
const WorkboxPlugin = require('workbox-webpack-plugin');
const swSrc=path.resolve(process.cwd(),'src/sw.js')
console.log(swSrc)
module.exports = {
  lintOnSave:false,
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc,
        swDest:'service-worker.js',
        include:[]
      }),
    ],
  watch:true

  },
}
```

以demo为例设置**include**选项为空数组，则对业务代码的改动就不会影响到sw bundle的生成

另外precache页面的操作则在**src/sw.js**的逻辑中手动处理，具体见demo源码及注释
