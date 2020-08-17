console.log('reportJs');
// alert('I am js reportJs');

(function() {
    var wb = document.createElement('script'),
        s = document.getElementsByTagName('head')[0],
        url = 'a.58cdn.com.cn/app58/rms/app/js/report1_32927.js?';
    wb.type = 'text/javascript';
    wb.async = false;
    wb.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + url + (+new Date());
    s.appendChild(wb);
})();