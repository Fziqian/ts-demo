# ts-demo
ts，以及一些前端自动化工具的学习  
`npm install` 安装项目相关依赖
## gulp
---
first of all : `npm i -g gulp-cli`  
then try the following command 
```
gulp ----default(其实执行的就是bundle)
gulp bundle ------打包
gulp watch  ----------监听代码改动
```
> more task info see in [gulpfile.js](./gulpfile.js "点击查看更多gulp任务") 

## webpack
---
fist of all: `npm i -g webpack webpack-cli webpack-dev-server`  
then try the following command
```
npm run dev 
npm run build
```
>more info see in [webpack.config.js](./webpack.config.js "点击查看更多webpack配置信息")
## jsdoc
---
see this jsdoc build by this [demo](https://fziqian.github.io/ts-demo/)
```
npm i -g jsdoc
npm run jsdoc
```
>more config about jsdoc in [conf.json](./conf.json "点击查看关于jsdoc的配置")，参考[相关博客](https://blog.csdn.net/liu602182699/article/details/48393439)
