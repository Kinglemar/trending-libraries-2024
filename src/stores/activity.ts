import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserActivity = defineStore('activity', () => {
  const isOnline = ref(true)
  const getCurrentState = computed(() => isOnline.value)
  function toggleActivity() {
    isOnline.value = !isOnline.value
  }

  return { isOnline, getCurrentState, toggleActivity }
})
