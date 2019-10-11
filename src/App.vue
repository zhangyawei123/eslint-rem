<template>
  <div id="app">
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <router-link tag="el-menu-item" index="index" to="/" exact>主页</router-link>
        <router-link tag="el-menu-item" index="clock" to="/clock">闹钟</router-link>
        <router-link tag="el-menu-item" index="avatar" to="/avatar">截图\上传</router-link>
        <router-link tag="el-menu-item" index="avatar" to="/three">tree.js</router-link>
        <router-link tag="el-menu-item" index="test" to="/test">test</router-link>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: 'index'
    }
  },
  watch: {
    '$route' (to) {
      this.activeIndex = to.meta.moduleName
    }
  }
}
</script>
<style lang="less">
  .el-menu {
    margin-bottom: 20px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid transparent;
    color: #909399;
  }
  .el-menu--horizontal>.el-menu-item.router-link-exact-active {
    border-bottom: 2px solid #409EFF;
    color: #333;
  }
</style>
