/*
香蕉视频完美🔓

App下载地址：http://t.cn/AiF4NGUo

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309

资源发布：https://t.cn/A6ARmXZ0


圈X

把第1️⃣段规则复制到rewrite local下面，然后1.0.10以上版本远程挂载本JS文件

[rewrite_local]

#1️⃣复制到本地
https:\/\/.*\.(lagoapps|guoguoapps|pipiapps).com url request-header Cookie:.+ request-header Cookie: xxx_api_auth=3433346533343130636136363935363132383864623761323737363464376233

#2️⃣远程挂载
https?:\/\/.*\.(lagoapps|guoguoapps|pipiapps)\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/|\/comment\/listing\/) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/xjsp.js

[MITM]
hostname = *.guoguoapps.com, *.pipiapps.com, *.lagoapps.com


*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
obj.data.uinfo.down_daily_remainders = "5201314";
obj.data.uinfo.play_daily_remainders = "5201314";
obj.data.uinfo.minivod_play_daily_remainders = "5201314";
obj.data.uinfo.minivod_down_daily_remainders = "5201314";
obj.data.user.nickname = "JungegeCN";
obj.data.user.avatar_url = "https://i.loli.net/2019/10/24/eCJuqz75WrL6ihQ.jpg";
obj.data.user.goldcoin = "52013";
obj.data.user.dueday = "JungegeCN";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  delete obj.data.adgroups;
  delete obj.data.iOS_adgroups;
}

$done({body: JSON.stringify(obj)});

