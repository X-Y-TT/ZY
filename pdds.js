/*
樊登读书VIP

下载地址：https://i.loli.net/2020/06/22/M5T4xXWJHintuAP.jpg

扫码下载获取VIP👆👆👆

获取更多：https://t.cn/A6ARmXZ0

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309

圈X

[rewrite_local]

https:\/\/.*\.dushu\.io\/* url script-request-body https://raw.githubusercontent.com/JungegeCN/JGG/master/pdds.js

[MITM]
hostname = *.dushu.io

*/

body = $request.body.replace(/\"token\":\"[^"]*\"/g, '\"token\":\"20200601MAomDKKlaUEALAHWGaE\"');
$done({body});


