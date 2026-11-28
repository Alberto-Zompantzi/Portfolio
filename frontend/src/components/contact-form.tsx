'use client'

import { type FormEvent, useEffect, useState } from 'react'
import type { ContactSubmission } from '../types/contact'

type Locale = 'es' | 'en'
type Field = keyof ContactSubmission
type FormState = 'idle' | 'submitting' | 'success' | 'error'

const messages = {
  es: {
    title: 'Contacto',
    intro: '¿Tienes una oportunidad o quieres conversar? Escríbeme.',
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    loading: 'Enviando mensaje…',
    success: 'Gracias por escribir. Recibí tu mensaje y responderé pronto.',
    error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
    privacy: 'Usaré tus datos exclusivamente para responder a este contacto.',
    noscript: 'Activa JavaScript para enviar este formulario.',
    required: 'Completa este campo.',
    emailInvalid: 'Escribe un correo electrónico válido.',
  },
  en: {
    title: 'Contact',
    intro: 'Have an opportunity or want to talk? Send me a message.',
    name: 'Name',
    email: 'Email address',
    message: 'Message',
    submit: 'Send message',
    loading: 'Sending your message…',
    success:
      'Thanks for reaching out. I received your message and will reply soon.',
    error: 'Your message could not be sent. Please try again.',
    privacy: 'I will use your information only to respond to this message.',
    noscript: 'Enable JavaScript to send this form.',
    required: 'Please complete this field.',
    emailInvalid: 'Enter a valid email address.',
  },
} as const

const fieldOrder: Field[] = ['nombre', 'email', 'mensaje']
const fieldId: Record<Field, string> = {
  nombre: 'contact-name',
  email: 'contact-email',
  mensaje: 'contact-message',
}

export function ContactForm({ locale }: { locale: Locale }) {
  const text = messages[locale]
  const [hydrated, setHydrated] = useState(false)
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})

  useEffect(() => setHydrated(true), [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('website') ?? '').trim()) return

    const values: ContactSubmission = {
      nombre: String(data.get('nombre') ?? ''),
      email: String(data.get('email') ?? ''),
      mensaje: String(data.get('mensaje') ?? ''),
    }
    const nextErrors: Partial<Record<Field, string>> = {}

    for (const field of fieldOrder) {
      const input = form.elements.namedItem(field) as
        | HTMLInputElement
        | HTMLTextAreaElement
      input.setCustomValidity('')
      if (!values[field].trim()) {
        nextErrors[field] = text.required
        input.setCustomValidity(text.required)
      } else if (field === 'email' && !input.validity.valid) {
        nextErrors.email = text.emailInvalid
        input.setCustomValidity(text.emailInvalid)
      }
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      form.reportValidity()
      return
    }

    void send(values)
  }

  async function send(payload: ContactSubmission) {
    setState('submitting')
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(
      /\/+$/,
      '',
    )
    if (!baseUrl) {
      setState('error')
      return
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/contactos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'error',
        signal: AbortSignal.timeout(35_000),
      })
      setState(response.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  function clearError(field: Field) {
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  return (
    <section className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">{text.title}</h2>
      <p>{text.intro}</p>
      <form
        className="contact-form"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="contact-form__field">
          <label htmlFor={fieldId.nombre}>{text.name}</label>
          <input
            autoComplete="name"
            disabled={state === 'submitting' || state === 'success'}
            id={fieldId.nombre}
            name="nombre"
            onChange={(event) => {
              event.currentTarget.setCustomValidity('')
              clearError('nombre')
            }}
            required
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={
              errors.nombre ? `${fieldId.nombre}-error` : undefined
            }
          />
          {errors.nombre && (
            <p className="contact-form__error" id={`${fieldId.nombre}-error`}>
              {errors.nombre}
            </p>
          )}
        </div>
        <div className="contact-form__field">
          <label htmlFor={fieldId.email}>{text.email}</label>
          <input
            autoComplete="email"
            disabled={state === 'submitting' || state === 'success'}
            id={fieldId.email}
            name="email"
            onChange={(event) => {
              event.currentTarget.setCustomValidity('')
              clearError('email')
            }}
            required
            type="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${fieldId.email}-error` : undefined
            }
          />
          {errors.email && (
            <p className="contact-form__error" id={`${fieldId.email}-error`}>
              {errors.email}
            </p>
          )}
        </div>
        <div className="contact-form__field">
          <label htmlFor={fieldId.mensaje}>{text.message}</label>
          <textarea
            disabled={state === 'submitting' || state === 'success'}
            id={fieldId.mensaje}
            name="mensaje"
            onChange={(event) => {
              event.currentTarget.setCustomValidity('')
              clearError('mensaje')
            }}
            required
            rows={5}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={
              errors.mensaje ? `${fieldId.mensaje}-error` : undefined
            }
          />
          {errors.mensaje && (
            <p className="contact-form__error" id={`${fieldId.mensaje}-error`}>
              {errors.mensaje}
            </p>
          )}
        </div>
        <div className="contact-form__trap" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            autoComplete="off"
            id="contact-website"
            name="website"
            tabIndex={-1}
          />
        </div>
        <button
          disabled={!hydrated || state === 'submitting' || state === 'success'}
          type="submit"
        >
          {state === 'submitting' ? text.loading : text.submit}
        </button>
        <p className="contact-form__privacy">{text.privacy}</p>
        {state === 'submitting' && (
          <p role="status" aria-live="polite">
            {text.loading}
          </p>
        )}
        {state === 'success' && (
          <p className="contact-form__success" role="status" aria-live="polite">
            {text.success}
          </p>
        )}
        {state === 'error' && (
          <p className="contact-form__error" role="alert">
            {text.error}
          </p>
        )}
        <noscript>
          <p>{text.noscript}</p>
        </noscript>
      </form>
    </section>
  )
}
