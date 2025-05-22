import { createClient } from '@feathersdev/auth'
import { createAutomerge } from '@feathersdev/automerge'

export const appId = '<your-app-id>'

export const auth = createClient({
  appId,
  onLoginRequired: async (error) => {
    window.location.href = await auth.getLoginUrl(error)
  },
})

export const automerge = createAutomerge(auth)

/**
 * Make an authenticated request using the fetch API or
 * redirect to the login page if the user needs to log in.
 *
 * @param url The URL for the request
 * @param options Additional request options.
 * @returns The fetch response
 */
export async function authFetch(url: string, options?: RequestInit) {
  const headers = new Headers(options?.headers)

  // Set the authorization header with the Feathers Auth token
  headers.set('Authorization', await auth.getHeader())

  return fetch(url, {
    ...options,
    headers,
  })
}
