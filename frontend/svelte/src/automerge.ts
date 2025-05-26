import { createAutomerge, DocHandle } from '@feathersdev/automerge'
import { auth } from './auth.js'

/**
 * The Feathers Automerge client. Use it to retrieve the document
 * for your application with `automerge.find()`.
 */
export const automerge = createAutomerge(auth)

/**
 * Add types for any data you want to store for your application
 */
export interface AppData {
  counter: number
}

/**
 * The document handle type for the application
 */
export type AppDocumentHandle = DocHandle<AppData>

/**
 * Load the document for the application
 */
export async function loadAppDocument(): Promise<AppDocumentHandle> {
  return automerge.find<AppData>()
}
