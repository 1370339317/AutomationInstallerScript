# [�ص�����ҳ](../README.MD)
<br\>

# ʲô��Zerotir
> Zerotir ��һ����Դ�������������ߣ������������ĺ��ǵĻ���������ͬһ��������
��ʱ��������ŵ�ʹ�ø��־���������

# ���ò���

## > ��Ҫ
> ����ؿ������������²���

1. [>����<](https://my.zerotier.com/) ��Zerotir��ҳ

2. ע���˺Ų���¼
![Zerotir��ҳ](./doc/signup.png)

3. ��¼���ҳ������Create A Netword����ť����һ���µ�����
4. �����������������Ŀ
![Zerotir��ҳ](./doc/createNet.png)

5. ��������������һ�����֣�ѡ������ID�Ҽ�����
![Zerotir��ҳ](./doc/netname.png)

6. �����Լ��Ļ������ͣ���ÿ����Ҫ�����ĵ��Զ����ض�Ӧ�Ŀͻ��˰�װ
    > Windows��[>��������<](https://download.zerotier.com/dist/ZeroTier%20One.msi)
   > 
   > MacOS  :[>��������<](https://download.zerotier.com/dist/ZeroTier%20One.pkg)
   > 
   > iOS:[>��������<](https://apps.apple.com/us/app/zerotier-one/id1084101492)
   > 
   > ��׿:[>��������<](https://play.google.com/store/apps/details?id=com.zerotier.one)


7. ���غ�װ�������װ��ɺ����½ǳ���Zerotir �Ҽ������Join New NetWork...��
![Zerotir��ҳ](./doc/clickright.png)

8. �ڵ����ı༭����ճ��(����5��)���Ƶ�ID�������Join��

![Zerotir��ҳ](./doc/join.png)

9. �ڵ������½������ҵ�Zerotir�Ҽ�������ղż��������

10. ��ѡ������Ŀ
![Zerotir��ҳ](./doc/selectall.png)

11. ���»ص�Zerotir��ҳ[[����]](https://my.zerotier.com/)��ѡ��֮ǰ��������Ŀ

12. �������ڵĵ�ÿ���������ٷ���һ��ip
![Zerotir��ҳ](./doc/setip.png)

13. ����������A ����ipconfig �鿴�����Ƿ���Ч

14. ping ��������һ̨�����������ڷ�ֱͨ
![Zerotir��ҳ](./doc/pingok.png)


## ���� 
### ʹ�ô�����ip�Ļ��������� moon�ڵ㣬����ת�������ӳ�
> �����Ѿ���������������ڷ������ڹ��⣬�ӳٽϸߡ����˽��鹺���Ʒ�����ѧ��������ת���ܰ���

1.���øù��������ķ���ǽ������9993�˿ڡ�
![Zerotir��ҳ](./doc/firewall.png)

2.��װZerotir �ͻ���
3.����Ϊ��ת�Ļ�����cmd,ִ������ָ��
   > cd C:\ProgramData\ZeroTier\One
   > 
   > zerotier-one_x64.exe -i initmoon identity.public >>moon.json
   > 


4.��moon.json���ѹ���IP���ȥ����
  > ���±��򿪡�stableEndpoints��: ["8.8.8.8/9993"] #8.8.8.8 ��Ϊ��Ĺ���IP
  > 
![Zerotir��ҳ](./doc/severip.png)
5.����������������ǩ��
   > cd C:\ProgramData\ZeroTier\One
   > 
  > zerotier-one_x64.exe -i genmoon moon.json
  
6.��MOON����������
> ��C:\ProgramData\ZeroTier\One\Ŀ¼�½����ļ��� moons.d Ŀ¼�����ո����ɵ� *.moon �ļ�������ȥ��


7.����Zerotir����
> ����WIN+R�����������д��ڣ�2 ���롱services.msc�����س������еķ������ҵ�ZeroTier one,ѡ�е���Ҽ�������������


8.��������������LEAF�ڵ㣬cmdִ����������#moonΪMoon��IDֵ
   > cd C:\ProgramData\ZeroTier\One
   > 
> zerotier-one_x64.exe -q orbit 000000xxxxx 000000xxxxx 

9.������moon�ڵ��Ƿ�ɹ����ڻ���ִ�����������moon�����ڵ㼴�ɹ�
   > cd C:\ProgramData\ZeroTier\One
   > 
> zerotier-one_x64.exe -q listpeers
   >
![Zerotir��ҳ](./doc/checkmoon.png)

10.��ʱ�ٴ�����������ping���ӳٽ�Ϊ100ms����
![Zerotir��ҳ](./doc/pingwithmoon.png)
