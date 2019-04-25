import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=> import('../pages/Index.vue')
    },
    {
      path: '/other',
      component: ()=> import('../pages/Other.vue')
    }
  ]
})
