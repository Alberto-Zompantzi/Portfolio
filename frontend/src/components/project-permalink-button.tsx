'use client'

import { useEffect, useState } from 'react'

interface ProjectPermalinkButtonProps {
  slug: string
  locale: 'es' | 'en'
}

const copy = {
  es: {
    action: 'Copiar enlace a la ficha',
    success: 'Enlace copiado.',
    error: 'No se pudo copiar el enlace. Usa el enlace Ver ficha completa.',
  },
  en: {
    action: 'Copy link to project details',
    success: 'Link copied.',
    error: 'Could not copy the link. Use the View full details link.',
  },
} as const

export function ProjectPermalinkButton({
  slug,
  locale,
}: ProjectPermalinkButtonProps) {
  const [hydrated, setHydrated] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    setHydrated(true)
  }, [])

  async function copyPermalink() {
    try {
      const route = locale === 'es' ? '/' : '/en/'
      await navigator.clipboard.writeText(
        `${window.location.origin}${route}#${slug}`,
      )
      setStatus(copy[locale].success)
    } catch {
      setStatus(copy[locale].error)
    }
  }

  if (!hydrated) return null

  return (
    <div>
      <button type="button" onClick={copyPermalink}>
        {copy[locale].action}
      </button>
      <p aria-live="polite">{status}</p>
    </div>
  )
}
