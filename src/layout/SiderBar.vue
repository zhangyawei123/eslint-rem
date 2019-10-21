<template>
  <div class="sider-bar">
    <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <nav-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
  </div>
</template>
<script>
import NavItem from './NavItem'
export default {
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  components: {
    NavItem
  }
}
</script>
<style lang="less">
  .sider-bar {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
</style>