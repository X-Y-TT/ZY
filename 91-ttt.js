    /*
综合LSP破解
目前支持91短视频、汤头条


[rewrite_local]

#91短视频
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/91-ttt.js
#汤头条
^https?:\/\/.+\.(.*tbrapi.*)\.(com|tips|app|xyz)(:\d{2,5})?\/api.php/.*$ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/91-ttt.js

[MITM]
hostname: *.i91porn.*,*.tbrapi.*

下载链接：
91短视频：app.91porn005.me:2082/aff-aB6v2
汤头条：https://ttt.tangbr.com/af/gkjX



*/
let obj = JSON.parse($response.body);
const payne = init()
const urlStr = `http://45.138.69.207/api/crypto`;
// const urlStr = `http://192.168.1.104/api/crypto`;

decrypt();

function decrypt(){
    let platform = "";
    if ($request.url.indexOf("91") !== -1) {
        platform = "91dsp";
    } else if ($request.url.indexOf("tbrapi") !== -1) {
        platform = "ttt";
    }
    let url = { url: urlStr, headers: {}}
    //其他平台请修改platform相应的值
    url.body = `flag=decrypt&platform=` + platform + `&plaintext=&ciphertext=` + obj.data;
    payne.post(url, (error, response, data) => {
        const resBody = JSON.parse(data);
        //解密网站返回的数据取data才是91的数据包,修改result返回你想要的结果
        let result = JSON.parse(resBody.data);
        if ("91dsp" === platform) {
            result = set91(result);
        }else if ("ttt" === platform) {
            result = setTtt(result);
        }
        encrypt(platform,JSON.stringify(result));
    })
}

function encrypt(platform,str){
    // payne.msg("请求内容:", "", str);
    let url = { url: urlStr, headers: {}}
    //其他平台请修改platform相应的值
    url.body = `flag=encrypt&platform=` + platform + `&ciphertext=&plaintext=` + str;
    payne.post(url, (error, response, data) => {
        let result = JSON.parse(data);
        obj.data = result.data;
        let body=JSON.stringify(obj);
        payne.done(body);
    })
}

function set91(result) {
    result.isVip = true;
    if (result.hasOwnProperty('data')) {
        if (result.data.hasOwnProperty('success')) {
            result.data.success = true;
        }
        if (result.data.hasOwnProperty('info')) {
            result.data.info.isVip = true;
            result.data.info.watchCount = 9999999;
            result.data.info.canWatchCount = "9999999";
            result.data.info.watchStr = "想看就看";
            result.data.info.coins = 9999999;
            result.data.info.vip_level = 5;
            result.data.info.level = 99;
            result.data.info.upLevel = 9;
            result.data.info.originalLevel = 9;
        }
    }
    return result;
}
function setTtt(result) {
    result.isVip = true;
    result.daily_view = 9999999;
    if (result.hasOwnProperty('data')) {
        if (result.data.hasOwnProperty('code')) {
            result.data.code = 0;
            result.data.msg = "无汤币限制";
        }
        if (result.data.hasOwnProperty('nickname')) {
            result.data.vip = true;
            result.data.coins = 9999999;
            result.data.free_view_cnt = 9999999;
            result.data.vip_level = 9;
            result.data.expired_at = "2099-11-07";
        }
    }
    return result;
}
function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
