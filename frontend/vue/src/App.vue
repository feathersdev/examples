<script setup lang="ts">
import { ref } from 'vue'
import { automerge } from './feathers'

const handle = await automerge.find<{ counter: number }>()
const counter = ref<number>(0)

handle.on('change', ({ doc }) => {
  counter.value = doc.counter
})

async function incrementCounter() {
  handle.change(doc => {
    doc.counter = (doc.counter || 0) + 1
  })
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>feathers.dev Vue demo</h1>
      <p>Our community counter is:</p>
      <h2><strong>{{ counter }}</strong></h2>
      <button @click="incrementCounter">Increment</button>
    </div>
  </header>
</template>
