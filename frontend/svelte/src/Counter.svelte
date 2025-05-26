<script lang="ts">
  import type { AppDocumentHandle } from './automerge.js';

  type CounterProps = {
    handle: AppDocumentHandle;
  };
  let { handle }: CounterProps = $props();

  let counter = $state(0);

  $effect(() => {
    handle.on('change', ({ doc }) => {
      counter = doc.counter || 0;
    });
  });

  function incrementCounter() {
    handle.change((doc) => {
      doc.counter = (doc.counter || 0) + 1;
    });
  }
</script>

<div class="card bg-base-300 mx-auto rounded-4xl">
  <div class="card-body">
    <h2 class="text-2xl">Community Counter</h2>
    <p class="text-sm">Number of times clicked by everybody</p>
    <strong class="text-3xl pt-2 pb-3">{counter}</strong>
    <button class="btn btn-primary" onclick={incrementCounter}>
      Increment
    </button>
  </div>
</div>
