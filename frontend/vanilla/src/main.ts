import { auth } from './auth.js'
import { loadAppDocument } from './automerge.js'
import './style.css'

async function main () {
  const handle = await loadAppDocument()
  const user = await auth.getUser()

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h2 class="text-2xl">Hello <strong>${user?.email}</strong></h2>
    <div class="card bg-base-300 mx-auto rounded-4xl">
      <div class="card-body">
        <h2 class="text-2xl">Community Counter</h2>
        <p class="text-sm">Number of times clicked by everybody</p>
        <strong id="counter" class="text-3xl pt-2 pb-3">0</strong>
        <button id="increment" class="btn btn-primary">
          Increment
        </button>
      </div>
    </div>
`

  handle.on('change', ({ doc }) => {
    document.getElementById('counter')!.textContent = doc.counter.toString()
  })

  // Handle #increment button click
  document.getElementById('increment')!.addEventListener('click', () => {
    handle.change((doc) => {
      doc.counter = (doc.counter || 0) + 1
    })
  })
}

main()
