<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Card List</RouterLink></li>
      <li><RouterLink to="/textareaForm">Input Form</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
