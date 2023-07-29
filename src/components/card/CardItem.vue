<template>
  <div class="card">
    <a href="#"
      ><img src="@/assets/images/idus_icon_320.jpg" :alt="item.img.alt" class="card__image"
    /></a>
    <div class="card__info--container">
      <div class="card__info">
        <div class="card__info--label">{{ item.info.label }}</div>
        <div class="card__info--title">
          <strong>{{ item.info.title }}</strong>
        </div>
        <div class="card__info--hilight">
          {{ item.info.hilight }} <span>{{ item.info.cross }}</span>
        </div>
      </div>
      <div v-if="item.review" class="card__review--container">
        <div class="card__review--rating">
          <RatingScore :score="item.review.rating" />
        </div>
        <p v-if="item.review.desc" class="card__review--desc">
          {{ item.review.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProductInfoSimple } from '@/types'
import RatingScore from './RatingScore.vue'

defineProps({
  item: {
    type: Object as () => ProductInfoSimple,
    required: true
  }
})
</script>
