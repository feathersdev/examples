import type { IncomingMessage } from 'node:http'
import { createVerifier } from '@feathersdev/auth'

/**
 * The public application identifier for your Feathers app.
 * You can change the login page theme and other settings at
 * https://app.feathers.dev/app/<your-app-id>
 */
const appId = '<your-app-id>'

/**
 * A verifier for the verifies tokens and authorization headers
 * for an application with the given `appId`.
 */
const verifier = createVerifier({ appId })

/**
 * Authenticates a request using Feathers Auth.
 * Will throw an error if verification failed.
 *
 * @param req The Express or NodeJS request object
 * @returns The authenticated request information like `user` and `token`
 */
export async function authenticateRequest(req: IncomingMessage) {
  const header = req.headers.authorization

  return verifier.verifyHeader(header!)
}
