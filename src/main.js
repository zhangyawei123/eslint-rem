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
import './assets/js/rem.js'

Vue.prototype.$http = instance
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Directives)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
