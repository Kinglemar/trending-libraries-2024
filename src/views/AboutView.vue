<script setup lang="ts">
import { ref } from 'vue'

const date = ref()
</script>
<template>
  <main v-auto-animate>
    <VueDatePicker v-model="date"></VueDatePicker>
    <p class="text-lg font-bold my-3">{{ date }}</p>
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
