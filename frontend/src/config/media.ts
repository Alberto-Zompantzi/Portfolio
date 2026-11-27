/** Idiomas disponibles para el contenido localizado del frontend. */
export type Locale = 'es' | 'en'

export type LocalizedRecord<T> = Record<Locale, T>

export interface MediaAsset {
  id: string
  url: string
  alt: LocalizedRecord<string>
  /**
   * Campo requerido por el contrato v1.0. Su estructura y comportamiento
   * visual siguen pendientes; `{}` conserva el ejemplo neutral de Arquitectura §11.
   */
  visualFallback: unknown
}

export interface CvAsset {
  url: string
  ariaLabel: string
}

export interface MediaCatalog {
  assets: MediaAsset[]
  cv: CvAsset
}

/** URLs públicas HTTPS verificadas y documentadas en docs/product/MEDIA_ASSETS.md. */
export const mediaCatalog: MediaCatalog = {
  assets: [
    {
      id: 'mediflow',
      url: 'https://ik.imagekit.io/seefqe4nn/Portfolio/Mediflow.png?tr=f-png&updatedAt=1795494088794',
      alt: {
        es: 'Captura sanitizada de la plataforma MediFlow.',
        en: 'Sanitized screenshot of the MediFlow platform.',
      },
      visualFallback: {},
    },
    {
      id: 'linkedin-automation',
      url: 'https://ik.imagekit.io/seefqe4nn/Portfolio/automatizaci%C3%B3n%20presencial%20LinkedIn.jpg?updatedAt=1795494087541',
      alt: {
        es: 'Captura sanitizada del proyecto de automatización presencial para LinkedIn.',
        en: 'Sanitized screenshot of the in-person LinkedIn automation project.',
      },
      visualFallback: {},
    },
    {
      id: 'logo',
      url: 'https://ik.imagekit.io/seefqe4nn/Portfolio/Logo.webp?tr=f-webp',
      alt: {
        es: 'Logotipo de Alberto Zompantzi.',
        en: 'Alberto Zompantzi logo.',
      },
      visualFallback: {},
    },
    {
      id: 'profile',
      url: 'https://ik.imagekit.io/seefqe4nn/Portfolio/profilephoto.jpeg',
      alt: {
        es: 'Retrato de perfil de Alberto Zompantzi.',
        en: 'Profile portrait of Alberto Zompantzi.',
      },
      visualFallback: {},
    },
  ],
  cv: {
    url: 'https://ik.imagekit.io/seefqe4nn/Portfolio/CV%20Alberto%20Zompantzi%20Full%20Stack.pdf?updatedAt=1795494475254',
    ariaLabel: 'Descargar CV en español (PDF)',
  },
}
