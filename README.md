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
## git commit tips
关于git提交时-m参数的正确格式 eg : `<type>(<scope>): <subject>`
* feat：新功能（feature）  
* fix：修补bug  
* docs：文档（documentation）  
* style： 格式（不影响代码运行的变动）  
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）  
* test：增加测试  
* chore：构建过程或辅助工具的变动  
>more see [相关博客](https://www.cnblogs.com/daysme/p/7722474.html "git 提交的正确姿势")