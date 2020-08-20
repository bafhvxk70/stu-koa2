window.onerror = function (a, b, c, d) {
  var obj = {
    a: a,
    b: b,
    c: c,
    d: d
  }
  var arr = []
  for (let a in obj) {
    arr.push(`${a}=${obj[a]}`)
  }
  fetch('/list/submit?'+arr.join('&')).then(() => {
    console.log('成功')
  }, () => {
    console.log('失败')
  })
}
console.log("reportJs"),function(){window._report1=window.getT(),document.getElementById("report1").innerHTML="我是script-native标签的时间---"+window._report1.s2;var wb=document.createElement("script"),s=document.getElementsByTagName("head")[0];wb.type="text/javascript",wb.async=!1,wb.src=("https:"==document.location.protocol?"https://":"http://")+"a.58cdn.com.cn/app58/rms/app/js/report1_32927.js?"+ +new Date,s.appendChild(wb)}();