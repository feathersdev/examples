import { authFetch } from './auth.js'
import { getHandle } from './automerge.js'
import './style.css'

getHandle().then((handle) => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="wrapper">
      <h1>Feathers Auth + TypeScript demo</h1>
      <p>Our community counter is</p>
      <h2 id="counter">...</h2>
    </div>
  </div>
`

  handle.on('change', ({ doc }) => {
    document.getElementById('message')!.innerHTML = doc.counter.toString()
  })

  handle.change((doc) => {
    doc.counter = (doc.counter || 0) + 1
  })
})
