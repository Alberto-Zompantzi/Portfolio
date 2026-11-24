# PRD — Especificación Funcional y Criterios de Aceptación (v1.2 — Congelado)

> **Documentos fuente:** `docs/product/BRIEF.md` (v1.7 — Congelado) y `docs/product/ROADMAP.md` (v1.4 — Congelado).  
> **Nota de gobernanza:** Ningún umbral técnico, fecha, meta numérica o contrato de `backend/` marcado como `PENDIENTE` en los documentos fuente se asume aquí; toda decisión abierta permanece explícitamente etiquetada como `PENDIENTE` hasta cerrarse en el Paso 0.

---

## 1. Trazabilidad con Brief y Roadmap

| Historia  | Título                                                                           | Prioridad (`ROADMAP.md`) | Filas / Desbloqueos relacionados   |
| :-------- | :------------------------------------------------------------------------------- | :----------------------- | :--------------------------------- |
| **HU-01** | Higiene de Git y carga centralizada de medios externos                           | Must                     | Fila 1, D-02, D-03, D-06, D-07c    |
| **HU-02** | Rutas prerenderizadas bilingües (`/` y `/en`) legibles sin JS e hidratación base | Must                     | Fila 2, Fila 5a, D-01              |
| **HU-03** | Perfil, trayectoria y descarga de CV verificable por idioma                      | Must                     | Filas 3a, 4, 7, D-04a, D-06        |
| **HU-04** | Catálogo de proyectos y detalle visible en línea sin JS                          | Must                     | Filas 3a, 3b, 5a, 5b, D-04a, D-04b |
| **HU-05** | Formulario de contacto conectado al `backend/` existente                         | Must                     | Fila 6, D-05                       |
| **HU-06** | Mejora progresiva: modal interactivo y filtros por Stack y Rol                   | Should                   | Fila 10, Filas 5a, 5b, D-07b       |
| **HU-07** | Marquee continuo de tecnologías a color con texto plano                          | Should                   | Fila 12, D-07a, D-07c              |
| **HU-08** | Fondo interactivo reactivo al cursor                                             | Should                   | Fila 13, D-07a, D-07d              |
| **HU-09** | Identidad visual definitiva y metadatos SEO bilingües                            | Should                   | Filas 9, 11, D-01, D-07a           |
| **HU-10** | Puerta de aceptación técnica previa a cada merge a `main`                        | Must                     | Fila 8, D-06, D-07c                |

**Notas de cobertura del Roadmap y Métricas del Brief:**

- **Fila 14 (`Could` — Pulido de calidad visual y accesibilidad):** Diferida al cierre de las Filas 1 a 7 y 9 a 13; no define criterios de aceptación bloqueantes en este PRD (`Fila 14: umbral de contraste: PENDIENTE; opcional en D-07a`), pero su integración exige re-ejecutar **HU-10 (Fila 8)** antes de fusionar a `main`.
- **Filas 15 a 21 (`Won't` / Fuera de alcance):** Excluidas explícitamente en la Sección 3 de este documento.
- **Métricas objetivo 1 a 4 (`BRIEF.md`):** Sus metas numéricas y fechas permanecen en `PENDIENTE` según el Brief. La Métrica 1 (extracción HTML sin JS) y la Métrica 4 (higiene de Git y medios) quedan cubiertas en **HU-01**, **HU-02** y **HU-10**; la Métrica 2 (conteo manual de mensajes válidos) es operativa y queda fuera de los escenarios Gherkin; la Métrica 3 (interacción estable con fondo, marquee y vistas) se verifica en **HU-08** y componentes asociados una vez cerrado `D-07d`.

---

## 2. Historias de Usuario y Criterios de Aceptación (Gherkin)

### HU-01: Higiene de Git y carga centralizada de medios externos

**Como** dueño del producto (Alberto Zompantzi),  
**quiero** inicializar el monorepo con historial limpio, centralizar las URLs externas en `frontend/src/config/media.ts` y mantener Git libre de binarios no exentos e insumos crudos,  
**para** evitar fugas de datos privados y asegurar la carga fiable de medios desde la nube.

- **Escenario 1.1 (Camino feliz — Carga desde nube con `alt` traducido):**
  - **Dado** que los activos gráficos sanitizados están alojados en el proveedor externo definido en `D-03` y registrados en `frontend/src/config/media.ts`,
  - **Cuando** se renderiza una vista en `/` (Español) o en `/en` (Inglés),
  - **Entonces** cada fotografía, captura, mockup, logotipo e imagen Open Graph carga desde su URL externa en la nube,
  - **Y** su atributo `alt` corresponde al idioma activo de la ruta.
- **Escenario 1.2 (Caso de error — Fallo de carga de imagen externa en tiempo de ejecución):**
  - **Dado** que una URL externa definida en `frontend/src/config/media.ts` falla al cargarse en el navegador del usuario,
  - **Cuando** se dispara el error de carga de la imagen,
  - **Entonces** con JavaScript hidratado se activa el `fallback` visual configurado en `media.ts` sin romper la estructura de la tarjeta o vista,
  - **Y** tanto con JavaScript activo como deshabilitado el atributo `alt` descriptivo permanece accesible en el HTML sin mostrar rutas locales ni textos `PENDIENTE`.
- **Escenario 1.3 (Caso límite — Higiene de historial Git y excepciones permitidas):**
  - **Dado** que se inspecciona el repositorio antes del primer commit o antes de un merge a `main`,
  - **Cuando** se ejecutan `git ls-files`, `git log` y búsqueda sobre el código fuente de `frontend/`,
  - **Entonces** existen cero coincidencias de `frontend/public/imagenes/` en el código y cero archivos de `información faltante/` o binarios no exentos en el árbol o historial,
  - **Y** únicamente se admiten los archivos locales permitidos por las excepciones explícitas de la Política de medios (`SVGs` del marquee bajo el umbral `PENDIENTE` de `D-07c`, `/favicon.ico` estándar en `frontend/public/` y los dos PDFs del CV en ES/EN si `D-06` define alojarlos en `frontend/public/`).
- **Escenario 1.4 (Camino feliz — Inicialización limpia del monorepo y migración previa al primer commit):**
  - **Dado** que se cierran `D-02` (sanitización de `Mediflow.png` y `automatización presencial LinkedIn.jpg` con respaldo de originales fuera de Git; originales sin editar nunca subidos) y `D-03` (proveedor de nube e inventario),
  - **Cuando** se inicializa `portfolio/` con estructura `frontend/`, `backend/` y `docs/`,
  - **Entonces** `información faltante/` queda bloqueada en `.gitignore` desde el inicio, `git log` de `portfolio/` no contiene commits heredados de los repositorios anteriores, todas las imágenes previas de `frontend/public/imagenes/` y las nuevas sanitizadas se suben a la nube **antes** del primer commit, y ninguna ruta local de imagen permanece en el código (todas se resuelven vía `media.ts`),
  - **Y** si `D-06` o `D-07c` permanecen abiertos al momento del primer commit, no se incorpora ningún archivo PDF ni SVG en dicho commit.

---

### HU-02: Rutas prerenderizadas bilingües (`/` y `/en`) legibles sin JS e hidratación base

**Como** sistema ATS o reclutador técnico,  
**quiero** acceder directamente a `/` en Español y a `/en` en Inglés con todo el contenido clave en el HTML inicial y una hidratación funcional en cliente,  
**para** evaluar el perfil y los proyectos sin depender de JavaScript ni perder interactividad cuando está disponible.

- **Escenario 2.1 (Camino feliz — Renderizado estático por ruta de idioma con JS deshabilitado):**
  - **Dado** que el sitio fue compilado con la herramienta SSG definida en `D-01`,
  - **Cuando** se solicita `/` o `/en` (con o sin barra final según `D-01`) con JavaScript deshabilitado en el cliente,
  - **Entonces** `/` responde con `<html lang="es">` y contenido íntegro en Español,
  - **Y** `/en` responde con `<html lang="en">` y contenido íntegro en Inglés,
  - **Y** ambos HTML iniciales exponen los campos clave de la Métrica 1 (**nombre, rol profesional, resumen de perfil, experiencia/formación, stack tecnológico, títulos/descripciones de proyectos y enlaces**).
- **Escenario 2.2 (Caso límite — Cambio bidireccional de idioma sin JavaScript ni `localStorage`):**
  - **Dado** que el usuario navega con JavaScript deshabilitado y sin datos en `localStorage`,
  - **Cuando** selecciona el enlace de cambio de idioma en `/` o en `/en`,
  - **Entonces** en `/` existe un enlace HTML real `<a href="/en">` que navega directamente a `/en`,
  - **Y** en `/en` existe un enlace HTML real `<a href="/">` que navega directamente a `/`, sin depender de scripts ni almacenamiento local.
- **Escenario 2.3 (Caso de error — Fallo de hidratación con JavaScript activo):**
  - **Dado** que ocurre un error en tiempo de ejecución durante la hidratación de los scripts con JavaScript activo en el cliente,
  - **Cuando** se carga `/` o `/en`,
  - **Entonces** el DOM inicial prerenderizado permanece íntegro y visible con todo el perfil, experiencia, stack y detalle completo de proyectos.
- **Escenario 2.4 (Camino feliz — Hidratación base limpia con JavaScript activo en el _Walking Skeleton_):**
  - **Dado** que se despliega el esqueleto bilingüe con **Tzompcomer** (Fila 5a / Paso 2) y el usuario tiene JavaScript habilitado,
  - **Cuando** la página completa la hidratación en el cliente,
  - **Entonces** tras hidratar, el DOM conserva todo el texto del HTML inicial y la hidratación no produce errores de ejecución en consola.

> _Nota de trazabilidad (Paso 2 / Fila 5a):_ La definición concreta de la interacción mínima hidratada sobre **Tzompcomer** en el _Walking Skeleton_ queda a criterio de Alberto Zompantzi (laguna no especificada en los documentos fuente).

---

### HU-03: Perfil, trayectoria y descarga de CV verificable por idioma

**Como** reclutador técnico o hiring manager,  
**quiero** leer el resumen profesional, experiencia y formación en el idioma de la ruta y descargar el CV correspondiente,  
**para** validar la trayectoria del candidato e incorporarla a mi proceso de selección.

- **Escenario 3.1 (Camino feliz — Contenido de perfil y descarga de CV por idioma):**
  - **Dado** que el perfil y la trayectoria se extrajeron del CV vigente ES/EN y fueron validados manualmente por Alberto Zompantzi sin añadir hechos no verificados,
  - **Cuando** el usuario visita `/` y pulsa el enlace de descarga de CV,
  - **Entonces** descarga o abre el PDF de CV en la ubicación pública definida por `D-06`,
  - **Y** cuando visita `/en` y pulsa el mismo control, descarga o abre el PDF de CV asignado a Inglés; las rutas ES y EN pueden reutilizar el mismo archivo cuando Alberto lo confirma.
- **Escenario 3.2 (Caso límite — Layout base provisional con estructura semántica y accesibilidad):**
  - **Dado** que se construye el layout provisional (Fila 4) antes de aplicar `DESIGN.md` (`D-07a`),
  - **Cuando** se renderizan `/` y `/en`,
  - **Entonces** están presentes los elementos semánticos de estructura (`navbar`, `footer`, `hero` y trayectoria de experiencia/formación),
  - **Y** todos los atributos `alt` y `aria-label` están traducidos al idioma de la ruta, sin contenedores de imagen rotos ni textos `PENDIENTE`.
- **Escenario 3.3 (Caso de error — Enlace estático y verificación de texto seleccionable en CV):**
  - **Dado** que `D-06` define URLs públicas ImageKit para el CV de cada idioma, que pueden apuntar al mismo PDF por confirmación del propietario,
  - **Cuando** se inspecciona el HTML inicial y los archivos PDF antes de aprobar la puerta de aceptación (Fila 8),
  - **Entonces** el control de descarga existe como enlace HTML estándar `<a href>` en el DOM inicial (sin depender de JavaScript),
  - **Y** si alguno de los dos PDFs carece de texto seleccionable legible por filtros ATS, falla la verificación de `D-06` / Fila 8 y bloquea el merge a `main`.

---

### HU-04: Catálogo de proyectos y detalle visible en línea sin JS

**Como** reclutador técnico o sistema ATS,  
**quiero** consultar el catálogo de proyectos verificables y su ficha técnica completa en el HTML inicial,  
**para** comprobar arquitectura, rol, stack y enlaces públicos sin requerir JavaScript.

- **Escenario 4.1 (Camino feliz — Ficha técnica completa visible en línea sin JS):**
  - **Dado** que `frontend/src/data/projects.ts` contiene los proyectos verificables en `es` y `en` (sujetos a `D-04a` y `D-04b`),
  - **Cuando** se carga `/` o `/en` con JavaScript deshabilitado,
  - **Entonces** cada proyecto muestra su resumen y su vista detallada completa en línea con ancla profunda `#<slug-proyecto>`,
  - **Y** cada detalle incluye las secciones obligatorias (_Problema, Solución, Stack, Rol_) y las opcionales aplicables (_Arquitectura, Flujo/Diagrama, Retos técnicos, Resultados, Enlaces permitidos_),
  - **Y** ningún bloque de detalle utiliza mecanismos de ocultamiento (`display: none`, `visibility: hidden`, atributo `hidden`, `aria-hidden="true"`, `opacity: 0`, `max-height: 0` ni desplazamiento fuera de pantalla; si usa `<details>`, incluye el atributo `open`).
- **Escenario 4.2a (Camino feliz — Matriz de enlaces y privacidad para Tzompcomer y MediFlow):**
  - **Dado** que **Tzompcomer** y **MediFlow** tienen sus repositorios confirmados como públicos en `D-04a` y `D-04b`,
  - **Cuando** se renderizan en `/` y `/en`,
  - **Entonces** **Tzompcomer** muestra únicamente el enlace a su repositorio público y su URL de producción `https://tzompcomer.pages.dev/` (sin enlaces a Render),
  - **Y** **MediFlow** muestra únicamente el enlace a su repositorio público (`https://github.com/Alberto-Zompantzi/MediFlow`), su captura sanitizada `Mediflow.png` desde la nube y su ficha técnica sin hosts internos, esquemas privados, nombres de clientes/instituciones ni datos clínicos.
- **Escenario 4.2b (Caso límite — Renderizado condicional de enlaces para DivertiKids, Casa Zompantzi y Sunnyside Boutique):**
  - **Dado** que **DivertiKids**, **Casa Zompantzi** y **Sunnyside Boutique** tienen producción marcada como `PENDIENTE` en el Brief y su visibilidad de repositorio se confirma en `D-04b`,
  - **Cuando** se renderizan sus fichas en `/` y `/en`,
  - **Entonces** cada proyecto renderiza el enlace a su repositorio únicamente si fue confirmado como público en `D-04b`,
  - **Y** omite por completo el botón/enlace de URL de producción mientras no exista una URL confirmada (sin mostrar `PENDIENTE` ni enlaces a servidores de backend como Render).
- **Escenario 4.2c (Caso límite — Privacidad estricta para Automatización n8n):**
  - **Dado** que **Automatización n8n** no publica código ni repositorio por decisión intencional del Brief,
  - **Cuando** se renderiza su ficha en `/` y `/en`,
  - **Entonces** no renderiza ningún enlace a repositorio ni URL externa,
  - **Y** presenta únicamente su descripción de alto nivel (sin credenciales, URLs de webhooks, IDs, prompts internos ni cifras inventadas) junto con su captura sanitizada `automatización presencial LinkedIn.jpg` alojada en la nube.
- **Escenario 4.3 (Caso límite — Paridad estructural bilingüe `es`/`en` en `projects.ts`):**
  - **Dado** que `frontend/src/data/projects.ts` estructura cada proyecto con campos `es` y `en`,
  - **Cuando** se valida la estructura de datos de `projects.ts` y las rutas `/` y `/en`,
  - **Entonces** todos los proyectos tienen completos ambos objetos de idioma (`es` y `en`), y ningún campo de texto en `en` está vacío ni es idéntico a su campo correspondiente en `es` (salvo nombres propios de proyectos, tecnologías o personas).
- **Escenario 4.4 (Caso de error / exclusión — Proyecto sin ninguna vía verificable):**
  - **Dado** que durante `D-04b` se detecta que un proyecto tiene repositorio privado y carece de URL de producción confirmada,
  - **Cuando** se evalúa su inclusión en el catálogo antes de diseño,
  - **Entonces** si el proyecto cuenta con arquitectura o flujo documentado verificable permanece en el catálogo omitiendo los enlaces de repositorio y producción,
  - **Y** si no cumple ninguna de las tres vías verificables (repositorio público, producción o arquitectura documentada), se excluye del catálogo MVP o se resuelve su visibilidad antes de diseño.

> _Nota operativa (HU-04):_ La validación de que los textos en `projects.ts` respetan estrictamente los hechos verificables sin añadir cifras ni afirmaciones corresponde a revisión manual de Alberto Zompantzi (fuera de verificación automatizable).

---

### HU-05: Formulario de contacto conectado al `backend/` existente

**Como** reclutador o hiring manager,  
**quiero** enviar un mensaje directamente desde el portafolio en mi idioma,  
**para** contactar al candidato sin depender de clientes de correo externos.

- **Escenario 5.1 (Camino feliz — Envío válido al `backend/`):**
  - **Dado** que el usuario completa los campos requeridos documentados en `D-05` (`nombre`, `email`, `mensaje`) con formato válido y deja vacío el campo _honeypot_ (`asunto` es opcional en el DTO, pero el frontend lo omite conforme a ADR-0004),
  - **Cuando** envía el formulario en `/` o `/en`,
  - **Entonces** la interfaz muestra un estado de carga localizado (contemplando espera por _cold start_),
  - **Y** realiza la petición al endpoint consumido exclusivamente desde variable de entorno (nunca expuesto como enlace visible en la UI),
  - **Y** al recibir `201 Created` del `backend/` muestra un mensaje de confirmación localizado en el idioma activo (`ES` o `EN`); el servidor devuelve la entidad creada.
- **Escenario 5.2a (Caso de error — Validación de formato en cliente):**
  - **Dado** que el usuario intenta enviar campos obligatorios documentados en `D-05` vacíos, compuestos solo por espacios o con un correo electrónico de formato inválido,
  - **Cuando** pulsa el botón de envío,
  - **Entonces** la validación en cliente detiene el envío antes de invocar al `backend/` y muestra mensajes de error localizados en el idioma activo (`ES` o `EN`).
- **Escenario 5.2b (Caso de error — Fallo de servidor o petición de red al `backend/`):**
  - **Dado** que el formulario supera la validación en cliente y envía la petición al endpoint configurado,
  - **Cuando** el `backend/` responde con error HTTP o falla la petición de red,
  - **Entonces** la interfaz detiene el estado de carga y muestra un mensaje de error localizado en el idioma activo (`ES` o `EN`).
  - Las respuestas HTTP observadas para este contrato son `400 Bad Request` por JSON mal formado o validación, `415 Unsupported Media Type` por tipo de contenido incompatible y `500 Internal Server Error` por fallos inesperados; el backend no define un sobre de error personalizado.
- **Escenario 5.3a (Caso límite — Origen CORS permitido y configuración limpia sin tocar lógica de negocio):**
  - **Dado** que los orígenes permitidos se definen por variable de entorno en `backend/` (solo configuración),
  - **Cuando** se realiza un envío válido del formulario desde un origen registrado en dicha variable,
  - **Entonces** el `backend/` acepta la solicitud y responde con éxito,
  - **Y** el `diff` de `backend/` contiene únicamente cambios de configuración CORS sin modificar la lógica de negocio,
  - **Y** `localhost` y el origen _preview_ ya no figuran en la variable al cierre del Bloque A (reemplazados por el dominio final de producción).
- **Escenario 5.3b (Caso de error — Origen CORS no permitido):**
  - **Dado** que los orígenes permitidos se definen por variable de entorno en `backend/` (solo configuración),
  - **Cuando** se intenta enviar el formulario desde un origen no listado en dicha variable,
  - **Entonces** la interfaz detiene el estado de carga y muestra el mensaje de error localizado en el idioma activo (`ES` o `EN`).
- **Escenario 5.4 (Camino feliz — Visibilidad permanente de la nota de privacidad):**
  - **Dado** que el formulario de contacto se renderiza en `/` o `/en` en el HTML inicial,
  - **Cuando** el usuario visualiza el formulario,
  - **Entonces** se muestra en todo momento la nota de privacidad de una sola línea en el idioma activo (`ES` o `EN`) indicando que los datos se usan exclusivamente para responder el contacto.
- **Escenario 5.5 (Caso límite — Detección por _honeypot_ en cliente):**
  - **Dado** que un bot automatizado rellena el campo oculto _honeypot_ en el navegador,
  - **Cuando** se dispara el evento de envío del formulario,
  - **Entonces** el cliente descarta la solicitud sin realizar ninguna petición HTTP al endpoint del `backend/` y sin mostrar mensajes de error.

---

### HU-06: Mejora progresiva — Modal interactivo y filtros por Stack y Rol (`Should`)

**Como** reclutador técnico con JavaScript habilitado,  
**quiero** filtrar proyectos por stack tecnológico o rol y abrir su detalle en un modal interactivo,  
**para** explorar rápidamente los proyectos más relevantes para una vacante.

- **Escenario 6.1 (Camino feliz — Filtrado dinámico y apertura de modal tras hidratar):**
  - **Dado** que la página se ha hidratado en el cliente y la taxonomía de Stack y Rol definida en `D-07b` está cargada,
  - **Cuando** el usuario selecciona una categoría de Stack tecnológico o Rol desempeñado,
  - **Entonces** el catálogo filtra dinámicamente los proyectos coincidentes,
  - **Y** al activar la vista de detalle de un proyecto, se abre un modal/panel interactivo con su ficha técnica completa.
- **Escenario 6.2 (Caso límite — Combinación de filtros sin coincidencias):**
  - **Dado** que el usuario selecciona una combinación de filtros de Stack y Rol que ningún proyecto cumple,
  - **Cuando** se actualiza la vista del catálogo,
  - **Entonces** se muestra un mensaje localizado (`ES` o `EN`) indicando que no hay proyectos coincidentes sin romper el layout.
- **Escenario 6.3 (Caso límite — Invariante de visibilidad y ancla `#<slug-proyecto>` en HTML inicial):**
  - **Dado** que el modal y los filtros operan únicamente como mejora progresiva tras hidratar en el cliente,
  - **Cuando** se inspecciona el HTML estático inicial servido antes de hidratar,
  - **Entonces** cada ancla `#<slug-proyecto>` resuelve a un bloque de detalle visible en línea sin mecanismos de ocultamiento (`display: none`, `visibility: hidden`, `hidden`, `aria-hidden="true"`, `opacity: 0`, `max-height: 0` ni fuera de pantalla).
- **Escenario 6.4 (Caso de error — Fallo de hidratación de filtros o modal):**
  - **Dado** que ocurre un error en tiempo de ejecución al inicializar los scripts interactivos del catálogo en el cliente,
  - **Cuando** el usuario navega por la sección de proyectos,
  - **Entonces** el catálogo estático con todos los proyectos y su detalle en línea permanece visible y consultable.

> _Nota fuera de criterios de aceptación (HU-06):_ El comportamiento de navegación directa por ancla `#<slug-proyecto>` tras hidratar el modal queda abierto para definición de Alberto Zompantzi (su registro formal requiere control de cambios sobre `ROADMAP.md`).

---

### HU-07: Marquee continuo de tecnologías a color con texto plano (`Should`)

**Como** reclutador o sistema ATS,  
**quiero** visualizar el stack tecnológico en una barra continua con iconos de marca a color y texto legible,  
**para** identificar las tecnologías tanto visualmente como mediante lectura automatizada.

- **Escenario 7.1 (Camino feliz — Iconos a color + texto plano indexable):**
  - **Dado** que se seleccionó la fuente de iconos con licencia open-source verificada en `D-07c`,
  - **Cuando** se renderiza la barra de tecnologías en `/` o `/en`,
  - **Entonces** cada tecnología muestra su icono de marca a color acompañado obligatoriamente de su nombre en texto plano indexable en el HTML inicial.
- **Escenario 7.2 (Caso límite — Pausa por interacción y respeto a `prefers-reduced-motion`):**
  - **Dado** que el carrusel continuo está activo en la página,
  - **Cuando** el usuario sitúa el puntero (`:hover`), enfoca un elemento con teclado (`:focus-within`) o toca/hace clic sobre la barra en un dispositivo táctil,
  - **Entonces** la animación se pausa para permitir la lectura,
  - **Y** cuando el sistema tiene activo `prefers-reduced-motion: reduce`, el marquee respeta dicha preferencia desactivando el desplazamiento continuo.
- **Escenario 7.3 (Caso de error — Archivo SVG local que excede el umbral permitido):**
  - **Dado** que se incorpora un icono SVG local para el marquee cuyo tamaño supera el umbral definido en `D-07c` (`PENDIENTE`),
  - **Cuando** se ejecuta la verificación de puerta de aceptación (Fila 8),
  - **Entonces** la verificación falla y bloquea el merge a `main` hasta reducir el archivo o alojarlo externamente.

---

### HU-08: Fondo interactivo reactivo al cursor (`Should`)

**Como** visitante en navegador de escritorio,  
**quiero** experimentar un fondo visual sutil que reaccione al movimiento del cursor,  
**para** percibir una interfaz cuidada sin afectar la legibilidad ni la fluidez.

- **Escenario 8.1 (Camino feliz — Respuesta fluida en escritorio):**
  - **Dado** que el usuario accede desde un dispositivo de escritorio (no táctil) y sin preferencia de movimiento reducido,
  - **Cuando** desplaza el cursor sobre la ventana,
  - **Entonces** el fondo actualiza su efecto visual usando propiedades aceleradas por GPU (`transform`/`opacity`) cumpliendo los umbrales de FPS/LCP y el dispositivo de referencia definidos en `D-07d` (`PENDIENTE`), sin bloquear la interacción con el contenido.
- **Escenario 8.2 (Caso límite — Dispositivos táctiles y `prefers-reduced-motion`):**
  - **Dado** que el usuario accede desde un dispositivo táctil o tiene activo `prefers-reduced-motion: reduce`,
  - **Cuando** carga `/` o `/en`,
  - **Entonces** el seguimiento reactivo al cursor se desactiva automáticamente sin elemento de fondo animado ni _listeners_ de puntero activos y con todo el contenido íntegro.
- **Escenario 8.3 (Caso de error — Fallo en el script del fondo interactivo):**
  - **Dado** que se produce un error al inicializar o ejecutar el efecto visual del fondo en el navegador,
  - **Cuando** el usuario visualiza `/` o `/en`,
  - **Entonces** la interfaz permanece sin elemento de fondo animado ni _listeners_ de puntero activos y con todo el contenido íntegro sin bloquear la navegación.

---

### HU-09: Identidad visual definitiva y metadatos SEO bilingües (`Should`)

**Como** reclutador que comparte el enlace del portafolio o lo encuentra en buscadores,  
**quiero** ver una vista previa coherente y acceder a la versión en mi idioma,  
**para** identificar inmediatamente la marca personal del candidato.

- **Escenario 9.1 (Camino feliz — Identidad visual definitiva con `logo`, `/favicon.ico` y foto de perfil):**
  - **Dado** que `DESIGN.md` (`D-07a`), los medios en nube (`D-03`) y el layout base (Fila 4) están listos,
  - **Cuando** se renderizan `/` y `/en`,
  - **Entonces** navbar, footer y `/favicon.ico` utilizan exclusivamente el archivo `logo` existente,
  - **Y** la nueva foto de perfil carga desde su URL externa en `media.ts` con atributo `alt` traducido al idioma activo.
- **Escenario 9.2 (Camino feliz — Metadatos SEO bilingües y `sitemap.xml`):**
  - **Dado** que el dominio final (`D-01`), las rutas estáticas (Fila 2) y los medios en nube (Fila 1) están configurados,
  - **Cuando** se inspecciona el `<head>` de `/` y `/en` y el archivo `sitemap.xml`,
  - **Entonces** cada ruta incluye sus metadatos (`title` y `description`) traducidos al idioma correspondiente, `<link rel="canonical">`, etiquetas `hreflang="es"`, `hreflang="en"` y `hreflang="x-default"` apuntando a `/`,
  - **Y** `sitemap.xml` lista ambas rutas de idioma.
- **Escenario 9.3 (Caso límite — URL absoluta en Open Graph sin rutas relativas):**
  - **Dado** que crawlers sociales requieren una URL absoluta para previsualizaciones al compartir,
  - **Cuando** se genera la metaetiqueta `og:image` en `/` y `/en`,
  - **Entonces** utiliza el `logo` directo o una composición OG derivada que lo integre alojada en la nube con una URL absoluta (nunca una ruta relativa local).
- **Escenario 9.4 (Caso de error — Activo de identidad u Open Graph inaccesible en la nube):**
  - **Dado** que la URL en la nube de la foto de perfil, el `logo` o la imagen Open Graph devuelve un estado distinto de HTTP `200`,
  - **Cuando** se ejecuta la verificación previa al merge (Fila 8),
  - **Entonces** la puerta de aceptación falla y bloquea el merge a `main` hasta restaurar la disponibilidad HTTP `200` del activo.

---

### HU-10: Puerta de aceptación técnica previa a cada merge a `main`

**Como** dueño del producto,  
**quiero** ejecutar una lista de verificación objetiva antes de cada merge a `main`,  
**para** garantizar que ningún cambio rompa la compatibilidad ATS, la higiene de Git o la privacidad.

- **Escenario 10.1 (Camino feliz — Aprobación integral antes de cada merge a `main`):**
  - **Dado** que se completó el Bloque A, el Bloque B o el pulido opcional (Fila 14),
  - **Cuando** se ejecuta la verificación previa al merge a `main`,
  - **Entonces** se comprueban con éxito todos los criterios siguientes:
    1. HTML inicial sin JS de `/` y `/en` con todos los campos clave de la Métrica 1 (**nombre, rol profesional, resumen de perfil, experiencia/formación, stack tecnológico, títulos/descripciones de proyectos y enlaces**) y detalle completo de proyectos visible sin mecanismos de ocultamiento.
    2. Descarga correcta del CV correspondiente por ruta (`/` -> ES, `/en` -> EN) y verificación de texto seleccionable en ambos PDFs.
    3. Escaneo de secretos con `gitleaks` antes del merge a `main`; `git ls-files` y `git log` con cero binarios no exentos y cero archivos de `información faltante/`.
    4. Búsqueda en el código fuente con cero coincidencias de `frontend/public/imagenes/`.
    5. Respuesta HTTP `200` en todas las URLs externas configuradas en `frontend/src/config/media.ts`.
    6. Enlaces visibles en la UI estrictamente conformes a la matriz del Brief (sin enlaces a backend/Render y sin enlaces externos en n8n).
    7. Cero ocurrencias del texto `PENDIENTE` en la UI.
    8. Envío real del formulario de contacto y configuración CORS verificados contra el dominio final de producción.
    9. Tras integrar el Bloque B, presencia de texto plano indexable junto a cada icono del marquee y verificación de que cada SVG pesa ≤ umbral D-07c (PENDIENTE; SUPUESTO <= 15 KB).
- **Escenario 10.2 (Caso de error — Incumplimiento de cualquier criterio de puerta):**
  - **Dado** que cualquiera de los puntos de verificación anteriores falla durante la revisión previa al merge,
  - **Cuando** se evalúa la rama candidata,
  - **Entonces** se bloquea el merge a `main` hasta corregir el hallazgo y re-ejecutar la verificación completa.

---

## 3. Reglas Transversales, Riesgos Aceptados y Exclusiones

1. **Prohibición de texto `PENDIENTE` en UI:** La marca `PENDIENTE` es exclusiva de la documentación interna (`BRIEF.md`, `ROADMAP.md`, `PRD.md`) y nunca puede renderizarse en el DOM visible ni en atributos accesibles.
2. **Prohibición de enlaces a backend:** Ningún componente visible puede enlazar a servidores o APIs de backend (como Render); el endpoint de contacto se inyecta únicamente por variable de entorno en tiempo de ejecución.
3. **Riesgo aceptado del MVP (Spam por `POST` directo):** El campo _honeypot_ resuelto exclusivamente en el cliente frena bots automatizados que rellenan el formulario en navegador, pero no cubre peticiones `POST` directas al endpoint público del formulario (se acepta como riesgo del MVP al excluir rate-limiting en `backend/`).
4. **Respeto estricto a `Fuera de alcance` (`Won't`, Filas 15–21 del Roadmap):** Quedan fuera de este PRD y del MVP la publicación del `.json` o creación de repositorio en GitHub para la automatización n8n, paneles administradores (CMS) o bases de datos de proyectos, modificaciones a la lógica de negocio de `backend/`, analítica web de comportamiento de usuarios, sistemas CAPTCHA de terceros, rate-limiting en backend, avisos legales extensos en el formulario y el rediseño interno de los PDFs del CV o de mockups previos.

---

## Requisitos no funcionales

| Categoría                               | Requisito medible                                                                                                                                                                                                                                                                                                                                                                                                                                    | Cómo se verifica                                                                                                                                               | Prioridad |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| **Rendimiento**                         | Puntuación de rendimiento en Lighthouse $\ge 90/100$, First Contentful Paint (FCP) $\le 1.8\text{ s}$ y Cumulative Layout Shift (CLS) $\le 0.05$ (`SUPUESTO`) en `/` y `/en` bajo perfil móvil 4G; animaciones del fondo reactivo limitadas exclusivamente a propiedades compuestas por GPU (`transform`, `opacity`) y peso de cada SVG en la marquesina $\le$ umbral definido en `D-07c` (`PENDIENTE`; `SUPUESTO`: $\le 15\text{ KB}$ por archivo). | Auditoría con Lighthouse CLI en `/` y `/en`, inspección de estilos CSS/JS para propiedades animadas y comprobación de tamaño de archivos SVG tras el build.    | Must      |
| **Rendimiento (tolerancia de red)**     | Tiempo máximo de espera (`timeout`) configurado en el cliente HTTP del formulario $\ge 35\text{ s}$ (`SUPUESTO`) para absorber el arranque en frío (_cold start_) del `backend/` existente (`D-05`), manteniendo visible el estado de carga localizado sin bloquear la interfaz.                                                                                                                                                                     | Prueba automatizada con respuesta simulada de $30\text{ s}$ y prueba manual contra la instancia del `backend/` tras periodo de inactividad.                    | Must      |
| **Disponibilidad**                      | $100\%$ del contenido crítico (perfil, enlaces `<a href>` a CV ES/EN, catálogo completo con detalle en línea sin ocultamiento y formulario) entregado en el HTML estático inicial (`SSR_STATIC`) con HTTP `200`, conservando $100\%$ de legibilidad ante indisponibilidad de la nube de medios (`D-03`), caída del `backend/` (`D-05`) o error de hidratación (`HYDRATION_FAILED`).                                                                  | Inspección con `curl -s` y navegación con JavaScript deshabilitado, bloqueo de dominio de medios en DevTools y simulación de fallo en script cliente.          | Must      |
| **Seguridad**                           | $0$ secretos, tokens, URLs internas no autorizadas ni binarios no exentos en el árbol activo o historial de Git (`git ls-files` y `git log`), y $0$ referencias en código fuente a `frontend/public/imagenes/` o `información faltante/`.                                                                                                                                                                                                            | Ejecución de `git ls-files`, revisión de `git log`, búsqueda textual en el repositorio y escaneo con `gitleaks` previo a cada merge a `main`.                  | Must      |
| **Seguridad (CORS y anti-spam)**        | $100\%$ de las peticiones `POST` del formulario dirigidas a la URL leída desde variable de entorno, aceptando únicamente el origen CORS del dominio final de producción (`D-01`) y descartando en cliente ($0$ peticiones HTTP salientes) envíos donde el campo trampa (_honeypot_) contenga $\ge 1$ carácter.                                                                                                                                       | Prueba unitaria/E2E rellenando el campo trampa y verificación real de cabecera `Origin` y CORS contra el dominio final de producción (`HU-10` punto 8).        | Must      |
| **Privacidad**                          | $0$ cookies de rastreo de terceros, $0$ almacenamiento persistente en `localStorage`/`sessionStorage` de datos personales ingresados en el formulario, $0$ datos personales volcados a `console.log` y $1$ nota explícita de privacidad visible junto al formulario en `/` y `/en`.                                                                                                                                                                  | Inspección de almacenamiento y cookies en DevTools, revisión estática de llamadas `console.*` y verificación visual en ambas rutas de idioma.                  | Must      |
| **Accesibilidad**                       | Puntuación de accesibilidad en Lighthouse $\ge 95/100$ (`SUPUESTO`), $0$ violaciones críticas o serias en axe DevTools, atributos `lang` (`es`/`en`) y `alt` localizados en el $100\%$ de imágenes, navegación completa por teclado con foco visible y desactivación automática de animaciones (`STATIC_REDUCED_MOTION` y marquee pausado) ante `prefers-reduced-motion: reduce`.                                                                    | Auditoría con Lighthouse y axe DevTools, recorrido completo con teclado (`Tab`, `Enter`, `Escape`) y prueba con emulación de `prefers-reduced-motion: reduce`. | Must      |
| **Accesibilidad (contraste — Fila 14)** | Relación de contraste de texto $\ge$ umbral `PENDIENTE` (referencia WCAG AA $\ge 4.5:1$, `SUPUESTO`), activado tras cerrar `D-07a` y ejecutar el pulido visual opcional de la Fila 14 del `ROADMAP.md`.                                                                                                                                                                                                                                              | Auditoría con herramienta opcional de contraste (`ROADMAP.md` Fila 14) sobre `/` y `/en` una vez cerrado `D-07a`.                                              | Could     |
| **Observabilidad**                      | $100\%$ de las URLs registradas en `frontend/src/config/media.ts` responden HTTP `200`, y $0$ errores no capturados (`window.onerror` / `unhandledrejection`) durante los flujos nominales de navegación, hidratación, fallo de medios o envío de formulario.                                                                                                                                                                                        | Ejecución de verificación HTTP `200` sobre `media.ts` en la puerta de aceptación (`HU-10` punto 5) y monitoreo de consola en pruebas E2E.                      | Should    |
| **Costo**                               | Costo operativo mensual recurrente de `$0 USD/mes` (`SUPUESTO`) utilizando exclusivamente capas gratuitas para hosting estático SSG (`D-01`), nube de medios (`D-03`) y `backend/` existente (`D-05`), sin contratar servicios de pago ni bases de datos adicionales.                                                                                                                                                                                | Verificación de planes activos y límites de cuota en los paneles de los proveedores elegidos en `D-01` y `D-03` antes de salir a producción.                   | Must      |
| **Mantenibilidad**                      | $0$ errores de compilación TypeScript (`tsc --noEmit` estricto), $100\%$ de URLs de medios centralizadas en `frontend/src/config/media.ts`, $100\%$ de paridad de claves de traducción entre `es` y `en`, $0$ ocurrencias de `PENDIENTE` en el DOM compilado y aprobación de las $9$ comprobaciones de `HU-10` antes de cada merge a `main`.                                                                                                         | Ejecución de `tsc --noEmit`, linter, búsqueda textual de `PENDIENTE` sobre el directorio de salida del build y checklist completo de `HU-10`.                  | Must      |
