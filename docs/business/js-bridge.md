# web端与客户端通信

## 背景

在hybrid app模式下，web端需要频繁的与客户端进行通信，如使用客户端的分享功能、获取客户端下发的用户基础数据等等，下面就来简单说下如何实现

### 客户端

ios、Android使用webview访问前端页面后可以通过向webview中注入对象、直接执行js代码字符串来与web端进行通信

* 注入全局对象

以Android为例，使用webview的**addJavascriptInterface**方法可以往客户端注入一个对象来供web端调用，web端调用这个方法并传入对应的业务参数之后客户端则可以拿到对应的字符串参数序列化为json对象做后续的处理。

* 执行js字符串

以Android为例，使用webview的**evaluateJavascript**方法并传入代码字符串则可以在webview的js全局上下文中执行代码，类似js的**eval**方法

### web端

了解了上文中描述的客户端的工作流程，在web端中可以以下形式来调用客户端的能力

```javascript
// JsBridge为客户端注入的全局对象
JsBridge.methodA()
JsBridge.methodB()
```

使用以下形式来响应客户端的请求

```javascript
//在web端编写以下全局方法
//在客户端使用evaluateJavascript("JSBRIDGE_CALLBACK_A('asdasd')")
//则可以使客户端调用到web端的方法
//一般调用了JsBridge方法后在这里接收回调
Window.JSBRIDGE_CALLBACK_A=function(){
    //...
}
Window.JSBRIDGE_CALLBACK_A=function(){
    //...
}
```

以上代码可以直观的看出一些问题

* 代码被强制分割。使用JsBridge调用客户端api后必须在另外一个方法中进行后续处理，这使得调用这部分api的代码编写全部都需要以这个形式进行，对于在旧代码中调用需要面临更多的代码改造
* 全局命名空间污染。提供给客户端的回调需要全部暴露在全局环境中，如果对每个需求都使用一个回调可想而知对全局命名空间的污染十分严重
* 不利于调试。对于处于开发阶段的项目，当web端需要调用客户端的某个api而客户端又未准备就绪时会出现报错导致开发进度受阻

下面来讲下我在日常开发中使用的一套方案

```typescript
interface CallbackInvokerMap {
  [key: string]: {
    resolve: Function;
    reject: Function;
    timer: number;
  };
}
interface CustomEventHandlerMap {
  [key: string]: Function[];
}
interface MockData {
  [key: string]: Partial<Params>;
}
interface Params<T = any> {
  id: number;
  name: string;
  payload: T;
  success?: boolean;
}

interface Options {
  timeout: number;
}

const customEventHandlerMap: CustomEventHandlerMap = {};

const callbackInvokerMap: CallbackInvokerMap = {};

let mockData: MockData;

let initialRequestId = 0;

const genRequestId = () => initialRequestId++;

const IN_WEBVIEW = typeof window.JsBridge !== "undefined";
/**
 * 向客户端发起请求，客户端的响应以promise的形式返回
 */
const request = <T, R>(name: string, data: T, options?: Partial<Options>) => {
  options = {
    timeout: 5000,
    ...options,
  };
  const requestId = genRequestId();
  const promise = new Promise<R>((resolve, reject) => {
    const item = {
      resolve,
      reject,
      timer: setTimeout(() => {
        item.reject();
      }, options?.timeout),
    };
    callbackInvokerMap[requestId] = item;
  });
  const params: Params<T> = {
    id: requestId,
    name,
    payload: data,
  };
  JsBridge.request(name, JSON.stringify(params));
  if (!IN_WEBVIEW) {
    if (mockData) {
      console.warn(`接口${name}-${requestId}返回mock数据`);
      callbackHandler({
        id: requestId,
        name,
        payload: mockData[name],
      });
    } else {
      console.error(`客户端接口${name}-${requestId}调用异常`);
      return Promise.reject();
    }
  }
  return promise;
};
/**
 * 自定义事件监听，单方面监听客户端的请求时可以使用这个方法
 */
const customEvent = {
  on(name: string, callback: Function) {
    if (!customEventHandlerMap[name]) {
      customEventHandlerMap[name] = [];
    }
    customEventHandlerMap[name].push(callback);
  },
  off(name: string, callback: Function) {
    if (customEventHandlerMap[name]) {
      customEventHandlerMap[name] = customEventHandlerMap[name].filter(
        (fn) => fn !== callback
      );
    }
  },
  invoke<T>(name: string, data: Params<T>) {
    if (customEventHandlerMap[name]) {
      customEventHandlerMap[name].forEach((fn) => {
        fn(data);
      });
    }
  },
};
/**
 * 用于接收客户端返回的响应并改变对应id请求的promise状态
 */
const callbackHandler = <T>(data: Params<T>) => {
  customEvent.invoke(data.name, data);
  const invoker = callbackInvokerMap[data.id];
  if (invoker) {
    if (data.success) {
      invoker.resolve(data.payload);
    } else {
      invoker.reject(data.payload);
    }
    clearInvoker(data.id);
  }
};
/**
 * 请求完成后使用这个方法清空对应的回调缓存
 */
const clearInvoker = (id: number) => {
  clearTimeout(callbackInvokerMap[id].timer);
  Reflect.deleteProperty(callbackInvokerMap, id);
};
/**
 * 写入mock数据，用于web端调试时使用
 */
const regiseterMockData = (data: MockData) => {
  mockData = data;
};
/**
 * 全局注册提供给客户端执行的函数变量
 */
const bootstrap = (namespace:string='XXX_JS_BRIDGE_CALLBACK_HANDLER') => {
  window[namespace] = (data: string) => {
    const parsedData: Params<any> = JSON.parse(data);
    callbackHandler(parsedData);
  };
};
export { regiseterMockData, bootstrap, customEvent, request, IN_WEBVIEW };

```

以上代码为简略版的jsbridge调用方案，注意此方案需要与客户端开发人员协商参数的数据结构

* 以上面代码为例，客户端在webview中注入**JsBridge**对象供前端调用，该对象仅暴露了一个request方法，客户端需要根据该方法name参数的不同来做不同业务逻辑的处理。
* web端仅提供了一个全局方法供客户端调用，见**bootstrap**方法，需要客户端在响应时将前端请求时提供的name、id返回给前端

简单分析下上面的代码运行流程

* 前端调用request方法来使用客户端提供的api，这个方法调用了JsBridge对象的request方法
* 将name与业务参数发送给客户端，客户端做对应处理；同时前端为每个请求new一个Promise对象，将Promise对象的resolve、reject按id写入一个对象中
* 客户端内部处理完成后执行前端提供的全局方法，该方法拿到发起请求时对应的id后找到对应的promise处理方法，根据成功与否来执行resolve、reject
* 到此一个正常的请求流程结束
*   当客户端超时未响应，则前端手动调用promise reject来抛出异常





