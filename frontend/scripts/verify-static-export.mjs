import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const routes = [
  {
    file: 'index.html',
    locale: 'es',
    content: 'Ingeniero de Software Full-Stack',
  },
  {
    file: 'en/index.html',
    locale: 'en',
    content: 'Full-Stack Software Engineer',
  },
]

for (const route of routes) {
  const html = await readFile(resolve('out', route.file), 'utf8')

  if (!html.includes(`<html lang="${route.locale}"`)) {
    throw new Error(
      `out/${route.file} is missing its ${route.locale} document language`,
    )
  }

  if (!html.includes(route.content)) {
    throw new Error(
      `out/${route.file} is missing its localized profile content`,
    )
  }
}

console.log(
  'Static export verified: / (es) and /en (en) contain localized HTML.',
)
