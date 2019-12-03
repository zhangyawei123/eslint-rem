(function() {
  let deviceWidth = document.documentElement.clientWidth
  document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'

  // 屏幕大小变换时
  window.onresize = function() {
    let deviceWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'
  }
})()
