import Vue from 'vue'
import VueRouter from 'vue-router'
import Screen from '../views/screen.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Screen',
    component: Screen
  }
]

const router = new VueRouter({
  routes
})

export default router
