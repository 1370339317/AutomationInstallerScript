# [回到导航页](../../README.MD)
<br\>
# Electron高亮demo的运行
## demo实现功能：

> 本demo主要是使用electron框架，构建了一个使用monaco-editor简单高亮的编辑器。


## 使用：

> 要运行，先安装[node.js](https://nodejs.org/dist/)，版本依据个人需求选择。

依次运行以下命令执行：
npm install cnpm -g
cnpm install electron -g
cnpm install monaco --save-dev
cnpm install monaco-editor --save-dev
cnpm install js-beautify --save-dev
cnpm install requirejs --save-dev

使用cnpm主要是为了防止下载卡顿，当然也可以不用cnpm直接使用npm

> 其中需要使用npm start指令执行，但是在此之前需要在package.json中添加上start指令,在scripts中添加start即可。

```
"scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
