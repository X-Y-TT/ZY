/*

QX

[rewrite_local]
https:\/\/.*\.snssdk\.com\/reading\/user\/info\/v:version\/ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/tomato.js


[MITM]
hostname = %APPEND% *.snssdk.com
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/reading/user/info/v:version/") != -1){
obj.data.privilege = [{"id":"6703327493505422087","name":"TTS权益","expire_time":"1750987456","is_forever":"1","extra":"{\"from\":4}","start_time":"1586017251","left_time":"1476","download_book_ids":null},{"id":"6766572795204735752","name":"批量下载","expire_time":"1587222928","is_forever":"0","extra":"{\"from\":1}","start_time":"1586012290","left_time":"1205353","download_book_ids":null},{"id":"6703327401314620167","name":"免广告","expire_time":"1750987456","is_forever":"1","extra":"{\"from\":1}","start_time":"1586014421","left_time":"4528454854","download_book_ids":null}];
obj.data.vip_info = {"is_vip":"1","expire_time":"1750987456","left_time":"1750987456"};
}
$done({body: JSON.stringify(obj)});
