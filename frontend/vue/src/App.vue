<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { auth } from './auth.js'
import { loadAppDocument, type AppDocumentHandle } from './automerge.js'
import Counter from './Counter.vue'
import type { FeathersAuthUser } from '@feathersdev/auth'
import feathersLogo from './assets/feathers.svg'

// State for the handle and user
const handle = shallowRef<AppDocumentHandle | null>(null)
const user = ref<FeathersAuthUser | null>(null)

// Initialize the application
async function init() {
  // Get the document handle
  handle.value = await loadAppDocument()
  // Get the current user
  user.value = await auth.getUser()
}

// Run initialization
init()
</script>

<template>
  <main class="w-96 mx-auto flex flex-col gap-4 text-center pt-10">
    <img :src="feathersLogo" alt="feathers.dev Logo" />
    <div v-if="handle" class="flex flex-col gap-4">
      <h2 class="text-2xl">Hello <strong>{{ user?.email }}</strong></h2>
      <Counter :handle="handle" />
    </div>
    <p v-else>Loading...</p>
  </main>
</template>
