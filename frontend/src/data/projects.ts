import type { LocalizedRecord } from '../config/media'

export interface LocalizedProjectContent {
  title: string
  summary: string
  problem: string
  solution: string
  stackDescription: string
  roleDescription: string
  architecture?: string | null
  flowOrDiagram?: string | null
  technicalChallenges?: string | null
  results?: string | null
}

export interface Project {
  slug: string
  visibilityRule: string
  repoUrl: string | null
  liveUrl: string | null
  stackTags: string[]
  roleTags: string[]
  mediaId: string | null
  locales: LocalizedRecord<LocalizedProjectContent>
}

export type ProjectCatalog = Project[]

/** Fila 3a: ficha respaldada por el CV y el README del repositorio público. */
export const projects: ProjectCatalog = [
  {
    slug: 'tzompcomer',
    visibilityRule:
      'Mostrar únicamente el repositorio público y la producción confirmada.',
    repoUrl: 'https://github.com/Alberto-Zompantzi/Tzompcomer',
    liveUrl: 'https://tzompcomer.pages.dev/',
    stackTags: ['frontend_ui', 'backend_api', 'data_storage', 'cloud_devops'],
    roleTags: [
      'backend_development',
      'frontend_development',
      'full_stack_development',
    ],
    mediaId: null,
    locales: {
      es: {
        title: 'Tzompcomer B2B',
        summary:
          'Plataforma de comercio B2B con catálogo de productos, carrito y herramientas de operación e importación desde hojas de cálculo.',
        problem:
          'El proyecto aborda la consulta de un catálogo B2B y la incorporación de productos desde hojas de cálculo.',
        solution:
          'Una interfaz React presenta el catálogo y el carrito; el proyecto también documenta operaciones de catálogo y carga masiva de hojas de cálculo.',
        stackDescription:
          'Java 17, Spring Boot 3.3, Spring Data JPA, PostgreSQL, Apache POI, React 19 y Docker.',
        roleDescription:
          'Contribución de desarrollo en los componentes de backend y frontend del proyecto.',
        architecture:
          'El README describe una SPA React que consume un catálogo REST y una aplicación Java con Spring Boot organizada por capas.',
        flowOrDiagram: null,
        technicalChallenges: null,
        results: null,
      },
      en: {
        title: 'Tzompcomer B2B',
        summary:
          'A B2B commerce platform with a product catalog, shopping cart, and operations tools for spreadsheet imports.',
        problem:
          'The project addresses browsing a B2B catalog and adding products from spreadsheets.',
        solution:
          'A React interface presents the catalog and shopping cart; the project also documents catalog operations and bulk spreadsheet imports.',
        stackDescription:
          'Java 17, Spring Boot 3.3, Spring Data JPA, PostgreSQL, Apache POI, React 19, and Docker.',
        roleDescription:
          'Development contribution across the project’s backend and frontend components.',
        architecture:
          'The README describes a React SPA that consumes a REST catalog and a layered Java application using Spring Boot.',
        flowOrDiagram: null,
        technicalChallenges: null,
        results: null,
      },
    },
  },
]
