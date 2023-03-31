# [回到导航页](../../README.MD)
<br\>
# Electron高亮demo的运行
## demo实现功能：

> 本demo主要是使用electron框架，构建了一个使用monaco-editor简单高亮的编辑器。


## 使用：

> 要运行，先安装[node.js](https://nodejs.org/dist/)，版本依据个人需求选择。

依次运行以下命令执行：
npm install cnpm -g
cnpm install electron@20.0.0 --save-dev
cnpm install electron-build@22.11.7 --save-dev

还需要安装更多的东西

cnpm install ffi-napi --save
cnpm install ref-napi --save
cnpm install node-gyp --save
cnpm install nan --save
cnpm install monaco --save
cnpm install monaco-editor --save
cnpm install js-beautify --save
cnpm install requirejs --save


以下主要是ffi-napi和ref-napi的依赖，虽然现在还没使用，之后要接C++相关代码，打包还是需要:
cnpm install debug --save
cnpm install ms --save
cnpm install node-gyp-build --save
cnpm install ref-struct-di --save


要打包的话，还需要配置一下镜像，不然会下载卡死什么的，总之非常神奇
npm config set registry http://registry.npm.taobao.org/
npm config set electron_mirror="https://npm.taobao.org/mirrors/electron/"
npm config set electron_builder_binaries_mirror="http://npm.taobao.org/mirrors/electron-builder-binaries"


使用cnpm主要是为了防止下载卡顿，当然也可以不用cnpm直接使用npm
ffi-napi需要换低版本electron才能使用，主要是之后v8的底层api有修改，喵的作者没改，暂时就搞不了高版本，不过应该用不上高版本
因为传递字符串一般是指针，其中ffi-napi没直接支持C++的stl，因此不能直接传string，还需要定义一个全局变量才行，本demo中主要用的是类
还有个问题主要是js中针对文件编码的问题，读出的utf-8编码的文件直接被js识别成相关的二进制数组了，转字符串，全是奇奇怪怪的内容，可能得针对编码搞一下


> 其中需要使用npm start指令执行，但是在此之前需要在package.json中添加上start指令,在scripts中添加start即可。

```
"scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

# 打包

打包样式在package.info中，主要是dist命令和build设置

to be continue
