import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: ()=> import('../pages/Index.vue'),
          meta: {
            icon: 'sugar',
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/clock',
      component: Layout,
      redirect: 'clock/clock1',
      meta: { title: '闹钟', icon: 'grape'},
      children: [
        {
          path: 'clock1',
          component: ()=> import('../pages/clock/Clock1.vue'),
          meta: {
            title: '闹钟1'
          }
        },
        {
          path: 'clock2',
          component: ()=> import('../pages/clock/Clock2.vue'),
          meta: {
            title: '闹钟2'
          }
        }
      ]
    },
    {
      path: '/avatar',
      component: Layout,
      children: [
        {
          path: '',
          component: ()=> import('../pages/Avatar.vue'),
          meta: {
            icon: 'lollipop',
            title: '上传'
          }
        }
      ]
    },
    {
      path: '/three',
      component: Layout,
      children: [
        {
          path: '',
          component: ()=> import('../pages/threejs/ThreeDemo.vue'),
          meta: {
            icon: 'apple',
            title: 'three.js'
          }
        }
      ]
    },
    {
      path: '/test',
      component: Layout,
      children: [
        {
          path: '',
          component: ()=> import('../pages/test.vue'),
          meta: {
            icon: 'pear',
            title: 'test'
          }
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
    },
    {
      path: '/login',
      component: ()=> import('../pages/Login.vue'),
      hidden: true,
      meta: {
        moduleName: 'login'
      }
    }
  ]
})
