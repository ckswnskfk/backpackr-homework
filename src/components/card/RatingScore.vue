<template>
  {{ showRating(props.score) }}
</template>

<script setup lang="ts">
import { showRating } from '@/composable/ui/rating'
interface Props {
  score: number
}

const props = defineProps<Props>()
</script>
