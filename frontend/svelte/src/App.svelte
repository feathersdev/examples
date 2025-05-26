<script lang="ts">
  import type { FeathersAuthUser } from '@feathersdev/auth';
  import { loadAppDocument, type AppDocumentHandle } from './automerge.js';
  import Counter from './Counter.svelte';
  import { auth } from './auth';
  import feathersLogo from './assets/feathers.svg';

  let handle: AppDocumentHandle;
  let user: FeathersAuthUser | null = null;

  async function init() {
    // Get a handle to our app data document
    handle = await loadAppDocument();
    // Once the handle is available we are
    // logged in and can get the current user
    user = await auth.getUser();
  }

  init();
</script>

<main class="w-96 mx-auto flex flex-col gap-4 text-center pt-10">
  <img src={feathersLogo} alt="feathers.dev Logo" />
  {#if handle}
    <h2 class="text-2xl">Hello <strong>{user?.email}</strong></h2>
    <Counter {handle} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>
