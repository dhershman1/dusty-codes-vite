import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'

const routes = [{
  path: '/about',
  name: 'about',
  component: About
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
