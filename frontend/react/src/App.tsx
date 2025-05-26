import { useEffect, useState } from 'react'

import './App.css'
import { auth } from './auth'
import { loadAppDocument, AppDocumentHandle } from './automerge'
import { FeathersAuthUser } from '@feathersdev/auth'
import Counter from './Counter'
import feathersLogo from './assets/feathers.svg'

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

  return (<div className="w-96 mx-auto flex flex-col gap-4 text-center pt-10">
    <img src={feathersLogo} alt="Feathers Logo" />
    {handle ? <>
      <h2 className="text-2xl">Hello <strong>{user?.email}</strong>!</h2>
      <Counter handle={handle} />
    </> : <div>Loading...</div>}
  </div>)
}

export default App
