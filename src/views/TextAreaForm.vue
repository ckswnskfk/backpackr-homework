<template>
  <section>
    <h2>Text Area Form</h2>
    <div class="text-area">
      <TextareaWithSave
        :max-input-length="MAX_INPUT_LENGTH"
        default-message=""
        :disabled="false"
      ></TextareaWithSave>
    </div>
    <div class="text-area">
      <CommonTextarea
        :max-input-length="MAX_INPUT_LENGTH"
        default-message="기본메시지"
        :disabled="true"
      >
      </CommonTextarea>
    </div>
    <div class="text-area">
      <CommonTextarea
        :max-input-length="MAX_INPUT_LENGTH"
        default-message="기본메시지"
        :disabled="false"
      >
      </CommonTextarea>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextareaWithSave from '@/components/textarea/TextareaWithSave.vue'
import CommonTextarea from '@/components/textarea/CommonTextarea.vue'
import { MAX_INPUT_LENGTH } from '@/constants'
</script>
