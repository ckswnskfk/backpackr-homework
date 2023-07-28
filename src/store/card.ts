import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CardItemProps } from '@/types'

export const useCardStore = defineStore('card', () => {
  const cards = ref<CardItemProps[]>()
  const getCards = computed(() => cards.value)
  async function searchCards() {
    cards.value = [
      {
        id: 0,
        img: {
          path: '',
          alt: '상품 사진1'
        },
        info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' },
        review: {
          rating: 4,
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci ut distinctio
                  iste repellendus nobis temporibus alias ea odio, sunt, ipsa rem numquam. Quo, ullam.
                  Eaque autem deserunt adipisci quis.`
        }
      },
      {
        id: 0,
        img: {
          path: '',
          alt: '상품 사진1'
        },
        info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' },
        review: {
          rating: 3
        }
      },
      {
        id: 0,
        img: {
          path: '',
          alt: '상품 사진1'
        },
        info: { label: '고요한밤', title: '거룩한밤', hilight: '10,000', cross: '100,000' }
      },
      {
        id: 0,
        img: {
          path: '',
          alt: '상품 사진2'
        },
        info: { label: '동해물과', title: '백두산이', hilight: '1,000', cross: '500' },
        review: {
          rating: 5,
          desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci ut distinctio
                  iste repellendus nobis temporibus alias ea odio, sunt, ipsa rem numquam. Quo, ullam.
                  Eaque autem deserunt adipisci quis.`
        }
      }
    ]
  }

  return { getCards, searchCards }
})
