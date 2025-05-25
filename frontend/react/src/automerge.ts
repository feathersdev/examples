import { createAutomerge, DocHandle } from '@feathersdev/automerge'
import { auth } from './auth.js'

/**
 * The Feathers Automerge client. Use it to retrieve the document
 * for your application with `automerge.find()`.
 */
export const automerge = createAutomerge(auth)

export interface AppData {
  counter: number
}

export type AppDocumentHandle = DocHandle<AppData>

export async function loadAppDocument(): Promise<AppDocumentHandle> {
  return automerge.find<AppData>()
}
