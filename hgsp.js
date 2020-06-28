/*

#黄瓜视频完美🔓 by JungegeCN

下载地址：https://url.cn/5BSZbzV

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309

资源发布：https://t.cn/A6ARmXZ0


圈X：

https:\/\/api88\.awk2\.work\/(user\/info|mov\/browse2*) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js

Loon:
[Script]
#黄瓜视频VIP
http-response ^https:\/\/api88\.awk2\.work\/(user\/info|mov\/browse2*) script-path=https://raw.githubusercontent.com/JungegeCN/JGG/master/hgsp.js, requires-body=true, timeout=10, tag=黄瓜视频VIP


MITM = api88.awk2.work


*/

var body = $response.body;




body=body.replace(/vipLogo\":\d/g,'vipLogo":4').replace(/gender\":(\-|\+?)\d+/g,'gender":1').replace(/isPaid\":\d+/g,'isPaid":1').replace(/supUserId\":\d+/g,'supUserId":0').replace(/hasBuy\":\w+/g,'hasBuy":true').replace(/vipEndDate\":\"(.*?)\"/g,'vipEndDate":\"2222-02-22\"').replace(/phone\":\"(.*?)\"/g,'phone":\"JungegeCN\"').replace(/userCls\":\d+/g,'userCls":2').replace(/isExpired\":\d+/g,'isExpired":1');


$done({body});

