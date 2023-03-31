# [�ص�����ҳ](../README.MD)



## ʲô���������
<div align="center">
֧��python3��javaScript��shell��typescript �Ķ�ʱ����������
</div>

![](./doc/qinglong0.png)

## ����

- ֧�ֶ��ֽű����ԣ�python3��javaScript��shell��typescript��
- ֧�����߹���ű������������������ļ�
- ֧�����߲鿴������־
- ֧���뼶��������
- ֧��ϵͳ��֪ͨ
- ֧�ְ���ģʽ
- ֧���ֻ��˲���
## ���ò���
1.��װ�������

* ����һ���������Ϊ��ά���˲���Ǳ���:[������尲װ](https://www.bt.cn/new/download.html)

* ���������������������һ����װ
```base
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```
\
��һ·yes�󣬰�װ��ɺ���ͼ\
![](./doc/baota.png)\

\
2.��װdocker
* ����һ���򿪱���������docker����ʾ��װ\
![](./doc/baota2.png)

* ��������bash��������
```bash
sudo curl -sSL get.docker.com | sh
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

\
3.��ȡ��������
```bash
docker pull whyour/qinglong:latest
```

\
4.��װ��������
```bash
docker run -dit \
  -v $PWD/ql/config:/ql/config \
  -v $PWD/ql/log:/ql/log \
  -v $PWD/ql/db:/ql/db \
  -v $PWD/ql/repo:/ql/repo \
  -v $PWD/ql/raw:/ql/raw \
  -v $PWD/ql/scripts:/ql/scripts \
  -v $PWD/ql/jbot:/ql/jbot \
  -v $PWD/ql/deps:/ql/deps \
  -v $PWD/ql/ninja:/ql/ninja \
  -p 5700:8894 \
  -p 5701:8895 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest

```

\
5.ע�ᡢ��¼�������\
��������룺[http://ip:8894](http://ip:8894)\
![](./doc/qinglong1.png)

\
6.��װ�����ⲿ����\
������ȽϾã�������ȥ�ݱ����ϸ�����
```bash
docker exec -it qinglong bash
curl -fsSL https://ghproxy.com/https://raw.githubusercontent.com/shufflewzc/QLDependency/main/Shell/QLOneKeyDependency.sh | sh
exit
docker restart qinglong
```

\
7.��װ�����ڲ�����\
��¼�������ֱ����\
![](./doc/qinglong3.png)
js������
```bash
npm&upgrade pip&install&png-js&date-fns&axios&crypto-js&ts-md5&tslib&@types/node&dotenv&typescript@&socks-proxy-agent&https-proxy-agent&fs&require&tslib&jsdom&request&js-base64&requests&form-data&crypto -g&ws@7.4.3&prettytable&tough-cookie&jsdom -g&jieba&json5&global-agent&pip3 install jieba&npm i
```
Python3������
```bash
typescript&requests&canvas&ping3&jieba&PyExecJS
```
\
һ��ʱ��󣬼��ɰ�װ���
![](./doc/qinglong4.png)

## ʾ���ű�
[���������ճ�ǩ����](https://github.com/RayWangQvQ/BiliBiliToolPro)