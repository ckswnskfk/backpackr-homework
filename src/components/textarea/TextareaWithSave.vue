<template>
  <CommonTextarea
    :max-input-length="maxInputLength"
    :default-message="defaultMessage"
    :disabled="disabled"
    @input-changed="onTextWritten"
  >
  </CommonTextarea>
  <div class="text-area__btn">
    <button class="text-area__btn--save" :class="{ disabled: isButtonDisabled }">저장</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CommonTextarea from './CommonTextarea.vue'

interface Props {
  maxInputLength: number
  defaultMessage?: string
  disabled: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

const isUserWritten = ref(false)
const isButtonDisabled = computed(() => !isUserWritten.value)
const onTextWritten = (bool: boolean) => (isUserWritten.value = bool)
</script>
