<template>
  <div class="text-area__item" :class="{ readonly: readOnly }">
    <textarea
      :value="inputMessage"
      @input="handleInputChange"
      placeholder="입력해주세요"
      :maxlength="maxInputLength"
      :disabled="disabled"
      class="text-area__item--textarea"
      :readonly="readOnly"
    ></textarea>
    <em class="text-area__item--em">{{ countOfLeftCharacter }}</em>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

interface Props {
  maxInputLength: number
  defaultMessage?: string
  disabled: boolean
  readOnly: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['input-changed'])

const inputMessage = ref(props.defaultMessage || '')
const countOfLeftCharacter = computed(() => props.maxInputLength - inputMessage.value.length)

const hasValidInput = computed(() => {
  return checkUserWrite()
})

const isDefaultMessageExists = computed(
  () => props.defaultMessage && props.defaultMessage.trim() !== ''
)

const checkUserWrite = (): boolean => {
  return (
    inputMessage.value.length > 0 &&
    (!isDefaultMessageExists.value || props.defaultMessage !== inputMessage.value)
  )
}
const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  inputMessage.value = target.value
}

watchEffect(() => {
  emit('input-changed', hasValidInput.value)
})
</script>
