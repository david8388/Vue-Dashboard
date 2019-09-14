import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Sidebar from '@/layout/Sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Sidebar',
      component: Sidebar
    }
  ]
})
