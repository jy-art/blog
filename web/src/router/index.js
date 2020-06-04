import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Details from 'views/home/Details'
import Label from 'views/label/Label'
import Class from 'views/class/Class'
import About from 'views/about/About'
import Search from 'views/search/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Home
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/home/:id',
    component: Details,
  },
  {
    path: '/label',
    component: Label,
  },
  {
    path: '/label/:id',
    component: Home,
  },
  
  {
    path: '/class',
    component: Class,
  },
  {
    path: '/class/:id',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/Search',
    component: Search,
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router