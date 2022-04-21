import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页



Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
  {
      path: '/login',
      component: () => import('@/views/login/Login'),
      hidden: true //导航菜单忽略选项
  },
  {
      path: '',
      component: Layout, //应用布局页
      redirect: '/index',
      hidden: true,
  },
  {
      path: '/index',
      component: Layout, //应用布局页
      name: 'index',
      meta:{
          title: "首页", //导航菜单项标题
          icon: 'el-icon-s-home' //导航菜单图标
      },
      children: [
        {
          path: '',
          component: () => import('@/views/index/index.vue'),
          name: 'indexs',
          meta: {
            title: "工作台",
            icon: 'el-icon-s-home',
            roles: ['admin','jerry']
          }
        }
      ]
  }
]

// 动态路由 communication
export const asyncRoutes = [
  {
    path: '/analyze',
    component: Layout,
    redirect: '/goods/index',
    meta: {
      title: "数据分析",
      icon: 'el-icon-s-marketing',
      hidden: false
    },
    children: [
      {
        path: 'analyzeindex',
        component: () => import('@/views/analyze/Index.vue'),
        name: 'analyzeindex',
        meta: {
          title: "主控数据",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'analyzemonitor',
        component: () => import('@/views/analyze/Monitor.vue'),
        name: 'analyzemonitor',
        meta: {
          title: "监控数据",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})

export default router

