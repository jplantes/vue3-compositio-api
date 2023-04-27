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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/Counter.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/pokemon-search',
      name: 'pokemon-search',
      component: () => import('../views/SearchPokemonView.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-id',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoVuex.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/CustomSlot.vue')
    }
  ]
})

export default router
