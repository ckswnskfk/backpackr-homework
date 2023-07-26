import { createRouter, createWebHistory } from 'vue-router'
import CardList from '@/views/CardList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardList
    },
    {
      path: '/textareaForm',
      name: 'textareaForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/TextAreaForm.vue')
    }
  ]
})

export default router
