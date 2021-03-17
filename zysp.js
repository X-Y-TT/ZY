/*
知音视频VIP

下载地址：https://avfsyt.xyz?p=1B1N9W


电报频道：https://t.me/ThorHCC
QQ资源群：189519867
QQ吹牛群：316864309

圈X


[rewrite_local]

https:\/\/avapp\.clapib\.me\/* url script-request-body https://raw.githubusercontent.com/JungegeCN/JGG/master/zysp.js

[MITM]
hostname = avapp.clapib.me


*/

body = $request.body.replace(/\"Authorization\":\"[^"]*\"/g, '\"Authorization\":\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTIxMjYzIiwiaXNzIjoiIiwiaWF0IjoxNjE1OTYwMzY4LCJuYmYiOjE2MTU5NjAzNjgsImV4cCI6MTc3MzY0MDM2OH0.uTfRasyR0aao6Hp7Iux55m0PV4-YG5zmzEkuJIkhKcU\"');
$done({body});
