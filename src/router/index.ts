import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Loft from '../views/Loft.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loft',
    name: 'Loft',
    component: Loft
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // component: () => import(/* webpackChunkName: "loft" */ '../views/Loft.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
