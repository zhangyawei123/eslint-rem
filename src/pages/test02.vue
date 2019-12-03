<template>
  <div class="container">
    <div class="left">
      <div class="demo">CSS3 perspective 属性
        CSS3 perspective 属性 实例 设置从何处查看一个元素的角度： div { perspective: 500; -webkit-perspective: 500; /* Safari and Chrome */ } 尝试一下 » 浏览器...

        HTML DOM Style perspective 属性
        Style perspective 属性 Style 对象 实例 设置元素被查看位置的视角： document.getElementById("myDIV").style.perspective="50px"; 尝试一下 » 定义和用法 persp...

        CSS3 perspective-origin 属性
        CSS3 perspective-origin 属性 实例 设置一个3D元素的基数位置： div { perspective:150; perspective-origin: 10% 10%; -webkit-perspective:150; /* Safari and ...

        Eclipse 透视图(perspective)
        什么是透视图？ 透视图是一个包含一系列视图和内容编辑器的可视容器。默认的透视图叫 java。 Eclipse 窗口可以打开多个透视图，但在同一时间只能有一个透视图处于激活...

        </div>
      <div class="demo">
        HTML DOM Style perspectiveOrigin 属性
        Style perspectiveOrigin 属性 Style 对象 实例 设置 3D 元素的基点位置： document.getElementById("myDIV").style.perspectiveOrigin="10px 50%"; 尝试一下 » 定...

        CSS3 3D 转换
        [mystyle] #rotate2D,#rotate3D { width: 80px; height: 70px; color: white; position:relative; font-weight:bold; font-size:15px; padding:10px; float:left; mar...

        Kotlin Eclipse 环境搭建
        Kotlin Eclipse 环境搭建 Eclipse 通过 Marketplace 安装 Kotlin 插件，打开 Eclipse，选择 Help -> Eclipse Marketplace… 菜单，搜索 Kotlin 插件： 然后重启 Eclipse...

        CSS 动画
        CSS 动画 定义和用法 一些 CSS 属性是可以有动画效果的，这意味着它们可以用于动画和过渡。 动画属性可以逐渐地从一个值变化到另一个值，比如尺寸大小、数量、百分比和...

        Eclipse 视图(View)
        Eclipse 视图 关于视图 Eclipse视图允许用户以图表形式更直观的查看项目的元数据。 例如，项目导航视图中显示的文件夹和文件图形表示在另外一个编辑窗口中相关的项目...

        CSS 浏览器支持
        CSS3 浏览器支持参考手册 菜鸟教程CSS3的浏览器支持参考会定期与所有主要浏览器进行测试。 CSS3 浏览器支持 对CSS3是没有一个W3C标准的，但全部的主流浏览器都已经支...


      </div>
    </div>
    <div class="inner"></div>
    <div class="right">
      right
    </div>
  </div>
</template>
<script>
 (function() {
    let deviceWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'
    // document.body.style.fontSize = '0.14rem'

    // 屏幕大小变换时
    window.onresize = function() {
      let deviceWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px'
    }
  })()
export default {

}
</script>
<style scoped lang="less">
  .container {
    width: 19.2rem;
    height: 100%;
    background: #a479a2;
    position: relative;
    perspective: 800px;
    color: #fff;
    .left {
      position: absolute;
      width: 5rem;
      background: #00f;
      height: 100%;
      transform-origin: left;
      transform: rotateY(30deg);
      transition: all .5s;
      .demo {
        float: left;
        width: 50%;
        height: 200px;
        background: #000;
        overflow: hidden;
        font-size: 14px;
      }
    }
    .renass {
      transform: none;
    }
    .inner {
      position: absolute;
      width: 6rem;
      left: 50%;
      top: 50%;
      height: 6rem;
      max-height: 100%;
      transform: translate(-50%, -50%);
      background: #0f0;
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 5rem;
      background: #00f;
      height: 100%;
      transform-origin: 100%;
      transform: rotateY(-30deg)
    }
  }
</style>
