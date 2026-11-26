# Brief (v1.7 — Congelado)

## Problema

Para reclutadores técnicos y hiring managers que enfrentan dificultades para validar de forma confiable el stack real, la arquitectura y la experiencia de un candidato a partir de portafolios genéricos o incompatibles con lectores automatizados, el Portafolio Web de Alberto Zompantzi es una aplicación web bilingüe (ES/EN) prerenderizada para filtros ATS que presenta su perfil y proyectos verificables (mediante código fuente, despliegues o arquitectura documentada según cada caso) con una interfaz interactiva diferenciada.

## Usuarios y roles

- **Reclutadores / Hiring Managers (Usuario principal):** Evalúan qué hace el candidato, filtran proyectos por stack o rol, revisan vistas detalladas de cada proyecto, descargan el CV en español desde `/` y envían mensajes mediante el formulario de contacto.
- **Sistemas ATS / Parsers automatizados:** Consumen el HTML estático inicial de cada ruta de idioma (`/` y `/en`, sin ejecutar JavaScript) para extraer perfil, experiencia, stack y enlaces.
- **Dueño del producto (Alberto Zompantzi):** Administra el monorepo `portfolio/`, sanitiza insumos, traduce contenidos, resguarda originales fuera de Git y migra activos gráficos a la nube.

## Éxito (Métricas objetivo)

1. **Legibilidad en filtros ATS (HTML inicial):** Porcentaje de extracción correcta de los campos clave (**nombre, rol profesional, resumen de perfil, experiencia/formación, stack tecnológico, títulos/descripciones de proyectos y enlaces**) sobre el HTML inicial con JavaScript deshabilitado — **Meta:** PENDIENTE | **Fecha:** PENDIENTE | **Método:** Inspección del HTML inicial servido con JS deshabilitado frente a la lista de campos clave (`herramienta exacta: PENDIENTE`) | **Responsable:** Alberto Zompantzi.
2. **Conversión de contacto y entrevistas:** Número de mensajes recibidos mediante el formulario de contacto, depurados manualmente de spam (la validación de formato en cliente mejora la calidad del dato sin actuar como filtro de red; la obtención de entrevistas se registra como indicador aspiracional y la analítica de comportamiento queda fuera del MVP) — **Meta:** PENDIENTE | **Fecha:** PENDIENTE | **Método:** Conteo directo en bandeja de entrada / registro personal.
3. **Fluidez visual e interacción:** Interacción estable con fondo reactivo, marquee y vistas sin degradación de rendimiento (`umbral FPS/LCP y perfil de dispositivo de referencia: PENDIENTE`, definido por Alberto Zompantzi previo a diseño) — **Meta:** PENDIENTE | **Fecha:** PENDIENTE | **Método:** PENDIENTE.
4. **Higiene de activos en el repositorio:** Cero referencias locales a `frontend/public/imagenes/` en el código y cero binarios de imagen de cualquier tipo (incluyendo foto de perfil, logo, capturas, mockups u Open Graph) ni archivos de `información faltante/` en el árbol activo ni en el historial del monorepo `portfolio/`, aplicando únicamente las excepciones explícitas de la Política de medios (`umbral de tamaño para SVGs locales: PENDIENTE`, definido por Alberto Zompantzi previo a diseño) — **Meta:** 0 referencias locales y 0 binarios no exentos en `git ls-files` y `git log` | **Fecha:** Previo a merge a `main` | **Método:** Inspección exhaustiva de `git ls-files`, `git log` y búsqueda en código (ambos comandos deben reportar cero coincidencias).

## Alcance MVP y Fuera de alcance

**Dentro del alcance (MVP):**

- **Estructura e higiene del monorepo (`portfolio/`):** El monorepo arranca con historial limpio (el historial legado permanece en los repositorios anteriores) y se organiza en `frontend/`, `backend/` y `docs/`.
  - _Política de Git previa al primer commit:_ La carpeta `información faltante/` se incluye en `.gitignore` desde el inicio, y las imágenes de `frontend/public/imagenes/` se migran a la nube **antes** del primer commit del monorepo para que nunca ingresen al árbol ni a `git log`.
- **Estrategia de renderizado para ATS (SSG / Prerenderizado):** Generación estática (`herramienta: PENDIENTE`) de las rutas `/` y `/en` que sirva en el HTML inicial —con JavaScript deshabilitado— todo el perfil, experiencia, stack tecnológico y el contenido completo (resumen y detalle) de todos los proyectos.
  - _Arquitectura única de detalle y mejora progresiva:_ En el HTML inicial servido (sin JavaScript), el detalle completo de cada proyecto se renderiza como contenido visible en línea (secciones expandidas o bloques `<details open>` con ancla profunda `#<slug-proyecto>`). _Criterio de aceptación:_ ningún mecanismo de ocultamiento (`display: none`, `visibility: hidden`, atributo `hidden`, `aria-hidden="true"`, `opacity: 0`, `max-height: 0` ni posicionamiento fuera de pantalla; si se usa `<details>`, debe llevar `open`) se aplica a los bloques de detalle en el HTML servido. _Verificación:_ inspeccionar el HTML crudo sin JS y confirmar que el texto completo de cada proyecto está presente y visible. Al hidratar en el cliente, la interfaz aplica como mejora progresiva el comportamiento de modal/panel interactivo y el filtrado por stack/rol.
- **Fuentes de contenido y criterio de inclusión:**
  - _Perfil, experiencia y formación:_ Extraídos del CV vigente del autor en español y del código actual en `frontend/`, validados manualmente por Alberto Zompantzi sin añadir hechos no verificados.
  - _Proyectos previos:_ Extraídos del código actual en `frontend/` (DivertiKids, Tzompcomer, Casa Zompantzi, Sunnyside Boutique).
  - _Regla de verificabilidad:_ Todo proyecto incluido en el catálogo debe contar con al menos una vía verificable (repositorio público, URL de producción o arquitectura/flujo documentado). Si un proyecto no cumple con ninguna vía verificable antes de diseño, se excluye del catálogo MVP o se resuelve su visibilidad.
- **Internacionalización (i18n) compatible con ATS:**
  - **Rutas prerenderizadas independientes:** Ruta raíz `/` en **Español (`es`)** por defecto y ruta `/en` en **Inglés (`en`)**, enlazadas mediante etiquetas `<a href>` reales (sin depender de JavaScript ni `localStorage`), con `<html lang>`, etiquetas `hreflang` (incluyendo `hreflang="x-default"` apuntando a `/`), `canonical` y `sitemap.xml` bilingüe.
  - **Contenido traducible y CV en español:** Navegación, hero/perfil, experiencia, filtros, catálogo y detalle de proyectos (estructurados con campos `es` y `en` en `frontend/src/data/projects.ts`), formulario, mensajes de estado/error, metadatos SEO, `alt` de imágenes y `aria-label`. Responsable de traducción: **Alberto Zompantzi** (sin añadir hechos ni cifras). Solo `/` ofrece el botón de descarga del CV en español; `/en` no muestra una opción de CV.
- **Identidad visual y activos gráficos:** Fondo reactivo al cursor, nueva foto de perfil y uso exclusivo del archivo `logo` existente (`ruta/formato actual: PENDIENTE`) para navbar, footer, favicon e imagen Open Graph (ya sea el `logo` directo o una composición OG derivada que lo integre, alojada en la nube).
- **Barra de tecnologías interactiva (Marquee):** Carrusel continuo con iconos de marca a color (`fuente de iconos: PENDIENTE`, con licencia open-source verificada), acompañado obligatoriamente de texto plano indexable por tecnología, pausa en `:hover`, `:focus-within` y toque/clic en dispositivos táctiles, además de respeto a `prefers-reduced-motion`.
- **Catálogo filtrable y plantilla de vista detallada:**
  - Fuente de datos en archivo estático tipado y versionado (`frontend/src/data/projects.ts`), sin CMS ni base de datos.
  - Filtros por **Stack tecnológico** y **Rol desempeñado** (`taxonomía exacta: PENDIENTE`).
  - **Plantilla de detalle por proyecto:** Secciones obligatorias (_Problema, Solución, Stack, Rol_) y opcionales según aplique (_Arquitectura, Flujo/Diagrama, Retos técnicos, Resultados, Enlaces permitidos_).
- **Integración de MediFlow y Automatización n8n:**
  - **MediFlow:** Ficha técnica derivada del documento de arquitectura local con exclusión de hosts, rutas, esquemas, nombres de personas/equipos/organizaciones, identificadores y datos clínicos; captura sanitizada `Mediflow.png` y enlace únicamente a su repositorio público confirmado. La copia revisada y sus límites constan en [`PROJECT_VERIFICATION.md`](PROJECT_VERIFICATION.md).
  - **Automatización n8n (LinkedIn):** Decisión intencional de no publicar código, repositorio ni enlaces externos. Se permite solo una descripción de alto nivel revisada a partir del `.txt`; el `.json` de origen no está disponible en el checkout y no se afirman detalles técnicos que dependan de él. Se omiten credenciales, URLs de webhooks, IDs, prompts internos y cifras no verificadas; _Resultados_ se omiten si no hay evidencia. La copia revisada y sus límites constan en [`PROJECT_VERIFICATION.md`](PROJECT_VERIFICATION.md), junto con la referencia a la captura sanitizada alojada en la nube.
- **Regla general y matriz de enlaces permitidos:**
  - Mostrar exclusivamente enlaces visibles a **Repositorio público** y **URL de Producción** (prohibido mostrar links visibles a servidores/APIs de backend como Render en cualquier proyecto).
  - _Regla de renderizado en UI:_ Si un repositorio no es público o no existe URL de producción confirmada, el enlace correspondiente no se renderiza en la interfaz. La marca `PENDIENTE` es exclusiva de este documento y nunca debe mostrarse en la UI.
  - _Matriz:_ **Tzompcomer** (Repo público [`Alberto-Zompantzi/Tzompcomer`](https://github.com/Alberto-Zompantzi/Tzompcomer) + producción `https://tzompcomer.pages.dev/`, sin Render) | **DivertiKids** (Repo público [`Alberto-Zompantzi/divertikids-frontend`](https://github.com/Alberto-Zompantzi/divertikids-frontend); sin URL de producción confirmada ni enlace a su backend) | **Casa Zompantzi** (Repo público [`Alberto-Zompantzi/Casa--Zompantzi`](https://github.com/Alberto-Zompantzi/Casa--Zompantzi); sin URL de producción confirmada) | **Sunnyside Boutique** (Repo público [`Alberto-Zompantzi/Sunnyside`](https://github.com/Alberto-Zompantzi/Sunnyside); sin URL de producción confirmada) | **MediFlow** (Repo público [`Alberto-Zompantzi/MediFlow`](https://github.com/Alberto-Zompantzi/MediFlow); sin URL de producción confirmada) | **Automatización n8n** (Sin enlaces externos: solo captura sanitizada y descripción). Las confirmaciones de visibilidad y la decisión por proyecto se registran en [`PROJECT_VERIFICATION.md`](PROJECT_VERIFICATION.md).
  - El endpoint del formulario de contacto se consume por variable de entorno en tiempo de ejecución, nunca como enlace visible.
- **Formulario de contacto:** Rediseño visual conectado al `backend/` existente. Se permiten ajustes de configuración en `backend/` (CORS/orígenes permitidos por variable de entorno), prohibiendo modificar su lógica de negocio. `POST /api/v1/contactos` requiere `nombre`, `email` y `mensaje`; `asunto` es opcional en el DTO y el frontend lo omite conforme a ADR-0004. Se aplica validación básica de formato en cliente, campo _honeypot_ resuelto exclusivamente en el cliente (reduce spam de bots de formulario en navegador; el `POST` directo al endpoint público no queda cubierto y se acepta como riesgo del MVP), estados de carga (contemplando _cold start_), éxito y errores localizados en ES/EN, más una nota de privacidad de una línea sobre el uso exclusivo de los datos para responder el contacto.

**Fuera de alcance:**

- Publicación del `.json` o creación de repositorio en GitHub para la automatización de n8n.
- Panel administrador (CMS) o base de datos para gestionar proyectos.
- Modificación de la lógica de negocio del `backend/` del formulario de contacto.
- Analítica web de comportamiento de usuarios (Google Analytics, Hotjar, etc.).
- Sistemas CAPTCHA de terceros, rate-limiting en backend y avisos legales extensos en el formulario (en el MVP solo entra la nota de privacidad de una línea).
- Rediseño del formato interno del documento PDF del CV o de los mockups de proyectos anteriores.

## Supuestos y dependencias

**Supuestos:**

- Los insumos locales en `información faltante/` contienen la información necesaria de MediFlow y n8n (_por verificar_ durante la extracción).
- El `backend/` opera correctamente una vez configurado el CORS para el nuevo dominio (_por verificar_ contrato real de endpoints en `backend/`).

**Dependencias y tareas previas obligatorias (Responsable: Alberto Zompantzi):**

1. **Decisión técnica previa a diseño (D-01, cerrada):** Next.js con exportación estática (`output: 'export'`) en Cloudflare Pages. El dominio y origen canónico de producción confirmados por el propietario son `https://albertozompantzi-portfolio.pages.dev`. Las rutas `/` y `/en` se generan estáticamente; el contenido de proyectos debe permanecer visible en el HTML inicial y las interacciones se mejoran tras hidratar en cliente.
2. **Sanitización visual y respaldo de medios:** Revisar `automatización presencial LinkedIn.jpg` y `Mediflow.png`; si muestran datos clínicos, correos, cuentas privadas o URLs internas, editarlas (difuminar/recortar) antes de subirlas a la nube (los archivos originales sin editar nunca se suben). Conservar respaldo de todos los originales en almacenamiento local/nube privada fuera de Git.
3. **Privacidad y visibilidad de repositorios:** Confirmar visibilidad pública en GitHub de **MediFlow**, **Tzompcomer**, **DivertiKids**, **Casa Zompantzi** y **Sunnyside Boutique**, y validar que los textos extraídos de MediFlow y n8n no expongan datos privados.
4. **Verificación del contrato en `backend/`:** Documentar los campos exactos, validaciones y respuestas HTTP del endpoint de contacto existente en `backend/`.
5. **Migración de medios a la nube previa al primer commit (Proveedor: `PENDIENTE`):** Subir las imágenes sanitizadas nuevas (`Mediflow.png`, captura de n8n, nueva foto de perfil y `logo`/OG) y las capturas de `frontend/public/imagenes/` antes de hacer el primer commit del monorepo.
6. **Verificación y hosting del CV en español:** ImageKit aloja el PDF público del CV español. Verificar que responda HTTP 200 y contenga texto seleccionable para lectura por ATS (sin rediseñar su plantilla). `/en` no ofrece una opción de CV.

## Restricciones

- Idioma predeterminado Español (`es` en `/`); Inglés (`en` en `/en`).
- **Política de medios y binarios en Git:** Toda fotografía, captura, mockup, logotipo e imagen Open Graph (URL absoluta) debe cargarse mediante URLs externas en la nube y nunca commitearse en `portfolio/`. **Únicas excepciones permitidas en el repositorio:** (a) iconos SVG pequeños de tecnologías en el marquee (`umbral de tamaño: PENDIENTE`, definido por Alberto Zompantzi previo a diseño), (b) `/favicon.ico` estándar en `frontend/public/`, y (c) el PDF del CV en español si se opta por alojarlo en `frontend/public/` (`decisión: ImageKit`, según D-06). Criterio de aceptación: cero referencias a `frontend/public/imagenes/` en el código y cero binarios no exentos en `git ls-files` o `git log`.
- Prohibido publicar el `.json` de n8n o enlaces de repositorio/producción para ese proyecto.
- Prohibido mostrar enlaces visibles a servidores/APIs de backend (Render) o textos `PENDIENTE` en la UI.
- Fecha límite de entrega y presupuesto: `PENDIENTE`.

## Top 5 riesgos

1. **Fuga de credenciales o datos sensibles (n8n y MediFlow):** El `.json` local, documentos de arquitectura o capturas pueden contener webhooks, `pinData` o datos clínicos/internos. _Mitigación:_ Bloquear `información faltante/` en `.gitignore` desde el inicio, describir n8n solo a alto nivel y difuminar/recortar tanto `automatización presencial LinkedIn.jpg` como `Mediflow.png` antes de subirlas.
2. **Invisibilidad ante filtros ATS por contenido oculto o renderizado cliente:** Si las rutas de idioma o los detalles de proyectos dependen de JS o se sirven ocultos (`display: none`, `visibility: hidden`, `hidden`, `aria-hidden`, `opacity: 0`, `max-height: 0` o fuera de pantalla) en el HTML inicial, el parser ATS puede ignorarlos. _Mitigación:_ Prerenderizado estático de `/` y `/en` enlazadas con `<a href>`, detalle completo de todos los proyectos visible en línea en el HTML inicial (con mejora progresiva a modal tras hidratar) y texto plano junto a cada icono del marquee.
3. **Enlaces de imágenes rotos o pérdida de originales en migración a la nube:** Cambiar rutas locales a URLs externas puede romper vistas, afectar accesibilidad/ATS o dejar sin respaldo los activos. _Mitigación:_ Respaldar originales fuera de Git, centralizar URLs en `frontend/src/config/media.ts`, exigir `alt` traducible obligatorio, definir `fallback` visual y verificar HTTP 200 previo al release.
4. **Fallos de CORS, desajuste de contrato o _cold start_ en el formulario:** Cambiar de dominio o desconocer el DTO exacto del `backend/` puede romper el envío. _Mitigación:_ Verificar el contrato en `backend/`, habilitar orígenes permitidos por variable de entorno, filtrar bots básicos con _honeypot_ en cliente y mostrar estados claros de carga y error en ES/EN.
5. **Degradación de rendimiento y accesibilidad en animaciones:** El seguimiento de cursor y el marquee continuo pueden afectar dispositivos táctiles o usuarios con sensibilidad al movimiento. _Mitigación:_ Animaciones aceleradas por GPU (`transform`/`opacity`), desactivación del cursor en pantallas táctiles, pausa por toque/teclado y respeto a `prefers-reduced-motion`.

_Riesgos secundarios monitoreados:_ (a) licencia y disponibilidad multicolor de iconos de marca en el marquee, (b) precisión terminológica de traducciones ES/EN (revisión manual del autor), (c) retraso en selección del proveedor de almacenamiento en la nube y herramienta SSG, y (d) envíos automatizados vía `POST` directo al endpoint público del formulario (riesgo aceptado del MVP al no implementar rate-limiting en backend).
