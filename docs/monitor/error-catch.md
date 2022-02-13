# 前端错误监控及捕获

## 错误捕获
### 脚本错误,资源加载错误

[参考资料](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror)

```javascript
window.addEventListener('error', (event) => {
  if(event instanceof ErrorEvent){
      console.log(event.error.message,event.error.stack)
  } else if (event instanceof Event) {
    console.log(event.srcElement)
  }
},true)
//这里读取一个不存在的属性
console.log(this.a.b.c.d)
```

捕获JavaScript运行时错误，例如获取**undefined**上的一个属性，这时报错会被上面的方法捕获，回调会收到一个**ErrorEvent**类参数，错误信息位于**error**字段中，可以上报**error.message、error.stack**做错误分析

捕获资源加载错误，如img、script资源的加载，这些错误事件不会冒泡所以需要在事件捕获阶段收集，因此**addEventListener**的第三个参数要设为true，可以上报event.srcElement元素的资源url等信息进行分析

### Promise错误

```js
window.addEventListener('unhandledrejection', (event) => {
 	console.log(event.reason)
})
//抛出一个Error对象
Promise.reject(new Error('asdasd'))
//抛出字符串
Promise.reject('asd')
//抛出对象
Promise.reject({
	a:1,
    b:2
})
```

Promise reject之后会出发的报错，会被上面的方法捕获，回调会收到一个**PromiseRejectionEvent**，错误信息位于event.reason中，值为reject方法中传入的参数可以是任何形式

### xhr错误

项目中一般使用axios来做Http请求，因此这里使用axios提供的api来捕获错误

```js
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(e.toJSON())
    return Promise.reject(error);
});
```

网络错误会被**response**拦截器的第二个参数捕获，回调返回一个**Error**对象，但是错误对象上有一个**isAxiosError**属性可以与其他错误做区分，还有一个**toJSON**方法可以获取到请求的各自配置信息用来上报分析错误

## 错误分析

这里主要讲的是运行时错误的分析，主要通过分析上报的错误信息来定位出错的源码

由于还原源码需要用到sourcemap文件，生产中一般不能暴露源码信息但又需要生成对应的sourcemap文件，可以将**webpack**配置的[devtool](https://www.webpackjs.com/configuration/devtool/)值设置为hidden-**source-map**，然后将sourcemap文件上传到错误分析的服务器存放。

这里默认场景为服务端收集到错误信息后储存起来，发送告警信息给开发者，开发者使用信息中提供的id去查询对应的错误信息，服务端根据id查询到对应的错误信息由上文中提到的**error.message、error.stack**来解析错误

这里需要用到[source-map](https://github.com/mozilla/source-map)库来还原代码

```javascript
//伪代码
import {SourceMapConsumer} from 'source-map'
import fs from 'fs'
async function errorParse(message,stack){
    //由前端上报的stack字段中包含所有调用栈的文件信息,解析出对应的文件url，返回值示例http://localhost:8080/js/app.js:46:23
    const files=(errData.stack).match(/https?:\/\/.*\.js:\d*:\d*/gi)
    //根据上面的返回值示例可以获取到sourcemap文件对应的url(.map,.js的hash值是一样的，实际环境中可以根据.js的hash值来定位到对应的.map文件)
    //以及错误的行、列
    const sourceFiles=files.map(file=>{
        const raw=/(.*):(\d*):(\d*)/.exec(file)
        return {
          path:`${raw[1]}.map`,
          line:Number(raw[2]),
          column:Number(raw[3])
        }
  	})
  	const readQueue=sourceFiles.map(async f=>{
        //读取.map文件内容,仅作示例，具体读取文件api自行查询
        const fileContent=await fs.read(f.path)
        const sourceMapConsumer=await new SourceMapConsumer(fileContent)
        return {
            sourceMapConsumer,
            ...f
        }
    })
    const originalData= await Promise.all(readQueue)
    const res=originalData.map(o=>{
        //还原源码信息，该方法返回以下信息，source为源文件名
        // { source: 'foo.coffee',
        //   line: 2,
        //   column: 2,
        //   name: null }
        const position=o.originalPositionFor({
            line: o.line,
      		column: o.column
        })
        //得到源码文件内容
        const content=o.sourceMapConsumer.sourceContentFor(position.source)
        return {
            content,
            ...position
        }
    })
    return res
}
```

服务端解析错误信息后将内容返回给客户端，可以得到如下数据，包含完整的调用栈，源码内容，错误发生的位置

```js
[
	{
		line:1,//错误发生位置
		column:2,//错误发生位置
        content:'...',//源码内容
	},
    {
		line:3,//错误发生位置
		column:1,//错误发生位置
        content:'...',//源码内容
	}
]
```

可以使用[monaco-editor](https://microsoft.github.io/monaco-editor/)来展示错误信息，下面演示解析单个文件错误信息的组件

```html
<template>
  <div style="height: 300px">
    {{ error.source }}
    <div ref="editor" style="height: 280px"></div>
  </div>
</template>
<script>
import * as monaco from "monaco-editor";
export default {
  name: "CodeEditor",
  props: {
    error: Object,
    code: String,
    message: String,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    //初始化编辑器
    this.editor = monaco.editor.create(this.$refs.editor, {
      language: 'javascript',
    });
    //设置编辑器的值为源码
    this.editor.setValue(this.code);
    //编辑器滚动到错误行的位置
    this.editor.revealLineInCenter(this.error.line);
    //设置错误提示标记
    monaco.editor.setModelMarkers(this.editor.getModel(), "test", [
      {
        startLineNumber: this.error.line,
        startColumn: this.error.column,
        endLineNumber: this.error.line,
        endColumn: this.error.name
          ? this.error.name.length + this.error.column
          : Infinity,
        message: this.message,
        severity: monaco.MarkerSeverity.Error,
      },
    ]);
  },
};
</script>
```





