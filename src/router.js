import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Portfolio from './views/Portfolio.vue'
import Experience from './views/Experience.vue'

const routes = [{
  path: '/',
  redirect: '/about'
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/skills',
  name: 'skills',
  component: Skills
}, {
  path: '/portfolio',
  name: 'portfolio',
  component: Portfolio
}, {
  path: '/experience',
  name: 'experience',
  component: Experience
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
