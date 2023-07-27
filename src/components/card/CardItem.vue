<template>
  <div class="card" :class="{ horizontal: item.horizontal }">
    <a href="#" class="card__image"
      ><img src="@/assets/images/idus_icon_320.jpg" :alt="item.img.alt"
    /></a>
    <div class="card__info">
      <div class="card__info--label">{{ item.info.label }}</div>
      <div class="card__info--title">{{ item.info.title }}</div>
      <div class="card__info--hilight">
        {{ item.info.hilight }} <span>{{ item.info.cross }}</span>
      </div>
      <!-- <div class="card__info--crossout">Cross Out</div> -->
    </div>
    <div v-if="item.review" class="card__review--container">
      <div class="card__review--rating">
        {{ showRating(item.review.rating) }}
      </div>
      <p v-if="item.review.desc" class="card__review--desc">
        {{ item.review.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CardItemProps } from '@/types'
defineProps({
  item: {
    type: Object as () => CardItemProps,
    required: true
  }
})

const showRating = (score: number) => {
  const filledCircle = '●'
  const emptyCircle = '○'
  let result = ''

  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      result += filledCircle
    } else {
      result += emptyCircle
    }
  }

  return result
}
</script>
