import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Generator from '../views/Generator.vue'
import Fichelist from '../views/Fichelist.vue'
import Apropos from '../views/Apropos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generator',
    name: 'Generator',
    component: Generator
  },
  {
    path: '/fichelist',
    name: 'Fichelist',
    component: Fichelist
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
