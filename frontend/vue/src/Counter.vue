<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { AppDocumentHandle } from './automerge.js'

// Define props for the component
const props = defineProps<{
  handle: AppDocumentHandle
}>()

// Initialize counter state
const counter = ref<number>(0)

// Set up listener for document changes
onMounted(() => {
  props.handle.on('change', ({ doc }: { doc: { counter?: number } }) => {
    counter.value = doc.counter || 0
  })
})

// Function to increment the counter
function incrementCounter() {
  props.handle.change((doc: { counter?: number }) => {
    doc.counter = (doc.counter || 0) + 1
  })
}
</script>

<template>
  <div class="card bg-base-300 mx-auto rounded-4xl">
    <div class="card-body">
      <h2 class="text-2xl">Community Counter</h2>
      <p class="text-sm">Number of times clicked by everybody</p>
      <strong class="text-3xl pt-2 pb-3">{{ counter }}</strong>
      <button class="btn btn-primary" @click="incrementCounter">Increment</button>
    </div>
  </div>
</template>