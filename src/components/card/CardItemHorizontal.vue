<template>
  <div class="card-horizontal">
    <div class="card-horizontal__image--container">
      <a href="#"
        ><img
          src="@/assets/images/idus_icon_320.jpg"
          :alt="item.img.alt"
          class="card-horizontal__image"
      /></a>
    </div>
    <div class="card-horizontal__info-container">
      <div class="card-horizontal__info">
        <div class="card-horizontal__info--title">
          <strong> {{ item.info.title }}</strong>
        </div>
      </div>
      <p v-if="item.review" class="card-horizontal__review--desc">
        {{ item.review?.desc }}
      </p>
      <div v-if="item.review" class="card-horizontal__review--container">
        <div class="card-horizontal__review--rating">
          <RatingScore :score="item.review.rating" />
        </div>
        <span class="card-horizontal__review--separator" aria-hidden="true">|</span>
        <span class="card-horizontal__review--label">{{ item.info.label }}</span>
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
