import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/home/Login'
import Signup from '@/view/home/Signup'
import Home from '@/view/home/Home'
import AboutOSUX from '@/view/osux/About'
import IconsMain from '@/view/icons/Main'
import FontsMain from '@/view/fonts/Main'
import GUIMain from '@/view/gui/Main'
import MotionMain from '@/view/motion/Main'

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [

    {
      path: '*',
      redirect: '/'
    },
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
    ,
    {
      path: '/osux',
      name: 'OSUX',
      component: AboutOSUX
    }
    ,
    {
      path: '/icons',
      name: 'Icons',
      component : IconsMain
    }
    ,
    {
      path: '/fonts',
      name: 'Fonts',
      component : FontsMain
    }
    ,
    {
      path: '/GUI',
      name: 'GUI',
      component : GUIMain
    }
    ,
    {
      path: '/motion',
      name: 'Motion',
      component : MotionMain
    }
  ]
})
