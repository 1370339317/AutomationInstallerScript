# [回到导航页](../README.MD)
<br\>

## 什么是QuickJS
> QuickJS是一个小型并且可嵌入的Javascript引擎，它支持ES2020规范，包括模块，异步生成器和代理器。
> 它可选支持数学扩展，例如大整数 (BigInt)，大浮点数 (BigFloat) 以及运算符重载。

#### QuickJS不是另外一种NodeJS，而更像V8
###### 像lua一样，为C提供动态能力
我已经看到了很多混淆，例如QuickJS只是NodeJS的替代品，实际上，你不能将代码从NodeJS直接移植到QuickJS，因为NodeJS有它自己的API（fs、path、process、网络等）而QuickJS有一小部分可用的原生函数。


因此，为了提高我们对它的理解，我们将创建一个基本的C模块来为Javascript扩展更多功能。
#### 源码
[https://bellard.org/quickjs/](https://bellard.org/quickjs/)

#### 原生玩法
[不错的中文导航文档](https://github.com/quickjs-zh/QuickJS/wiki)

[编译工具-msys2](https://www.msys2.org/#authors-and-contributors)
### quickjs调试
[vscode调试插件](https://marketplace.visualstudio.com/items?itemName=koush.quickjs-debug&ssr=false#overview)

[对应编译可直接使用的quickjs](https://github.com/yecate/quickjs)
> 直接clone ,安装了msys2的，打开MinGW直接make可用
> 
[Visual Studio可编译的项目](https://github.com/zeromake/quickjs)