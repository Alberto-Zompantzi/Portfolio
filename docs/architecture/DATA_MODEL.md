# Modelo de datos estático y reglas de integridad

- **Versión:** v1.0
- **Estado:** Congelado
- **Trazabilidad:** `ARCHITECTURE.md` v1.0, §§4, 5, 7, 10, 11 y 14; `GLOSSARY.md`; `PRD.md`; `openapi.yaml`.
- **Alcance:** contrato estático para los módulos de `frontend/` y descripción de solo lectura de la persistencia existente `Contacto`.

## 1. Principio de almacenamiento

El portafolio no introduce una base de datos nueva ni persistencia en cliente. El contenido canónico vive en módulos TypeScript tipados y versionados en `frontend/`; el build deriva de ellos las rutas estáticas `/` (`Locale` `es`) y `/en` (`Locale` `en`). El estado del formulario y sus valores existen solo en memoria durante la interacción.

Los contactos se persisten únicamente en la tabla existente `contactos` del `backend/`. `ContactoDTO` acepta `nombre`, `email`, `asunto` y `mensaje`; requiere los tres campos salvo `asunto`, que es opcional. El frontend envía por `POST /api/v1/contactos` solo `{ nombre, email, mensaje }`, conforme a ADR-0004 y `ContactoRequest`. `HoneypotField` y `Locale` son solo cliente; no se guardan en navegador ni se envían. ImageKit entrega los medios y CV referenciados por sus URL públicas; no es una base de datos del catálogo.

## 2. Esquemas TypeScript canónicos de `frontend/`

Los siguientes contratos fijan la estructura para Paso 12/13. Las rutas indicadas son las fuentes canónicas definidas por `ARCHITECTURE.md`; no implican que el código ya esté implementado.

### Idioma y paridad localizada

```ts
export type Locale = 'es' | 'en';

/** Requiere las mismas claves estructurales para ambos idiomas. */
export type LocalizedRecord<T> = Record<Locale, T>;
```

### Medios y CV — `frontend/src/config/media.ts`

```ts
export interface MediaAsset {
  id: string;
  url: string;
  alt: LocalizedRecord<string>;
  visualFallback: unknown;
}

export interface CvAsset {
  url: string;
  ariaLabel: string;
}

export interface MediaCatalog {
  assets: MediaAsset[];
  cv: CvAsset;
}
```

`MediaAsset` sigue los campos de `GLOSSARY.md`. `visualFallback` es obligatorio; su tipo y detalle de implementación permanecen **PENDIENTE** según `GLOSSARY.md` y `ARCHITECTURE.md` §4. `CvAsset` es un registro único del PDF en español y su etiqueta; no se selecciona por `Locale`. Solo la ruta `/` consume el registro. `/en` no muestra una opción de CV. La URL publicada en ImageKit se registra en `docs/product/MEDIA_ASSETS.md` y debe ser HTTPS con disponibilidad y texto seleccionable verificados.

### Proyectos — `frontend/src/data/projects.ts`

```ts
export interface LocalizedProjectContent {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stackDescription: string;
  roleDescription: string;
  architecture?: string | null;
  flowOrDiagram?: string | null;
  technicalChallenges?: string | null;
  results?: string | null;
}

export interface Project {
  slug: string;
  visibilityRule: string;
  repoUrl: string | null;
  liveUrl: string | null;
  stackTags: string[];
  roleTags: string[];
  mediaId: string | null;
  locales: LocalizedRecord<LocalizedProjectContent>;
}

export type ProjectCatalog = Project[];
```

Los nombres y tipos reflejan `GLOSSARY.md`. `visibilityRule` describe una regla de presentación derivada de `repoUrl`, `liveUrl` y las confirmaciones D-04a/D-04b; una URL `null` suprime su enlace correspondiente y la regla no puede habilitar una URL ausente. La visibilidad confirmada sigue sujeta a D-04a/D-04b. `stackTags` y `roleTags` usan taxonomías **PENDIENTE** en D-07b. Cuando `repoUrl === null` y `liveUrl === null` (caso Automatización n8n), `architecture` debe contener una cadena no vacía en `es` y `en`.

### Diccionarios bilingües — `frontend/src/data/messages.ts`

```ts
export interface InterfaceMessages {
  'contact.loading': string;
  'contact.success': string;
  'contact.error.validation.nombre': string;
  'contact.error.validation.email': string;
  'contact.error.validation.mensaje': string;
  'contact.error.generic': string;
  'contact.noscript': string;
  'catalog.empty': string;
}

export type MessageCatalog = LocalizedRecord<InterfaceMessages>;
```

Estas son las claves mínimas obligatorias de presentación para ES/EN. El tipo común exige las mismas claves en ambos diccionarios; se podrán añadir otras claves compartidas según las necesidades de interfaz sin alterar estos nombres canónicos.

## 3. Reglas de integridad estática y validaciones en build

Las siguientes invariantes deben poder comprobarse antes del deploy:

1. **Paridad bilingüe:** `es` y `en` tienen el 100 % de las mismas claves y estructuras para todo `LocalizedRecord<T>`, incluidos `Project.locales`, `MediaAsset.alt` y `MessageCatalog`. `CvAsset` es una única referencia al PDF español y no forma parte de `LocalizedRecord<T>`. El tipado común se valida con `tsc --noEmit` (configuración estricta); TypeScript detecta claves faltantes o adicionales en literales tipados.
2. **Automatización n8n:** si `repoUrl` y `liveUrl` son `null`, `locales.es.architecture` y `locales.en.architecture` deben ser no nulas y no vacías. Por ser una condición entre campos, se verifica mediante validación de datos/build además del tipo.
3. **Sin marcadores ni destinos de backend:** ningún campo de texto o URL en los datos compilados contiene la subcadena `PENDIENTE` ni apunta a dominios de `backend/`/Render. Esta regla aplica a los datos publicados; los estados pendientes descritos en este documento son metadatos documentales.
4. **Referencias de medios:** toda `Project.mediaId` no nula debe existir como `id` único en el registro `assets` de `media.ts`.
5. **Peso de SVG de marquesina:** cada SVG local debe pesar `<= 15 KB`, umbral aprobado para D-07c y verificable en build/AcceptanceGate. La fuente de iconos de marca aprobada es Devicon `v2.16.0`; `stackTags` y `roleTags` continúan sujetos a la taxonomía D-07b pendiente.

`tsc --noEmit` cubre las incompatibilidades estructurales de tipos, pero las invariantes dependientes de valores (arquitectura requerida, referencias, contenido prohibido y peso de archivos) necesitan validaciones de datos o artefactos en build/AcceptanceGate según corresponda.

## 4. Persistencia existente en `backend/` (solo lectura)

Esquema observado en `backend/src/main/java/com/alberto/portfolio/persistence/entities/Contacto.java`. Los tipos de columna físicos no anotados no se infieren aquí; `tipo Java` refleja la entidad. Las anotaciones indicadas son únicamente las observadas en el código.

| Columna/atributo | Tipo Java | Restricciones y anotaciones observadas en `Contacto.java` | Origen del dato |
| --- | --- | --- | --- |
| `id` | `Long` | `@Id`; `@GeneratedValue(strategy = GenerationType.IDENTITY)` (autoincremental/identidad). | Generado por persistencia/BD; no pertenece a `ContactoRequest`. |
| `nombre` | `String` | `@Column(nullable = false)`. En `ContactoDTO`: `@NotBlank`. | Enviado por `ContactoRequest.nombre`; el backend lo valida y persiste. |
| `email` | `String` | `@Column(nullable = false)`. En `ContactoDTO`: `@NotBlank` y `@Email`. | Enviado por `ContactoRequest.email`; el backend lo valida y persiste. |
| `asunto` | `String` | Sin anotación de columna ni validación observada en `ContactoDTO`; opcional en el DTO. | El DTO permite recibirlo, pero el frontend lo omite por decisión de ADR-0004; si no se proporciona, queda `null` en la entidad/respuesta. |
| `mensaje` | `String` | `@Column(nullable = false, columnDefinition = "TEXT")`. En `ContactoDTO`: `@NotBlank`. | Enviado por `ContactoRequest.mensaje`; el backend lo valida y persiste. |
| `fechaRegistro` | `LocalDateTime` | Sin anotación de columna observada; `@PrePersist` ejecuta `onCreate()` y asigna `LocalDateTime.now()`. | Asignado por el callback JPA antes de persistir, no enviado por `ContactoRequest`; la respuesta OpenAPI lo serializa como fecha-hora local ISO-8601 sin zona ni offset. |

La entidad está mapeada como `@Entity` a `@Table(name = "contactos")`. `ContactoDTO` es el DTO de entrada, no una tabla: aplica `@NotBlank` a `nombre`, `email` y `mensaje`, además de `@Email` a `email`; no declara longitudes máximas ni restricciones de validación para `asunto`. El request que consume el frontend requiere solo `nombre`, `email` y `mensaje` conforme a ADR-0004, aunque el DTO permite el campo opcional `asunto`. `ContactoCreatedResponse` describe la entidad devuelta e incluye `id`, `nombre`, `email`, `asunto` nullable, `mensaje` y `fechaRegistro`. El controlador responde `201 Created` con la entidad guardada; errores de validación se responden con `400 Bad Request`, tipo de contenido no soportado con `415 Unsupported Media Type` y errores inesperados con `500 Internal Server Error`, usando el manejo predeterminado de Spring Boot sin `@ControllerAdvice` personalizado. Estos estados se verificaron en el código local; no se realizó una llamada a un servidor en ejecución. No se atribuyen aquí restricciones físicas o anotaciones JPA no observadas en `Contacto.java`.
