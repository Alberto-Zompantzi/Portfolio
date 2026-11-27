import type { components, operations } from './openapi'

/** Payload del frontend: subset de ContactoRequest acordado en ADR-0004. */
export type ContactSubmission = Pick<
  components['schemas']['ContactoRequest'],
  'nombre' | 'email' | 'mensaje'
>

export type ContactCreatedResponse =
  operations['createContacto']['responses'][201]['content']['application/json']

type ContactApiErrorStatus = 400 | 415 | 500

export type ContactApiError<
  Status extends ContactApiErrorStatus = ContactApiErrorStatus,
> =
  operations['createContacto']['responses'][Status]['content']['application/json'] & {
    status: Status
  }
