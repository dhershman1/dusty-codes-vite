import { createApp } from 'vue'
import VueFeather from 'vue-feather'
import { MotionPlugin } from '@vueuse/motion'

import router from './router'
import App from './App.vue'

import './assets/css/main.css'
import './assets/css/cards.css'
import './assets/css/grid.css'
import './assets/css/nav.css'

const app = createApp(App)

app.component(VueFeather.name, VueFeather)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')
