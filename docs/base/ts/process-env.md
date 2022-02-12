# process.env变量声明合并

声明通过webpack.DefinePlugin写入的变量

```typescript
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />

declare global {
  namespace NodeJS { //在这里声明所需的环境变量类型，与 *@types/webpack-env/index.d.ts* 下的声明合并
    interface Process {
      env: {
        NODE_ENV: 'production'|'debug'|'development'
        APP_ID:string
      }
    }
  }
}
```
