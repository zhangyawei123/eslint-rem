import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=> import('../pages/Index.vue'),
      meta: {
        moduleName: 'index'
      }
    },
    {
      path: '/clock',
      component: ()=> import('../pages/Clock.vue'),
      meta: {
        moduleName: 'clock'
      }
    },
    {
      path: '/avatar',
      component: ()=> import('../pages/Avatar.vue'),
      meta: {
        moduleName: 'avatar'
      }
    }
  ]
})
