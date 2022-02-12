# 使用rxjs管理枚举数据

## 背景：

B端系统往往业务复杂，模块数量多，许多业务场景都需要使用由服务端下发的枚举数据，例如：

* 列表搜索时所需的选项数据
* 创建表单时所需的选项数据

当这些数据来源比较少时可以通过在系统初始化时一次性加载并写入store进行调用，但是当数据来源变多时会存在一下问题，**在初始化时一次性加载所有数据开销过大，导致页面性能下降，**那么这个时候一般会考虑按需加载，也就是在需要的页面中去获取数据并写入store,这种方案也会存在一个问题，**何时去发起请求**，当一组数据在多个模块间使用，但是又无法确定哪个模块会先加载的情况下只能够在每个用到数据的地方去初始化数据，以vue项目为例，需要在多个模块中都编写**dispatch action**的代码,造成冗余的样板代码变多，并且当数据存储在store中后查询数据也十分繁琐，要么是使用**mapgetter**等方法，要么是使用**this.$store.state.xxxModule.xxxObj.xxxField**，因此本文引入rxjs来处理这种场景，使得数据的调用者无需关心数据何时去加载，当首次使用时会自动加载数据并缓存

## 解决方案：

使用rxjs来管理此类数据，当首次调用数据时会去服务端查询，后续操作则使用缓存数据，在更新数据的模块手动调用update方法来获取最新数据，具体代码如下

以下代码基于 rxjs 7.x，typescript 4.x

```javascript
import {
  BehaviorSubject,
  combineLatest,
  defer,
  Observable,
  of,
  Subject,
  Subscription,
  concat,
  ObservableInputTuple,
  OperatorFunction,
} from "rxjs";
import { filter, map, retry, tap } from "rxjs/operators";
type Await<T> = T extends Promise<infer P> ? P : T;
export type ICombinedObservableCreator<T> = {
  [K in keyof T]: Result<T[K]>;
};

interface Options<T> {
  initialValue?: T;
  realtime?: boolean;
}
interface Result<T> {
  data: Observable<T>;
  update: () => void;
}
//创建一个api observable，当订阅时发出请求，
export const createObservableApi = <T>(
  api: () => Promise<T>,
  options?: Options<T>
): Result<T> => {
  const defaultOptions: Options<T> = {
    initialValue: undefined,
    realtime: false,
  };
  const mergedOptions: Options<T> = {
    ...defaultOptions,
    ...options,
  };
  let pending = false;
  let subscription: Subscription;
  type ISourceData = {
    ready: boolean;
    data?: Await<ReturnType<typeof api>>;
  };
  const initialSource: ISourceData = {
    ready: mergedOptions.initialValue !== undefined,
    data: mergedOptions.initialValue,
  };
  const subject = new BehaviorSubject(initialSource);
  const commonOps: OperatorFunction<any, any>[] = [
    filter((val: ISourceData) => val.ready),
    map((val: ISourceData) => val.data),
  ];
  //可用于手动请求服务端api
  const update = () => {
    if (pending) {
      return;
    }
    pending = true;
    if (subscription) {
      subscription.unsubscribe();
    }
    const obs = defer(api).pipe(
      retry(5),
      map((data) => {
        return {
          ready: true,
          data,
        };
      }),
      tap(() => {
        pending = false;
      })
    );
    if (!mergedOptions.realtime) {
      //在这里使用一个匿名函数，因为defer执行完毕后会complete,直接使用subject订阅的话会使subject也进入complete状态
      subscription = obs.subscribe((val) => {
        subject.next(val);
      });
    }
    //如需要实时数据则会订阅这个数据源，每次都会请求服务端
    return concat(
      of(initialSource),
      obs
      //@ts-ignore
    ).pipe(...commonOps);
  };
  const obs = update() as Observable<T>;
  if (mergedOptions.realtime) {
    return {
      data: obs,
      update: () => {},
    };
  }
  //@ts-ignore
  const data = subject.pipe(...commonOps) as Subject<T>;
  return {
    data,
    update,
  };
};

/**
 * 这个方法会对传入的createObservableApi返回值组成的数组做组合
 * 当需要同时等待多个数据初始化完成并做后续逻辑处理时调用
 */
export const combineObservableApi = <A extends unknown[]>(
  sources: ICombinedObservableCreator<[...A]>
) => {
  const data = sources.map((s) => s.data) as ObservableInputTuple<A>;
  return combineLatest<A>(data);
};
/**
 * 与上一个方法类似，但是是基于Promise的一次性订阅
 */
export const waitObservableApiList = <A extends any[]>(
  obsApiList: ICombinedObservableCreator<[...A]>
) => {
  const data = obsApiList.map((o) => o.data) as ObservableInputTuple<A>;
  const result$ = combineLatest<A>(data);
  return new Promise<A>((resolve, reject) => {
    const subscription = result$.subscribe({
      next: (val) => {
        resolve(val);
        subscription.unsubscribe();
      },
      error: (err) => {
        reject(err);
        subscription.unsubscribe();
      },
    });
  });
};
```

使用

```javascript
const fetchApi = () => {
  console.log(`fetching`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([3, 2, 1])
    }, 3000);
  })
}
export const apiObs= createObservableApi(fetchApi)
//这里多次订阅数据源，可以看到只打印了一次fetching，实际场景中对应调用了一次server api
apiObs.data.subscribe(val => {
  console.log(val)
})
apiObs.data.subscribe(val => {
  console.log(val)
})
apiObs.data.subscribe(val => {
  console.log(val)
})
```

合并多个数据源

```javascript
const fetchApi = () => {
  console.log('fetching1')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['A', 'B', 'C'])

    }, 1000);
  })
}
const fetchApi2 = () => {
  console.log('fetching2')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([3, 2, 1])
    }, 3000);
  })
}
export const apiTest = createObservableApi(fetchApi)
export const apiTest2 = createObservableApi(fetchApi2)
const result$ = combineObservableApi(apiTest, apiTest2)
result$.subscribe(val => {
  //只有当两组api都请求完毕时才会运行此处的代码
  console.log(val)
})
```

关于如何在vue项目中使用则可以参考vue-rx文档

[https://github.com/vuejs/vue-rx](https://github.com/vuejs/vue-rx)

