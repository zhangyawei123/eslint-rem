import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../layout/index'

Vue.use(Router)

export const constantRoutes = [
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
    alwaysShow: true,
    children: [
      {
        path: 'clock1',
        component: ()=> import('../pages/clock/Clock1.vue'),
        meta: {
          title: '闹钟1'
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
    path: '/map',
    component: Layout,
    children: [
      {
        path: '',
        component: ()=> import('../pages/map.vue'),
        meta: {
          icon: 'map-location',
          title: 'map'
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
    path: '/test02',
    component: ()=> import('../pages/test02.vue'),
    hidden: true,
    meta: {
      moduleName: 'test02'
    }
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
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('../pages/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
