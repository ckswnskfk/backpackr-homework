<template>
  <CommonTextarea
    :max-input-length="maxInputLength"
    :default-message="defaultMessage"
    :disabled="disabled"
    :read-only="readOnly"
    @input-changed="onTextWritten"
  >
  </CommonTextarea>
  <div class="text-area__btn">
    <button class="text-area__btn--save" :class="{ disabled: isButtonDisabled }">Save</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CommonTextarea from './CommonTextarea.vue'

interface Props {
  maxInputLength: number
  defaultMessage?: string
  disabled: boolean
  readOnly: boolean
}

defineProps<Props>()

const isUserWritten = ref(false)
const isButtonDisabled = computed(() => !isUserWritten.value)
const onTextWritten = (bool: boolean) => (isUserWritten.value = bool)
</script>
