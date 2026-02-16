import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/drama',
      name: 'drama',
      component: () => import('../views/Drama.vue'),
    },
    {
      path: '/comedy',
      name: 'comedy',
      component: () => import('../views/Comedy.vue'),
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../views/Animation.vue'),
    },
    {
      path: '/infopeli/:id',
      name: 'infoPeli',
      component: () => import('../views/InfoPeli.vue'),
      props: true,
    },
  ],
})

export default router
