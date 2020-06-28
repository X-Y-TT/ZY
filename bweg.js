/*
贝瓦儿歌永久VIP by JungegeCN

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309

资源发布：https://t.cn/A6ARmXZ0


圈X
#远程挂载
http:\/\/passport\.beva\.com\/passport\/v1\/sdk\/getuserinfo url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/bweg.js


[MITM]
hostname = passport.beva.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/passport/v1/sdk/getuserinfo';

if (url.indexOf(vip) != -1) {
	obj.data.userinfo.vip_info ["is_vip"] = "Y";
     obj.data.userinfo.vip_info ["end_time_fmt"] = "你死之时";
	body = JSON.stringify(obj);
 }
$done({body});
