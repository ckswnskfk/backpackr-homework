<template>
  <section>
    <h2>Card List</h2>
    <div class="card-list">
      <template v-for="(item, idx) of cards" :key="idx">
        <CardItem :item="item" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardItem from '@/components/card/CardItem.vue'
// import type { CardItemProps } from '@/types'
import { useCardStore } from '../store/card'
import { computed, onMounted } from 'vue'

const cardStore = useCardStore()
const cards = computed(() => cardStore.getCards)
const searchCards = cardStore.searchCards

onMounted(() => {
  searchCards()
  console.log(cards)
})
</script>
