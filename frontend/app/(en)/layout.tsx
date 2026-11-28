import type { ReactNode } from 'react'
import '../contact.css'

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
