import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from 'autoImport'

const routes = [
  {
    path: '/',
    redirect: `/${constantRoutes[0].name}`,
  },
  ...constantRoutes,
  {
    path: '/:path(.*)',
    component: () => import('@/views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export { constantRoutes }
export default router
