import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Directives from './directives/index'
import instance from './api/http'
import './assets/css/reset.css'
import 'nprogress/nprogress.css'
import 'animate.css'

import './permission'
// import './assets/js/rem.js'
// import '@/libs/rem.js'
import VueAMap from 'vue-amap'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// 注册组件后即可使用
Vue.component('v-chart', ECharts)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'e5ac6d9d224f5b9d905745166a76028c',
  plugin: ['AMap.Autocomplete',  'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.15'
})


Vue.prototype.$http = instance
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Directives)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
