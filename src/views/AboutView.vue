<script setup lang="ts">
import { ref } from 'vue'

const date = ref()
</script>
<template>
  <main>
    <VueDatePicker v-model="date"></VueDatePicker>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
