# [�ص�����ҳ](../../README.MD)
<br\>
# Electron����demo������
## demoʵ�ֹ��ܣ�

> ��demo��Ҫ��ʹ��electron��ܣ�������һ��ʹ��monaco-editor�򵥸����ı༭����


## ʹ�ã�

> Ҫ���У��Ȱ�װ[node.js](https://nodejs.org/dist/)���汾���ݸ�������ѡ��

����������������ִ�У�
npm install cnpm -g
cnpm install electron@20.0.0 --save-dev
cnpm install electron-build@22.11.7 --save-dev

����Ҫ��װ����Ķ���

cnpm install ffi-napi --save
cnpm install ref-napi --save
cnpm install node-gyp --save
cnpm install nan --save
cnpm install monaco --save
cnpm install monaco-editor --save
cnpm install js-beautify --save
cnpm install requirejs --save


������Ҫ��ffi-napi��ref-napi����������Ȼ���ڻ�ûʹ�ã�֮��Ҫ��C++��ش��룬���������Ҫ:
cnpm install debug --save
cnpm install ms --save
cnpm install node-gyp-build --save
cnpm install ref-struct-di --save


Ҫ����Ļ�������Ҫ����һ�¾��񣬲�Ȼ�����ؿ���ʲô�ģ���֮�ǳ�����
npm config set registry http://registry.npm.taobao.org/
npm config set electron_mirror="https://npm.taobao.org/mirrors/electron/"
npm config set electron_builder_binaries_mirror="http://npm.taobao.org/mirrors/electron-builder-binaries"


ʹ��cnpm��Ҫ��Ϊ�˷�ֹ���ؿ��٣���ȻҲ���Բ���cnpmֱ��ʹ��npm
ffi-napi��Ҫ���Ͱ汾electron����ʹ�ã���Ҫ��֮��v8�ĵײ�api���޸ģ���������û�ģ���ʱ�͸㲻�˸߰汾������Ӧ���ò��ϸ߰汾
��Ϊ�����ַ���һ����ָ�룬����ffi-napiûֱ��֧��C++��stl����˲���ֱ�Ӵ�string������Ҫ����һ��ȫ�ֱ������У���demo����Ҫ�õ�����
���и�������Ҫ��js������ļ���������⣬������utf-8������ļ�ֱ�ӱ�jsʶ�����صĶ����������ˣ�ת�ַ�����ȫ������ֵֹ����ݣ����ܵ���Ա����һ��


> ������Ҫʹ��npm startָ��ִ�У������ڴ�֮ǰ��Ҫ��package.json�������startָ��,��scripts�����start���ɡ�

```
"scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

# ���

�����ʽ��package.info�У���Ҫ��dist�����build����

to be continue
