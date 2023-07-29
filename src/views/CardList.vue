<template>
  <section>
    <h2>Card List</h2>
    <div class="card-list">
      <template v-for="(product, idx) of products" :key="idx">
        <CardItem :item="product" />
      </template>
    </div>
    <template v-if="products">
      <CardItemHorizontal :item="products[0]" />
    </template>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/product'
import { computed, onMounted } from 'vue'
import CardItem from '@/components/card/CardItem.vue'
import CardItemHorizontal from '@/components/card/CardItemHorizontal.vue'

const productStore = useProductStore()
const products = computed(() => productStore.getProducts)
const searchProducts = productStore.searchProducts

onMounted(() => {
  searchProducts()
  console.log(products.value)
})
</script>
