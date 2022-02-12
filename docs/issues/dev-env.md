# 开发环境搭建相关

#### 设置全局npm包安装路径

```shell
# xxx就是自定义路径
# 设置完自定义路径之后要将其加入到环境变量中，使得全局包的命令可以被调用
npm config set prefix xxx 
# 设置npm缓存路径
npm config set cache xxx
#设置yarn全局安装路径
yarn config set global-folder xxx
#设置yarn全局缓存路径
yarn config set cache-folder xxx
#设置yarn全局bin目录
yarn config set prefix xxx 

```

