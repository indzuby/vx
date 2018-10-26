import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/home/Login'
import Signup from '@/view/home/Signup'
import Home from '@/view/home/Home'

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    ,
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
