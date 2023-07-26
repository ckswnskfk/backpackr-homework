<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/layouts/MainHeader.vue'
import NavigationBar from '@/layouts/GlobalNavigationBar.vue'
</script>

<template>
  <header>
    <MainHeader>
      <template #navigation>
        <NavigationBar />
      </template>
    </MainHeader>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
