console.log('reportJs');
var _body = document.getElementsByTagName('body')[0];
var _s = Date.now()
var ms = _s % 1000;
var t = new Date();
var _str = t.getHours() +"小时" + t.getMinutes() + "分钟" + t.getSeconds() + "秒" + ms +  "毫秒";
document.getElementById('report').innerHTML = "我是script标签的时间---" + _str;
(function() {
    var wb = document.createElement('script'),
        s = document.getElementsByTagName('head')[0],
        url = 'a.58cdn.com.cn/app58/rms/app/js/report1_32927.js?';
    wb.type = 'text/javascript';
    wb.async = false;
    wb.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + url + (+new Date());
    s.appendChild(wb);
})();