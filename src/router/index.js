import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: () => import('../view/home.vue')
  },
  {
    path: '/user',
    component: () => import('../view/user.vue')
  },
  {
    path: '*',
    component: () => import('../view/home.vue')
  }
]

export default new Router({
  routes
})
