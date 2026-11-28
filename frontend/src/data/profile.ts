import type { LocalizedRecord } from '../config/media'

export interface LocalizedProfileContent {
  headline: string
  summary: string
}

export interface LocalizedEducationEntry {
  title: string
  institution: string
  period?: string
  description: string
}

export interface LocalizedExperienceEntry {
  period: string
  title: string
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

/** Trayectoria tomada de la línea de tiempo del portfolio publicado. */
export const experience: LocalizedRecord<LocalizedExperienceEntry[]> = {
  es: [
    {
      period: 'T1 2025–presente',
      title: 'Desarrollo de proyectos del portafolio',
      description:
        'La línea de tiempo del portfolio documenta proyectos de software publicados, entre ellos Tzompcomer B2B, con componentes de frontend y backend.',
    },
  ],
  en: [
    {
      period: 'Q1 2025–present',
      title: 'Portfolio project development',
      description:
        'The portfolio timeline documents published software projects, including Tzompcomer B2B, with frontend and backend components.',
    },
  ],
}

export const education: LocalizedRecord<LocalizedEducationEntry[]> = {
  es: [
    {
      title: 'Licenciatura en Sistemas Computacionales',
      institution:
        'Instituto de Educación a Distancia del Estado de Puebla (IEDEP)',
      period: '2025–presente',
      description: 'En etapa final, según el CV vigente.',
    },
    {
      title: 'AI for Tech',
      institution: 'Oracle Next Education (ONE) y Alura Latam',
      description:
        'Formación en IA generativa, sistemas multiagente e infraestructura OCI.',
    },
    {
      title: 'Programa Oracle ONE — Back-End Java',
      institution: 'Oracle Next Education (ONE) y Alura Latam',
      period: 'T1 2024–T4 2024',
      description:
        'La línea de tiempo del portfolio registra este programa de formación en desarrollo backend con Java.',
    },
    {
      title: 'DataCamp Skill Tracks',
      institution: 'DataCamp',
      period: 'T4 2024–T1 2025',
      description:
        'La línea de tiempo del portfolio describe formación en AWS Cloud, Git y GitHub, Docker, scripting Bash y visualización de datos.',
    },
  ],
  en: [
    {
      title: 'Bachelor’s program in Computer Systems',
      institution:
        'Instituto de Educación a Distancia del Estado de Puebla (IEDEP)',
      period: '2025–present',
      description: 'In its final stage, according to the current CV.',
    },
    {
      title: 'AI for Tech',
      institution: 'Oracle Next Education (ONE) and Alura Latam',
      description:
        'Training in generative AI, multi-agent systems, and OCI infrastructure.',
    },
    {
      title: 'Oracle ONE Program — Java Backend',
      institution: 'Oracle Next Education (ONE) and Alura Latam',
      period: 'Q1 2024–Q4 2024',
      description:
        'The portfolio timeline lists this as a backend development program focused on Java.',
    },
    {
      title: 'DataCamp Skill Tracks',
      institution: 'DataCamp',
      period: 'Q4 2024–Q1 2025',
      description:
        'The portfolio timeline describes training in AWS Cloud, Git and GitHub, Docker, Bash scripting, and data visualization.',
    },
  ],
}
