# [�ص�����ҳ](../../README.MD)
<br\>
# Electron����demo������
## demoʵ�ֹ��ܣ�

> ��demo��Ҫ��ʹ��electron��ܣ�������һ��ʹ��monaco-editor�򵥸����ı༭����


## ʹ�ã�

> Ҫ���У��Ȱ�װ[node.js](https://nodejs.org/dist/)���汾���ݸ�������ѡ��

����������������ִ�У�
npm install cnpm -g
cnpm install electron -g
cnpm install monaco --save-dev
cnpm install monaco-editor --save-dev
cnpm install js-beautify --save-dev
cnpm install requirejs --save-dev

ʹ��cnpm��Ҫ��Ϊ�˷�ֹ���ؿ��٣���ȻҲ���Բ���cnpmֱ��ʹ��npm

> ������Ҫʹ��npm startָ��ִ�У������ڴ�֮ǰ��Ҫ��package.json�������startָ��,��scripts�����start���ɡ�

```
"scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
