import { mediaCatalog } from '../config/media'
import type {
  LocalizedEducationEntry,
  LocalizedExperienceEntry,
  LocalizedProfileContent,
} from '../data/profile'
import { projects } from '../data/projects'
import { ContactForm } from './contact-form'
import { ProjectPermalinkButton } from './project-permalink-button'

interface ProfilePageProps {
  locale: 'es' | 'en'
  profile: LocalizedProfileContent
  experience: LocalizedExperienceEntry[]
  education: LocalizedEducationEntry[]
}

const copy = {
  es: {
    navigation: 'Navegación principal',
    language: 'Idioma',
    experience: 'Experiencia',
    education: 'Formación',
    experienceLabel: 'Trayectoria profesional',
    educationLabel: 'Trayectoria académica',
    projects: 'Proyectos',
    projectSummary: 'Resumen',
    problem: 'Problema',
    solution: 'Solución',
    stack: 'Stack',
    role: 'Rol',
    architecture: 'Arquitectura',
    repository: 'Repositorio público',
    production: 'Sitio en producción',
    footer: 'Portafolio profesional de',
  },
  en: {
    navigation: 'Main navigation',
    language: 'Language',
    experience: 'Experience',
    education: 'Education',
    experienceLabel: 'Professional experience',
    educationLabel: 'Education history',
    projects: 'Projects',
    projectSummary: 'Overview',
    problem: 'Problem',
    solution: 'Solution',
    stack: 'Stack',
    role: 'Role',
    architecture: 'Architecture',
    repository: 'Public repository',
    production: 'Live website',
    footer: 'Professional portfolio of',
  },
} as const

export function ProfilePage({
  locale,
  profile,
  experience,
  education,
}: ProfilePageProps) {
  const text = copy[locale]
  const portrait = mediaCatalog.assets.find((asset) => asset.id === 'profile')

  return (
    <>
      <header>
        <a href={locale === 'es' ? '/' : '/en'}>Alberto Zompantzi</a>
        <nav aria-label={text.navigation}>
          <a href="#experience">{text.experience}</a>
          <a href="#education">{text.education}</a>
        </nav>
        <nav aria-label={text.language}>
          <a
            href="/"
            lang="es"
            hrefLang="es"
            aria-current={locale === 'es' ? 'page' : undefined}
          >
            Español
          </a>
          <a
            href="/en"
            lang="en"
            hrefLang="en"
            aria-current={locale === 'en' ? 'page' : undefined}
          >
            English
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="profile-title">
          {portrait && (
            // biome-ignore lint/performance/noImgElement: preserve the verified external media URL without inventing image dimensions or layout choices for this provisional structure.
            <img src={portrait.url} alt={portrait.alt[locale]} />
          )}
          <h1 id="profile-title">Alberto Zompantzi</h1>
          <p>{profile.headline}</p>
          <p>{profile.summary}</p>
          {locale === 'es' && (
            <a
              href={mediaCatalog.cv.url}
              aria-label={mediaCatalog.cv.ariaLabel}
            >
              Descargar CV (PDF)
            </a>
          )}
        </section>

        <section id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">{text.experience}</h2>
          <ol aria-label={text.experienceLabel}>
            {experience.map((entry) => (
              <li key={`${entry.title}-${entry.organization ?? ''}`}>
                <article>
                  <h3>{entry.title}</h3>
                  {entry.organization && <p>{entry.organization}</p>}
                  {entry.period && <p>{entry.period}</p>}
                  <p>{entry.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" aria-labelledby="education-title">
          <h2 id="education-title">{text.education}</h2>
          <ol aria-label={text.educationLabel}>
            {education.map((entry) => (
              <li key={`${entry.title}-${entry.institution}`}>
                <article>
                  <h3>{entry.title}</h3>
                  <p>{entry.institution}</p>
                  {entry.period && <p>{entry.period}</p>}
                  <p>{entry.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">{text.projects}</h2>
          {projects.map((project) => {
            const content = project.locales[locale]

            return (
              <article key={project.slug}>
                <h3>{content.title}</h3>
                <p>{content.summary}</p>
                <a href={`#${project.slug}`}>
                  {locale === 'es' ? 'Ver ficha completa' : 'View full details'}
                </a>

                <section
                  id={project.slug}
                  aria-labelledby={`${project.slug}-title`}
                >
                  <h4 id={`${project.slug}-title`}>{content.title}</h4>
                  <dl>
                    <dt>{text.projectSummary}</dt>
                    <dd>{content.summary}</dd>
                    <dt>{text.problem}</dt>
                    <dd>{content.problem}</dd>
                    <dt>{text.solution}</dt>
                    <dd>{content.solution}</dd>
                    <dt>{text.stack}</dt>
                    <dd>{content.stackDescription}</dd>
                    <dt>{text.role}</dt>
                    <dd>{content.roleDescription}</dd>
                    {content.architecture && (
                      <>
                        <dt>{text.architecture}</dt>
                        <dd>{content.architecture}</dd>
                      </>
                    )}
                  </dl>
                  <ul>
                    {project.repoUrl && (
                      <li>
                        <a href={project.repoUrl}>{text.repository}</a>
                      </li>
                    )}
                    {project.liveUrl && (
                      <li>
                        <a href={project.liveUrl}>{text.production}</a>
                      </li>
                    )}
                  </ul>
                  <ProjectPermalinkButton slug={project.slug} locale={locale} />
                </section>
              </article>
            )
          })}
        </section>

        <ContactForm locale={locale} />
      </main>

      <footer>
        <p>
          {text.footer} <span>Alberto Zompantzi</span>
        </p>
      </footer>
    </>
  )
}
