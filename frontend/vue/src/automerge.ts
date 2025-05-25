import { createAutomerge } from '@feathersdev/automerge'
import { auth } from './auth.js'

/**
 * The Feathers Automerge client. Use it to retrieve the document
 * for your application with `automerge.find()`.
 */
export const automerge = createAutomerge(auth)

interface AppData {
  counter: number
}

export async function getHandle() {
  return automerge.find<AppData>()
}
