import { createRouter, createWebHistory } from 'vue-router'
import CardList from '@/views/CardList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Card List',
      component: CardList
    },
    {
      path: '/textareaForm',
      name: 'Textarea Form',
      component: () => import('@/views/TextAreaForm.vue')
    }
  ]
})

export default router
