<template>
  <div class="main-wrapper">
    <div class="siderbar-container">
      <sider-bar></sider-bar>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import SiderBar from './SiderBar'
export default {
  components: {
    SiderBar
  }
}
</script>
<style lang="less">
  .siderbar-container {
    position: fixed;
    overflow: hidden;
    width: 210px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .main-container {
    margin-left: 210px;
  }
</style>