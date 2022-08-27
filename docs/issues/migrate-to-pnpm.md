# 从yarn迁移到pnpm
## 单仓库
```shell
pnpm import 
```
从yarn.lock导出pnpm-lock.yaml
## monorepo
1. 首先进入各个子模块执行*pnpm install*，各个子模块的*pnpm-lock*文件
2. 执行以下nodejs脚本，根据需求修改subLocks的配置 
    ```js
    const { parse, stringify,parseDocument } =require('yaml')
    const fs=require('fs')
    const subLocks=[
      './packages1/p1/pnpm-lock.yaml',
      './packages1/p2/pnpm-lock.yaml',
    ]
    const jsonList=subLocks.map(dir=>{
      const file=fs.readFileSync(dir, 'utf8')
      const json=parse(file)
      return {
        packageName:dir.replace('./','').replace('/pnpm-lock.yaml',''),
        json
      }
    })
    const rootJson=parse(fs.readFileSync('./pnpm-lock.yaml', 'utf8'))
    jsonList.forEach(({packageName,json})=>{
      const {specifiers,dependencies,packages}=json
      rootJson.importers[packageName]={
        specifiers,
        dependencies
      }
      Object.assign(rootJson.packages,packages)
    })
    const newYAML=stringify(rootJson)
    fs.writeFileSync('./pnpm-lock.yaml',newYAML,'utf8')
    console.log(newYAML,rootJson)
    ```
3. 再执行以下命令，将目录的pnpm-lock进行格式化    

    ```shell
    pnpm install --fix-lockfile
    ```
    **思路**：读取各个子模块的pnpm-lock文件，将依赖声明以workspace的格式合并到根目录的pnpm-lock文件中
4. 然后就可以删除所有的yarn.lock，以及packages下的pnpm-lock.yarml文件，只保留根目录的pnpm-lock.yarml即可