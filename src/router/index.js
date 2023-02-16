import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from 'autoImport'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
