import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ProductInfoSimple } from '@/types'
import axiosInstance from '@/axiosInstance'

export const useProductStore = defineStore('product', () => {
  const products = ref<ProductInfoSimple[]>()
  const getProducts = computed(() => products.value)
  async function searchProducts() {
    try {
      const response = await axiosInstance.get<ProductInfoSimple[]>('/api/products')
      products.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { getProducts, searchProducts }
})
