<template>
  <div class="sider-bar">
    <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <nav-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NavItem from './NavItem'
export default {
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
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
