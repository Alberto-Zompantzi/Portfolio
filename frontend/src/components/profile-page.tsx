import { mediaCatalog } from '../config/media'
import type {
  LocalizedEducationEntry,
  LocalizedExperienceEntry,
  LocalizedProfileContent,
} from '../data/profile'

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
    footer: 'Portafolio profesional de',
  },
  en: {
    navigation: 'Main navigation',
    language: 'Language',
    experience: 'Experience',
    education: 'Education',
    experienceLabel: 'Professional experience',
    educationLabel: 'Education history',
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
      </main>

      <footer>
        <p>
          {text.footer} <span>Alberto Zompantzi</span>
        </p>
      </footer>
    </>
  )
}
