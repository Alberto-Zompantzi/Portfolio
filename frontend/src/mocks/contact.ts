import type {
  ContactApiError,
  ContactCreatedResponse,
  ContactSubmission,
} from '../types/contact'

/** Example values match docs/api/openapi.yaml and ADR-0004. */
export const contactSubmissionMock = {
  nombre: 'Alex Ejemplo',
  email: 'alex@example.test',
  mensaje: 'Hola, me gustaría ponerme en contacto.',
} satisfies ContactSubmission

export const contactCreatedResponseMock = {
  id: 1,
  nombre: 'Alex Ejemplo',
  email: 'alex@example.test',
  asunto: null,
  mensaje: 'Hola, me gustaría ponerme en contacto.',
  fechaRegistro: '2026-11-19T12:30:00',
} satisfies ContactCreatedResponse

export const contactBadRequestMock = {
  timestamp: '2026-01-01T00:00:00Z',
  status: 400,
  error: 'Bad Request',
  path: '/api/v1/contactos',
} satisfies ContactApiError<400>

export const contactUnsupportedMediaTypeMock = {
  timestamp: '2026-01-01T00:00:00Z',
  status: 415,
  error: 'Unsupported Media Type',
  path: '/api/v1/contactos',
} satisfies ContactApiError<415>

export const contactInternalServerErrorMock = {
  timestamp: '2026-01-01T00:00:00Z',
  status: 500,
  error: 'Internal Server Error',
  path: '/api/v1/contactos',
} satisfies ContactApiError<500>
