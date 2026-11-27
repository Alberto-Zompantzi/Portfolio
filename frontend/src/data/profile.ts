import type { LocalizedRecord } from '../config/media'

export interface LocalizedProfileContent {
  headline: string
  summary: string
}

export interface LocalizedEducationEntry {
  title: string
  institution: string
  description: string
}

/** Perfil profesional basado en el CV español vigente registrado en D-06. */
export const profile: LocalizedRecord<LocalizedProfileContent> = {
  es: {
    headline: 'Ingeniero de Software Full-Stack',
    summary:
      'Construye sistemas de extremo a extremo con React y TypeScript, APIs REST con Java Spring Boot y Python/FastAPI, PostgreSQL y soluciones de IA como RAG, agentes y automatización. El CV también documenta trabajo con Docker y despliegues en OCI, Render y Cloudflare.',
  },
  en: {
    headline: 'Full-Stack Software Engineer',
    summary:
      'Builds end-to-end systems with React and TypeScript, REST APIs using Java Spring Boot and Python/FastAPI, PostgreSQL, and AI solutions such as RAG, agents, and automation. The CV also documents work with Docker and deployments on OCI, Render, and Cloudflare.',
  },
}

/**
 * El CV disponible no documenta empleos con cargo, organización y fechas.
 * No se inventan entradas de experiencia; sus proyectos verificables viven
 * en el catálogo de proyectos.
 */
export const experience: LocalizedRecord<string[]> = {
  es: [],
  en: [],
}

export const education: LocalizedRecord<LocalizedEducationEntry[]> = {
  es: [
    {
      title: 'Licenciatura en Sistemas Computacionales',
      institution: 'IEDEP',
      description: 'En etapa final, según el CV vigente.',
    },
    {
      title: 'AI for Tech',
      institution: 'Oracle Next Education (ONE) y Alura Latam',
      description:
        'Formación en IA generativa, sistemas multiagente e infraestructura OCI.',
    },
  ],
  en: [
    {
      title: 'Bachelor’s degree in Computer Systems',
      institution: 'IEDEP',
      description: 'In its final stage, according to the current CV.',
    },
    {
      title: 'AI for Tech',
      institution: 'Oracle Next Education (ONE) and Alura Latam',
      description:
        'Training in generative AI, multi-agent systems, and OCI infrastructure.',
    },
  ],
}
