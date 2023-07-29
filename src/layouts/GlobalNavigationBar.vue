<template>
  <nav>
    <ul>
      <li v-for="(route, idx) of routes" :key="idx">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>
