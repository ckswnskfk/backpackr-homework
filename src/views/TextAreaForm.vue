<template>
  <section>
    <h2>Text Area Form</h2>
    <form>
      <fieldset class="text-area">
        <legend class="a11yHidden">Editable Text Area</legend>
        <TextareaWithSave
          :max-input-length="MAX_INPUT_LENGTH"
          default-message="초기 메시지"
          :disabled="false"
          :read-only="false"
        ></TextareaWithSave>
      </fieldset>
      <fieldset class="text-area">
        <legend class="a11yHidden">Disabled Text Area</legend>
        <CommonTextarea :max-input-length="MAX_INPUT_LENGTH" :disabled="true" :read-only="false">
        </CommonTextarea>
      </fieldset>
      <fieldset class="text-area">
        <legend class="a11yHidden">Read-only Text Area</legend>
        <CommonTextarea
          :max-input-length="MAX_INPUT_LENGTH"
          :disabled="false"
          :read-only="true"
          default-message="읽기 전용입니다."
        >
        </CommonTextarea>
      </fieldset>
    </form>
  </section>
</template>

<script setup lang="ts">
import TextareaWithSave from '@/components/textarea/TextareaWithSave.vue'
import CommonTextarea from '@/components/textarea/CommonTextarea.vue'
import { MAX_INPUT_LENGTH } from '@/constants'
</script>
