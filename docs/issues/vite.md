# vite相关问题记录
1. 在vite中使用babel 接入@rollup/plugin-babel，配置如下
  ```js
  import {babel} from '@rollup/plugin-babel'
  export default {
    plugins:[
      ...babel({
        extensions:['.js','.vue'],
        enforce:'post',
        //在这里根据id过滤文件
        filter:(id)=>{
          //如果不是enforce post，这里就会是源码文件，包含html片段无法被babel处理
          if(/.vue$/.test(id)){
            return true
          }
          if(/node_modules/.test(id)){
            return false
          }
          if(id.indexOf('?vue')>=0){
            if(id.indexOf('type=script')>=0){
              return true
            }
            return false
          }
          return true
        }
      })
    ]
  }
  ```
2. tailwindcss接入导致 hmr卡顿   
  原因：tailwindcss.config.js中的content选项匹配了src中所有的文件，按需加载功能需要匹配代码内容，当content对应的文件数量较多时会导致卡顿
  解决方案：开发模式下content设为空数组，safelist使用正则/.*/匹配所有内容，在开发模式不使用按需加载

3. .vue script配置了lang="jsx | tsx"后无法正确转换jsx   
  配置esbuild.jsx=preserve,把这部分代码交给babel处理