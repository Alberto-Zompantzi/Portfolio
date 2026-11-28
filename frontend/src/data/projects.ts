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

/** Filas 3a y 3b: fichas respaldadas por fuentes públicas y PROJECT_VERIFICATION.md. */
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
  {
    slug: 'divertikids',
    visibilityRule:
      'Mostrar únicamente el repositorio público de frontend confirmado.',
    repoUrl: 'https://github.com/Alberto-Zompantzi/divertikids-frontend',
    liveUrl: null,
    stackTags: ['frontend_ui', 'backend_api', 'data_storage', 'cloud_devops'],
    roleTags: ['full_stack_development'],
    mediaId: null,
    locales: {
      es: {
        title: 'DivertiKids',
        summary:
          'Aplicación de reservas para un espacio de entretenimiento y eventos infantiles, con catálogo de actividades, paquetes y formulario de reservación.',
        problem:
          'El proyecto reúne la presentación de actividades y paquetes con un flujo para solicitar reservaciones.',
        solution:
          'Una aplicación React presenta el catálogo y calcula paquetes según la selección; el formulario de reservación se integra con el servicio del proyecto.',
        stackDescription:
          'React 19, Vite, JavaScript, CSS, Fetch API, Spring Boot y PostgreSQL.',
        roleDescription:
          'Desarrollo full stack del frontend de reservas y su integración con el servicio del proyecto.',
        architecture:
          'El repositorio documenta una SPA React con catálogo basado en datos, calculadora de paquetes y formulario que consume el servicio mediante Fetch API.',
      },
      en: {
        title: 'DivertiKids',
        summary:
          'A booking application for a children’s entertainment and events venue, with an activity catalog, packages, and a reservation form.',
        problem:
          'The project brings the presentation of activities and packages together with a reservation request flow.',
        solution:
          'A React application presents the catalog and calculates packages from the selected options; the reservation form integrates with the project service.',
        stackDescription:
          'React 19, Vite, JavaScript, CSS, Fetch API, Spring Boot, and PostgreSQL.',
        roleDescription:
          'Full-stack development of the booking frontend and its integration with the project service.',
        architecture:
          'The repository documents a React SPA with a data-driven catalog, package calculator, and form that calls the service through Fetch API.',
      },
    },
  },
  {
    slug: 'casa-zompantzi',
    visibilityRule:
      'Mostrar únicamente el repositorio público confirmado; no hay URL de producción aprobada.',
    repoUrl: 'https://github.com/Alberto-Zompantzi/Casa--Zompantzi',
    liveUrl: null,
    stackTags: ['frontend_ui'],
    roleTags: ['frontend_development', 'ui_ux_seo'],
    mediaId: null,
    locales: {
      es: {
        title: 'Casa Zompantzi',
        summary:
          'Sitio web corporativo con catálogo dinámico de productos y contenido de historia y sucursales.',
        problem:
          'El sitio organiza la presentación de la empresa y su catálogo de productos en una experiencia web navegable.',
        solution:
          'Una aplicación React ofrece páginas de inicio, productos, historia y sucursales, con contenido de catálogo separado y metadatos por página.',
        stackDescription:
          'React, Vite, React Router, JavaScript, CSS y Stripe.js.',
        roleDescription:
          'Desarrollo frontend del sitio corporativo y del catálogo dinámico.',
        architecture:
          'El repositorio describe una aplicación React con rutas para sus secciones, datos de catálogo y componentes de tarjetas de producto.',
      },
      en: {
        title: 'Casa Zompantzi',
        summary:
          'A corporate website with a dynamic product catalog and company history and branch content.',
        problem:
          'The site organizes the company presentation and product catalog into a navigable web experience.',
        solution:
          'A React application provides home, products, history, and branch pages, with separate catalog content and page-level metadata.',
        stackDescription:
          'React, Vite, React Router, JavaScript, CSS, and Stripe.js.',
        roleDescription:
          'Frontend development of the corporate website and dynamic catalog.',
        architecture:
          'The repository describes a React application with routes for its sections, catalog data, and product card components.',
      },
    },
  },
  {
    slug: 'sunnyside-boutique',
    visibilityRule:
      'Mostrar únicamente el repositorio público confirmado; no hay URL de producción aprobada.',
    repoUrl: 'https://github.com/Alberto-Zompantzi/Sunnyside',
    liveUrl: null,
    stackTags: ['frontend_ui'],
    roleTags: ['frontend_development', 'ui_ux_seo'],
    mediaId: null,
    locales: {
      es: {
        title: 'Sunnyside Boutique',
        summary:
          'Catálogo web para una marca de muebles infantiles, con productos presentados en una página estática.',
        problem:
          'El proyecto organiza la presentación de una marca de muebles infantiles y sus productos en un catálogo web.',
        solution:
          'Una página construida con tecnologías web nativas presenta el catálogo y la identidad visual de la marca.',
        stackDescription: 'HTML, CSS y JavaScript.',
        roleDescription:
          'Desarrollo frontend del catálogo y la presentación visual del sitio.',
        architecture:
          'El repositorio describe una página web con HTML semántico, estilos responsive y renderizado dinámico del catálogo con JavaScript.',
      },
      en: {
        title: 'Sunnyside Boutique',
        summary:
          'A web catalog for a children’s furniture brand, presenting products on a static page.',
        problem:
          'The project organizes the presentation of a children’s furniture brand and its products in a web catalog.',
        solution:
          'A page built with native web technologies presents the catalog and the brand’s visual identity.',
        stackDescription: 'HTML, CSS, and JavaScript.',
        roleDescription:
          'Frontend development of the catalog and the site’s visual presentation.',
        architecture:
          'The repository describes a web page with semantic HTML, responsive styling, and JavaScript-driven catalog rendering.',
      },
    },
  },
  {
    slug: 'mediflow',
    visibilityRule:
      'Mostrar el repositorio público confirmado; omitir URL de producción y detalles internos.',
    repoUrl: 'https://github.com/Alberto-Zompantzi/MediFlow',
    liveUrl: null,
    stackTags: ['frontend_ui', 'backend_api', 'ai_rag'],
    roleTags: ['project_leadership_management', 'ai_rag_engineering'],
    mediaId: 'mediflow',
    locales: {
      es: {
        title: 'MediFlow',
        summary:
          'Prototipo que procesa documentos y organiza la información extraída para revisión humana.',
        problem:
          'La información extraída de documentos requiere organizarse para que una persona pueda revisarla.',
        solution:
          'El prototipo separa la interfaz, el procesamiento del servicio y la asistencia de IA; las decisiones que requieren validación permanecen sujetas a revisión humana.',
        stackDescription:
          'Interfaz, procesamiento del servicio y asistencia de inteligencia artificial.',
        roleDescription:
          'Liderazgo del proyecto colaborativo MediFlow en el hackatón final de Oracle Next Education.',
        architecture:
          'La descripción revisada documenta una separación entre interfaz, procesamiento del servicio y asistencia de IA, sin publicar hosts, rutas ni esquemas internos.',
      },
      en: {
        title: 'MediFlow',
        summary:
          'A prototype that processes documents and organizes extracted information for human review.',
        problem:
          'Information extracted from documents needs to be organized so a person can review it.',
        solution:
          'The prototype separates the interface, service processing, and AI assistance; decisions that require validation remain subject to human review.',
        stackDescription:
          'Interface, service processing, and artificial intelligence assistance.',
        roleDescription:
          'Project leadership for the collaborative MediFlow project at the Oracle Next Education final hackathon.',
        architecture:
          'The reviewed description documents a separation between interface, service processing, and AI assistance, without publishing internal hosts, routes, or schemas.',
      },
    },
  },
  {
    slug: 'automatizacion-n8n',
    visibilityRule:
      'No mostrar enlaces externos ni publicar el workflow; usar solo la descripción revisada y la captura sanitizada.',
    repoUrl: null,
    liveUrl: null,
    stackTags: ['automation_integrations'],
    roleTags: ['workflow_automation_integration'],
    mediaId: 'linkedin-automation',
    locales: {
      es: {
        title: 'Automatización editorial con n8n',
        summary:
          'Flujo personal de apoyo editorial que recopila noticias de tecnología y prepara resúmenes y borradores para revisión humana.',
        problem:
          'La preparación de publicaciones editoriales requiere recopilar y organizar material antes de que una persona decida publicar.',
        solution:
          'El flujo apoya la recopilación de noticias de tecnología y la preparación de resúmenes y borradores; la decisión de publicar permanece bajo control humano.',
        stackDescription:
          'Automatización de flujos con n8n. No se detallan integraciones ni configuraciones porque el workflow de origen no está disponible para revisión.',
        roleDescription: 'Diseño de un flujo personal de apoyo editorial.',
        architecture:
          'La ficha se limita a la descripción de alto nivel revisada y a la captura sanitizada. No publica código, enlaces, disparadores ni configuración del workflow.',
      },
      en: {
        title: 'n8n Editorial Automation',
        summary:
          'A personal editorial workflow that gathers technology news and prepares summaries and draft posts for human review.',
        problem:
          'Preparing editorial posts requires gathering and organizing material before a person decides to publish.',
        solution:
          'The workflow supports gathering technology news and preparing summaries and draft posts; the publishing decision remains under human control.',
        stackDescription:
          'Workflow automation with n8n. Integrations and configuration are not detailed because the source workflow is unavailable for review.',
        roleDescription: 'Design of a personal editorial support workflow.',
        architecture:
          'This entry is limited to the reviewed high-level description and sanitized screenshot. It publishes no code, links, triggers, or workflow configuration.',
      },
    },
  },
]
