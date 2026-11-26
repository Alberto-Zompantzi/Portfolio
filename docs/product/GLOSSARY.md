# Glosario del Dominio y Modelo Conceptual

> **Fuentes:** `docs/product/BRIEF.md` (v1.7), `docs/product/ROADMAP.md` (v1.4) y `docs/product/PRD.md` (v1.2).  
> **Convención:** Todos los términos de negocio y descripciones se mantienen estrictamente en español; los identificadores técnicos, campos y enums se expresan en inglés.

---

## 1. Glosario Único

| Término de negocio        | Definición                                                                                                                                             | Nombre técnico (inglés)  | Ejemplo                                                                  |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :----------------------------------------------------------------------- |
| Ruta de idioma            | URL estática prerenderizada para cada idioma soportado del portafolio (`/` y `/en`).                                                                   | `LocaleRoute`            | `/` (Español), `/en` (Inglés)                                            |
| Idioma activo             | Código de idioma de la ruta actual que gobierna textos, `alt`, `aria-label` y metadatos SEO. El enlace al CV español solo existe en `/`.             | `Locale`                 | `'es'` o `'en'`                                                          |
| Proyecto verificable      | Proyecto incluido en el catálogo que cuenta con repositorio público, URL de producción o arquitectura documentada verificable.                         | `VerifiedProject`        | `Tzompcomer`, `MediFlow`, `Automatización n8n`                           |
| Ficha técnica en línea    | Bloque HTML inicial visible sin JavaScript con el detalle completo de un proyecto y ancla profunda `#<slug-proyecto>`, sin mecanismos de ocultamiento. | `InlineProjectDetail`    | Bloque con ancla `#mediflow` visible en el DOM inicial                   |
| Mejora progresiva         | Capa interactiva (modal de detalle y filtros por Stack y Rol) que se activa únicamente tras hidratar JavaScript en el cliente.                         | `ProgressiveEnhancement` | Apertura de modal al seleccionar un proyecto con JavaScript activo       |
| Activo de medios          | Recurso visual alojado en nube externa (`D-03`) y registrado centralmente en `frontend/src/config/media.ts`.                                           | `MediaAsset`             | Captura sanitizada `Mediflow.png` servida por HTTPS desde nube           |
| Política de medios        | Regla que prohíbe binarios no exentos e insumos crudos en Git y exige URLs externas en la nube.                                                        | `MediaPolicy`            | Cero archivos en `frontend/public/imagenes/` dentro de `git ls-files`    |
| Campo trampa              | Campo oculto en el formulario de contacto que descarta envíos automatizados en el navegador sin llamar al `backend/`.                                  | `HoneypotField`          | Input oculto que, si contiene texto, aborta el envío en el cliente       |
| Arranque en frío          | Demora inicial de respuesta del `backend/` existente cuando su instancia estuvo inactiva antes de recibir la petición.                                 | `ColdStart`              | Estado de carga localizado visible mientras responde el servidor         |
| Esqueleto funcional       | Primera rebanada vertical bilingüe funcional de punta a punta con un proyecto real antes del catálogo completo.                                        | `WalkingSkeleton`        | Rutas `/` y `/en` desplegadas con **Tzompcomer** (Paso 2 / Fila 5a)      |
| Marquesina de tecnologías | Barra continua con iconos de marca a color y nombre en texto plano indexable en el HTML inicial, pausable por interacción.                             | `TechMarquee`            | Lista de tecnologías con pausa en `:hover`, `:focus-within` o toque      |
| Fondo reactivo            | Efecto visual sutil de fondo que responde al movimiento del cursor únicamente en escritorio y sin preferencia de movimiento reducido.                  | `ReactiveBackground`     | Animación acelerada por GPU (`transform`/`opacity`) en escritorio        |
| Puerta de aceptación      | Lista de verificación técnica objetiva (Fila 8 / HU-10) que debe aprobarse antes de cada merge a `main`.                                               | `AcceptanceGate`         | Comprobación de HTML sin JS, `git ls-files`, HTTP `200` en medios y CORS |
| Desbloqueo                | Decisión técnica o de contenido (`D-01` a `D-07d`) que habilita la ejecución de un bloque del Roadmap.                                                 | `UnlockItem`             | `D-01` (herramienta SSG y dominio final), `D-05` (contrato del backend)  |

---

## 2. Propuesta de Entidades Conceptuales (Sujeta a `ARCHITECTURE.md` en Paso 8)

> **Nota de alcance:** Ninguna estructura interna de esta sección fija contratos cerrados antes de resolver los desbloqueos `D-01` a `D-07d`; D-01 está cerrado según `ROADMAP.md` y ADR-0002. Los campos marcados como `PENDIENTE` se concretarán en el Paso 8.

### `Project` (propuesta conceptual para `frontend/src/data/projects.ts`)

| Campo            | Tipo                                                         | Obligatorio | Descripción                                                                                                                                                                                                                                                                                       |
| :--------------- | :----------------------------------------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `slug`           | `string`                                                     | Sí          | Identificador único en kebab-case usado en el ancla `#<slug-proyecto>`.                                                                                                                                                                                                                           |
| `visibilityRule` | `string` | Sí | Regla de presentación derivada directamente de la presencia o nulidad de `repoUrl` y `liveUrl`, y de las confirmaciones D-04a/D-04b: si una URL es `null`, su botón/enlace correspondiente se suprime en UI. |
| `repoUrl`        | `string \| null`                                             | No          | URL del repositorio público en GitHub (solo si se confirma público en `D-04a`/`D-04b`; `null` en `Automatización n8n` o repos privados).                                                                                                                                                          |
| `liveUrl`        | `string \| null`                                             | No          | URL de producción confirmada (`null` si es `PENDIENTE` o no aplica; nunca URL de Render/backend).                                                                                                                                                                                                 |
| `stackTags`      | `string[]`                                                   | Sí          | Tecnologías del proyecto según taxonomía `PENDIENTE` en `D-07b`.                                                                                                                                                                                                                                  |
| `roleTags`       | `string[]`                                                   | Sí          | Roles desempeñados por Alberto Zompantzi según taxonomía `PENDIENTE` en `D-07b`.                                                                                                                                                                                                                  |
| `mediaId`        | `string \| null`                                             | No          | Clave de referencia hacia `MediaAsset` en `frontend/src/config/media.ts`.                                                                                                                                                                                                                         |
| `locales`        | `Record<Locale, LocalizedProjectContent>`                    | Sí          | Contenido textual traducido en `es` y `en` y validado manualmente por Alberto Zompantzi.                                                                                                                                                                                                          |

### `LocalizedProjectContent` (propuesta conceptual)

| Campo                 | Tipo             | Obligatorio | Descripción                                                                                               |
| :-------------------- | :--------------- | :---------- | :-------------------------------------------------------------------------------------------------------- |
| `title`               | `string`         | Sí          | Nombre del proyecto.                                                                                      |
| `summary`             | `string`         | Sí          | Resumen corto para la vista de catálogo.                                                                  |
| `problem`             | `string`         | Sí          | Sección obligatoria _Problema_.                                                                           |
| `solution`            | `string`         | Sí          | Sección obligatoria _Solución_.                                                                           |
| `stackDescription`    | `string`         | Sí          | Sección obligatoria _Stack_.                                                                              |
| `roleDescription`     | `string`         | Sí          | Sección obligatoria _Rol_.                                                                                |
| `architecture`        | `string \| null` | No          | Sección opcional _Arquitectura_ (obligatoria si el proyecto no publica repositorio ni URL de producción). |
| `flowOrDiagram`       | `string \| null` | No          | Sección opcional _Flujo / Diagrama_.                                                                      |
| `technicalChallenges` | `string \| null` | No          | Sección opcional _Retos técnicos_.                                                                        |
| `results`             | `string \| null` | No          | Sección opcional _Resultados_ (solo hechos verificables, sin cifras inventadas).                          |

### `MediaAsset` (propuesta conceptual para `frontend/src/config/media.ts`)

| Campo            | Tipo                                     | Obligatorio | Descripción                                                                                                                                     |
| :--------------- | :--------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | `string`                                 | Sí          | Identificador único del activo gráfico.                                                                                                         |
| `url`            | `string`                                 | Sí          | URL externa HTTPS en el proveedor de nube definido en `D-03` (`PENDIENTE`).                                                                     |
| `alt`            | `Record<Locale, string>`                 | Sí          | Texto alternativo descriptivo localizado en `es` y `en` (accesible con y sin JavaScript).                                                       |
| `visualFallback` | `unknown` _(implementación `PENDIENTE`)_ | Sí          | Configuración de respaldo visual en `media.ts` activada únicamente con JavaScript hidratado ante error de carga en red (`HU-01` Escenario 1.2). |

### `ContactSubmission` (frontera Frontend $\rightarrow$ `backend/` existente)

| Campo      | Tipo                                                        | Obligatorio       | Descripción                                                                                                                                     |
| :--------- | :---------------------------------------------------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`  | `{ nombre: string, email: string, mensaje: string }` | Sí | Payload de POST `/api/v1/contactos` conforme a ADR-0004; omite `asunto`, opcional en `ContactoDTO`. |
| `honeypot` | `string`                                                    | Sí (solo cliente) | Campo trampa en navegador; si contiene texto, aborta el envío sin invocar red.                                                                  |
| `locale`   | `Locale`                                                    | Sí (solo cliente) | Idioma activo para seleccionar mensajes de validación, carga, éxito y error.                                                                    |

---

## 3. Enums Cerrados del Dominio

- **`Locale`**:
  - `'es'`: Español (ruta raíz `/`, `x-default`).
  - `'en'`: Inglés (ruta `/en`).
- **`HydrationStatus`**:
  - `'SSR_STATIC'`: HTML inicial prerenderizado entregado al navegador antes de ejecutar JavaScript (estado final cuando JavaScript está deshabilitado).
  - `'HYDRATED'`: Scripts de cliente ejecutados sin errores; filtros, modal y evaluación de fondo interactivo habilitados (estado final del ciclo de hidratación).
  - `'HYDRATION_FAILED'`: Error en ejecución de JavaScript; el DOM inicial `SSR_STATIC` permanece íntegro y visible (estado final del ciclo de hidratación).
- **`ContactFormStatus`**:
  - `'IDLE'`: Formulario renderizado en HTML inicial con nota de privacidad visible, listo para capturar datos.
  - `'VALIDATING'`: Validación de formato de campos y revisión de campo trampa en el cliente.
  - `'DROPPED_HONEYPOT'`: Envío descartado silenciosamente en cliente por detección de bot sin realizar petición HTTP (estado final).
  - `'SUBMITTING'`: Petición HTTP en curso hacia el endpoint del `backend/` consumido por variable de entorno (contempla espera por arranque en frío).
  - `'SUCCESS'`: Envío aceptado por `backend/` (origen CORS permitido y respuesta exitosa) y mensaje de confirmación localizado mostrado (estado final).
  - `'ERROR_VALIDATION'`: Campos obligatorios vacíos o correo con formato inválido detectados en cliente antes de invocar red.
  - `'ERROR_NETWORK'`: Error observado por el cliente (fallo de red, origen CORS rechazado o respuesta HTTP de error del `backend/`).
- **`BackgroundMode`**:
  - `'INTERACTIVE_POINTER'`: Seguimiento reactivo al cursor activo en escritorio (`transform`/`opacity`) dentro de los umbrales de `D-07d` (`PENDIENTE`).
  - `'STATIC_REDUCED_MOTION'`: Desactivado automáticamente por `prefers-reduced-motion: reduce`, sin elemento animado ni _listeners_ de puntero (estado final).
  - `'STATIC_TOUCH'`: Desactivado automáticamente por acceso desde dispositivo táctil, sin elemento animado ni _listeners_ de puntero (estado final).
  - `'STATIC_FALLBACK'`: Desactivado por error al inicializar o ejecutar el script del fondo, sin elemento animado ni _listeners_ de puntero (estado final).

---

## 4. Estados y Transiciones Permitidas

### Recorrido A: Carga y renderizado de página (`/` y `/en` — `HU-02`)

- `[*] -> SSR_STATIC`: Solicitud HTTP devuelve HTML prerenderizado completo.
- _(Si el cliente tiene JavaScript deshabilitado —por ejemplo, un sistema ATS—, `SSR_STATIC` actúa como estado final válido)._
- `SSR_STATIC -> HYDRATED`: El navegador tiene JavaScript activo y la hidratación finaliza sin errores en consola (estado final de hidratación; habilita la evaluación del Recorrido C).
- `SSR_STATIC -> HYDRATION_FAILED`: El navegador tiene JavaScript activo pero ocurre una excepción durante la hidratación; el DOM inicial permanece íntegro y visible (estado final).

### Recorrido B: Envío del formulario de contacto (`HU-05`)

- `[*] -> IDLE`: Formulario renderizado en el HTML inicial con nota de privacidad visible en el idioma activo.
- `IDLE -> VALIDATING`: Usuario o bot dispara el evento de envío del formulario.
- `VALIDATING -> DROPPED_HONEYPOT`: El campo trampa contiene texto; el cliente descarta la solicitud sin realizar petición HTTP ni mostrar error (estado final).
- `VALIDATING -> ERROR_VALIDATION`: Campos obligatorios (`D-05`) vacíos o formato de correo inválido en cliente; detiene el envío y muestra error localizado.
- `ERROR_VALIDATION -> VALIDATING`: Usuario corrige los datos y vuelve a enviar.
- `VALIDATING -> SUBMITTING`: Validación en cliente exitosa y campo trampa vacío; inicia estado de carga localizado y realiza petición al endpoint en variable de entorno.
- `SUBMITTING -> SUCCESS`: Envío aceptado por `backend/` (origen CORS permitido y respuesta exitosa); muestra confirmación localizada en el idioma activo (estado final).
- `SUBMITTING -> ERROR_NETWORK`: Error observado por el cliente (fallo de red, origen CORS rechazado o respuesta HTTP de error); detiene carga y muestra error localizado.
- `ERROR_NETWORK -> VALIDATING`: Usuario reintenta el envío.

### Recorrido C: Selección de modo del fondo reactivo (`HU-08`, tras alcanzar `HYDRATED`)

- `HYDRATED -> STATIC_TOUCH`: Cliente identificado como dispositivo táctil; sin elemento animado ni _listeners_ de puntero (estado final).
- `HYDRATED -> STATIC_REDUCED_MOTION`: Cliente con preferencia `prefers-reduced-motion: reduce`; sin elemento animado ni _listeners_ de puntero (estado final).
- `HYDRATED -> INTERACTIVE_POINTER`: Cliente de escritorio (no táctil) sin preferencia de movimiento reducido y sin errores de script; seguimiento activo con GPU.
- `INTERACTIVE_POINTER -> STATIC_FALLBACK`: Error en tiempo de ejecución al inicializar o actualizar el efecto del fondo; limpia estado a interfaz estática íntegra sin _listeners_ activos (estado final).

---

## 5. Conflictos de Vocabulario Resueltos

1. **Identificadores de historias (`HU-xx` vs `US-xx`):** `ROADMAP.md` y `PRD.md` utilizan el prefijo `HU-01` a `HU-10`; se conserva `HU-xx` como estándar único del proyecto.
2. **Proyectos con producción en `PENDIENTE`:** En el Brief figuran como "producción `PENDIENTE`", mientras que el PRD prohíbe mostrar el texto `PENDIENTE` en la interfaz. Se unifica representando estos casos mediante la omisión total del enlace de producción mientras no exista URL confirmada.
3. **Nomenclatura de `Tzompcomer` vs `TeziuMarket`:** En los documentos base congelados (`BRIEF.md` v1.7, `ROADMAP.md` v1.4, `PRD.md` v1.2) el proyecto figura contractualmente como **Tzompcomer** (`https://tzompcomer.pages.dev/`); se conserva este nombre hasta que Alberto Zompantzi apruebe un cambio formal.
