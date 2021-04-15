import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/allusers',
    name: 'AllUsers',
    component: () => import('../views/AllUsers.vue')
  },
  {
    path: '/addusers',
    name: 'AddUsers',
    component: () => import('../views/AddUsers.vue')
  },
  {
    path: '/displayUsers',
    name: 'DisplayUsers',
    component: () => import('../views/DisplayUsers.vue')
  },
  {
    path: '/editUsers',
    name: 'EditUsers',
    component: () => import('../views/EditUsers.vue')
  },
  {
    path: '/deactivatedusers',
    name: 'DeactivatedUsers',
    component: () => import('../views/DeactivatedUsers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
