# 加载性能监控指标

参考资料：

[performance api时间线](https://www.w3.org/TR/navigation-timing-2/#processing-model)

[关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp)

[LCP、FID、CLS指标相关](https://web.dev/i18n/zh/vitals/)

```javascript
//获取性能数据
const perf=performance.getEntriesByType('navigation').slice(-1)[0]
//整体白屏时间
const blankScreen=perf.domContentLoadedEventEnd-perf.fetchStart
//dns解析
const dns=perf.domainLookupEnd-perf.domainLookupStart
//tcp
const tcp=perf.connectEnd-perf.connectStart
//ssl
const ssl=perf.requestStart-perf.secureConnectionStart
//首字节响应时间，在tcp连接建立完成后发出http请求到http响应的时间
const ttfb=perf.responseStart-perf.requestStart
//html传输时间
const htmlDownload=perf.responseEnd-perf.responseStart
//html解析,包含html结构解析及资源加载时间
const htmlParse=perf.domInteractive-perf.responseEnd

const resources=performance.getEntriesByType('resource').filter(i=>{
  return i.initiatorType==='css'||i.initiatorType==='script'
})
const firstResourceStartTime=resources.sort((a,b)=>a.fetchStart-b.fetchStart)[0].fetchStart
//css、js资源加载时间
const resourceLoadTime=perf.domContentLoadedEventEnd-firstResourceStartTime
console.table({
  blankScreen,
  dns,
  tcp,
  ssl,
  ttfb,
  htmlDownload,
  htmlParse,
  resourceLoadTime
})
```

