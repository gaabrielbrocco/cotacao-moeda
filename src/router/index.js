import { createWebHistory, createRouter } from 'vue-router'

import Cambio from "../cambio/view/cambio.vue"

const routes = [
  { path: '/', component: Cambio },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router