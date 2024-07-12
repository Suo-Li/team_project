import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/air',
      name: 'air',
      component: () => import('../views/air.vue')
    },
    {
      path: '/water',
      name: 'water',
      component: () => import('../views/water.vue')
    },
    {
      path: '/waste',
      name: 'waste',
      component: () => import('../views/waste.vue')
    }
  ]
})

export default router
