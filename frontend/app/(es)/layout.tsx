import type { ReactNode } from 'react'
import '../contact.css'

export default function SpanishRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
