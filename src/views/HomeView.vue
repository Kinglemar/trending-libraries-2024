<script setup lang="ts">
import { computed, ref } from 'vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'
import { useWindowSize, useBattery } from '@vueuse/core'

//////
import { useUserActivity } from '@/stores/activity'
//Global state
const activity = useUserActivity()
const { isOnline, toggleActivity } = activity

//Vue use
const { height, width } = useWindowSize()
const { charging, chargingTime, dischargingTime, level } = useBattery()

type Todo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

const {
  isPending,
  isError,
  data: Todos
} = useQuery({
  queryKey: ['todos'],
  queryFn: () => axios('https://jsonplaceholder.typicode.com/todos')
})
const TodoList = computed(() => {
  return (Todos.value?.data as Array<Todo>) || []
})

const toggle = ref(false)
</script>

<template>
  <main class="mt-10">
    <div v-auto-animate class="flex justify-between items-center">
      <p v-if="isOnline">User is online</p>
      <p>Window Height:{{ height }} Window Width: {{ width }}</p>
      <p v-if="toggle">Peep</p>
      <button @click="toggle = !toggle">Click me!</button>
    </div>
    <p class="my-5 text-2xl text-green-300">Battery level: {{ Math.round(level * 100) }} %</p>
    <section v-auto-animate>
      <p v-if="isPending">Loading...</p>
      <p v-else-if="isError">An error occured. Please try again.</p>
      <ul class="list-decimal" v-else>
        <li v-for="(todo, index) in TodoList" :key="index">{{ todo?.title }}</li>
      </ul>
    </section>
  </main>
</template>
