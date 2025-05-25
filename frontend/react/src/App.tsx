import { useEffect, useState } from 'react'

import './App.css'
import { auth } from './auth'
import { loadAppDocument, AppDocumentHandle } from './automerge'
import { FeathersAuthUser } from '@feathersdev/auth'
import Counter from './Counter'

function App() {
  const [handle, setHandle] = useState<AppDocumentHandle>()
  const [user, setUser] = useState<FeathersAuthUser | null>(null)

  useEffect(() => {
    // Get the application document
    loadAppDocument().then(async handle => {
      setHandle(handle)
      // Once the app document is available we also know
      // we are logged in and can set the user
      setUser(await auth.getUser())
    })
  }, [])

  return (
    <>
      <h1>feathers.dev React Demo</h1>
      <div className="card">
        <p>Hello {user?.email}!</p>
        {handle && <Counter handle={handle} />}
      </div>
    </>
  )
}

export default App
