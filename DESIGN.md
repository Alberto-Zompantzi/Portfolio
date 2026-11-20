# Sistema de diseño — Portafolio de Alberto Zompantzi

Especificación visual y de interacción para las rutas estáticas bilingües `/` (español) y `/en` (inglés). Los valores de contraste son aproximados, calculados con luminancia relativa WCAG sobre los fondos indicados; la validación final debe considerar cada combinación real de componente y estado.

## 1. Visión estética, referentes y arquitectura

La interfaz combina la lectura editorial directa, el espacio negativo y la jerarquía limpia de [Paula Reixach](https://paulareixach.github.io/) con la identidad técnica, la voz fullstack y los detalles de ingeniería del [portafolio de Alberto](https://albertozompantzi-portfolio.pages.dev/). El resultado prioriza contenido comprobable, narrativa breve, tipografía expresiva y señales técnicas puntuales. Evita la acumulación de badges, paneles decorativos, brillos y datos de interfaz que compitan con el contenido.

El diseño tiene un único modo oscuro, con planos tonales sobrios, acento violeta moderado y verde reservado para confirmaciones. La composición debe seguir siendo útil en HTML estático prerenderizado (`SSR_STATIC`), sin JavaScript, y conservar íntegro el contenido semántico para lectores ATS. JavaScript solo añade la mejora progresiva después de hidratar. Si la hidratación falla, las rutas, fichas en línea y formularios siguen legibles y navegables.

Las animaciones se limitan a `transform` y `opacity`; no se animan layout, dimensiones, sombras ni color. `prefers-reduced-motion: reduce` desactiva el marquee continuo y el fondo animado. En `(pointer: coarse)` no se instala ni se ejecuta el fondo reactivo. El fondo solo entra en estado `INTERACTIVE_POINTER` después de hidratar en un dispositivo no táctil, sin preferencia de movimiento reducido y sin error de ejecución. El estado estático es siempre el fallback.

## 2. Tokens de color y contraste

Los contrastes se calcularon con la fórmula de luminancia relativa de WCAG. Los ratios reportados redondean a dos decimales; texto normal requiere al menos 4.5:1 y límites gráficos significativos al menos 3:1.

| Token semántico | Hex | Uso y contraste aproximado |
| --- | --- | --- |
| `--color-bg` | `#0F131C` | Fondo base. Texto primario: 16.75:1; secundario: 10.91:1. |
| `--color-surface` | `#181C24` | Tarjetas y secciones. Texto secundario: 10.02:1. |
| `--color-surface-elevated` | `#1C2028` | Paneles, popovers y modal. Texto secundario: 9.58:1. |
| `--color-text-primary` | `#F4F2FA` | Títulos y cuerpo principal. 16.75:1 sobre `--color-bg`; 15.38:1 sobre `--color-surface`. |
| `--color-text-secondary` | `#CBC3D7` | Descripciones y metadatos. 10.91:1 sobre fondo; 10.02:1 sobre superficie. |
| `--color-accent` | `#D0BCFF` | Enlaces, CTA y selección. 10.90:1 sobre fondo; 10.01:1 sobre superficie. |
| `--color-accent-hover` | `#E9DDFF` | Texto o icono de acento en hover. 14.38:1 sobre fondo; 13.21:1 sobre superficie. |
| `--color-border` | `#958EA0` | Límites de controles y tarjetas. 5.89:1 sobre fondo; 5.41:1 sobre superficie. |
| `--color-success` | `#4EDEA3` | Texto e iconos de éxito. 10.88:1 sobre fondo; 10.00:1 sobre superficie. |
| `--color-error` | `#FFB4AB` | Texto e iconos de error. 10.94:1 sobre fondo; 10.05:1 sobre superficie. |
| `--color-focus-ring` | `#D0BCFF` | Anillo de foco de 2 px, separado visualmente del control. 10.90:1 sobre fondo; 10.01:1 sobre superficie. |

Los CTA rellenos con `--color-accent` usan texto `#23005C` (aprox. 10.05:1 sobre el acento). No comunicar estado únicamente con color: acompañar error, éxito y selección con texto, icono, borde o estado semántico. El borde decorativo no sustituye el indicador de foco.

## 3. Tipografía y jerarquía

La familia principal es **Plus Jakarta Sans**, con `system-ui`, `Segoe UI` y sans serif genérica como respaldo. La familia monoespaciada es **JetBrains Mono**, con `ui-monospace`, `SFMono-Regular`, Consolas y monospace como respaldo. Las fuentes web se solicitan con `font-display: swap` y no bloquean el primer render; el sistema permanece legible si no se descargan. No cargar pesos innecesarios.

| Nivel | Tamaño / interlínea | Peso | Tracking | Aplicación |
| --- | --- | --- | --- | --- |
| `h1` | 48/56 px escritorio; 36/44 px móvil | 700 | −0.03em | Una declaración principal por página. |
| `h2` | 32/40 px; 28/36 px móvil | 650–700 | −0.02em | Secciones editoriales. |
| `h3` | 22/30 px | 600 | −0.01em | Proyecto y subsección. |
| `body` | 16/26 px | 400 | 0 | Texto de lectura, ancho recomendado 65–72 caracteres. |
| `small` | 14/20 px | 400–500 | 0.01em | Ayuda, fecha y metadatos legibles. |
| `code` | 13/20 px | 400–500 | 0.01em | Tecnologías, etiquetas técnicas y fragmentos cortos. |

En pantallas estrechas, el tamaño fluye entre los valores móvil y escritorio sin bajar el texto de lectura de 16 px. Mono se reserva para datos técnicos breves; no se usa para párrafos largos. Los títulos conservan frases concretas y no convierten la narrativa en una consola ficticia.

## 4. Espaciado, layout y breakpoints

La escala de espaciado usa una base estricta de 4 px: **4, 8, 12, 16, 24, 32, 48, 64 y 96 px**. Se asignan tokens por función y se reutilizan; no se crean valores intermedios en componentes. El ancho máximo de lectura y layout es 1200 px, con gutters de 24 px y 16 px en móvil.

| Viewport | Layout |
| --- | --- |
| `< 768 px` | Móvil: una columna; catálogo de una columna; navegación compacta; ficha en línea. Mantener 16 px de gutter, incluso a 360 px. |
| `768–1279 px` | Tableta: grilla de 8 columnas; catálogo de dos columnas cuando las tarjetas conservan ancho legible. |
| `≥ 1280 px` | Escritorio: grilla de 12 columnas, máximo 1200 px centrado; hero y catálogo pueden usar dos columnas. |

Los puntos de ajuste obligatorios son **360 px, 768 px y 1280 px**; diseño mobile-first, sin overflow horizontal a 360 px. Separación entre secciones: 64–96 px en escritorio y 48–64 px en móvil. Grupos relacionados usan 16–32 px. Radios: 4 px para controles pequeños, 8 px para botones, 12 px para tarjetas y paneles, 16 px para modal; píldora solo para etiquetas breves. El modal no se convierte en una lámina estrecha: a 360 px ocupa el viewport con gutters de 16 px y desplazamiento de contenido propio.

## 5. Componentes, interacciones y estados

Todo componente conserva la misma semántica y orden de contenido en `/` y `/en`; los textos visibles, nombres accesibles, avisos y mensajes se localizan. La ficha técnica incluye **Problema, Solución, Stack y Rol**; añade Arquitectura, Flujo/Diagrama, Retos técnicos, Resultados y enlaces solo cuando haya contenido verificable.

| Componente | Contrato visual y de comportamiento | Estados requeridos |
| --- | --- | --- |
| Navegación superior e idioma | Enlaces HTML reales a secciones o rutas. Selector enlaza `/` ES y `/en` EN; marca idioma actual con `aria-current="page"`. Menú móvil operable por teclado. | `default`: ruta actual; `hover`: cambio perceptible sin mover layout; `focus-visible`: anillo; `disabled`: opción no disponible no parece enlace; `loading`: no requerido; `empty`: no aplica; `error`: ruta inválida vuelve a ES sin ocultar contenido; `success`: cambio de idioma navega a la ruta correspondiente. |
| Hero y CV por idioma | Nombre, rol y resumen en HTML inicial. CV es enlace de descarga estándar y apunta al activo del idioma activo. | `default`; `hover` y `focus-visible` en CTA; `disabled` si el activo no está configurado, sin destino falso; `loading` no requerido; `empty` con resumen editorial de respaldo; `error` si falla la descarga, mostrar alternativa de contacto; `success` queda a cargo del navegador tras descargar. |
| Tarjeta de proyecto y ficha técnica en línea | La tarjeta resume proyecto y ofrece ancla `#<slug>`. El bloque completo está presente y visible en HTML inicial, sin `hidden`, `display:none`, `opacity:0`, altura cero ni desplazamiento fuera de pantalla. Imágenes usan `alt` localizado y proporción reservada. Ante error de carga hidratado, reemplazar el recurso con `MediaAsset.visualFallback`, conservando el espacio y alternativa textual. | `default`; `hover` sin elevar ni recolorear en exceso; `focus-visible` en cada enlace; `disabled` para acción no disponible sin enlace; `loading` con espacio reservado; `empty` con ilustración/fallback y texto; `error` muestra `visualFallback` o explicación; `success` imagen y enlaces verificados disponibles. |
| Filtros de catálogo y modal progresivo | En SSR los filtros no ocultan tarjetas y cada enlace abre la ficha en línea. Solo tras hidratar se habilita el filtrado y modal; conservar fallback completo si falla JS. Modal con nombre accesible, foco contenido, cierre Escape y retorno del foco al activador. | `default`; `hover` y `focus-visible` en controles; `disabled` durante inicialización o sin opciones; `loading` mientras hidrata; `empty` mensaje localizado al no haber coincidencias; `error` conserva catálogo estático; `success` filtros aplicados o ficha abierta. |
| Formulario de contacto | Renderizado estático en ambas rutas; `<label>` explícito asociado a cada campo; nota de privacidad visible en todo momento. Submit empieza `disabled` en SSR y se habilita solo tras hidratar. Incluir `<noscript>` localizado que explica la limitación. Honeypot solo cliente; payload de API solo `nombre`, `email`, `mensaje`; endpoint proviene de variable de entorno, nunca de un enlace visible. | `default`: `IDLE`; `hover` / `focus-visible` en campos y botón; `disabled` en SSR y durante envío; `loading`: mensaje localizado, contemplando cold start y evitando duplicados; `empty`: errores de validación por campo; `error`: validación o red localizada, valores conservados y reintento; `success`: confirmación localizada y formulario en estado final claro. |
| Marquee SVG de tecnologías | Cada icono a color se acompaña del nombre en texto plano indexable en SSR. Pausa en `:hover`, `:focus-within` y al tocar/activar en táctil. Movimiento solo por `transform`; el texto se conserva si se reduce movimiento. | `default`: quieto en SSR y movimiento opcional tras hidratar; `hover`/`focus-visible`: pausa; `disabled`: estático con movimiento reducido o toque; `loading`: no requerido; `empty`: omitir sección; `error`: lista textual sigue visible si falla SVG; `success`: iconos y texto cargados. |
| Fondo reactivo | `SSR_STATIC` dibuja únicamente el fondo estático. Tras hidratar, habilitar `INTERACTIVE_POINTER` solo con puntero fino, movimiento permitido y sin error. Cambiar solo `transform`/`opacity`. No registrar listeners en táctil ni con movimiento reducido. | `default`: estático; `hover`: responde suavemente al cursor dentro de los límites establecidos por el contrato técnico; `focus-visible`: no aplica; `disabled`: táctil/reducción de movimiento; `loading`: estático durante hidratación; `empty`: sin adorno si no aporta; `error`: `STATIC_FALLBACK` y limpieza de listeners; `success`: seguimiento activo en escritorio compatible. |

### Reglas comunes de estado

- Todo control interactivo implementa `:focus-visible` con anillo visible de al menos 2 px; el foco no se elimina ni se sustituye por hover. Mantener orden de tabulación lógico y objetivos táctiles de al menos 44 × 44 px cuando sea viable.
- `hover` nunca es el único canal de información y no aplica como requisito a dispositivos táctiles. `disabled` comunica indisponibilidad también semánticamente (`disabled`/`aria-disabled`) y conserva contraste legible; no depender de opacidad reducida.
- Carga, error, vacío y éxito incluyen texto localizable y, donde aplique, `aria-live="polite"` o asociación programática con el campo. No insertar contenido esencial solo después de interacción.
- En SSR, las fichas permanecen visibles y el enlace a detalle navega al ancla. La hidratación puede abrir el modal como mejora progresiva, pero no retira la ficha legible de la estructura accesible.

## 6. Reglas de implementación y auditoría

1. Todo color de interfaz se consume mediante tokens semánticos; quedan prohibidos hexadecimales sueltos fuera de la definición de tokens, así como colores directos en propiedades CSS o atributos HTML.
2. Todo espaciado, ancho, radio y duración recurrente se define mediante token. Se prohíben espaciados sueltos fuera de la escala y valores que rompan la base de 4 px.
3. Se prohíben estilos en línea, incluidos `style="…"` y `style={{…}}`. Las variantes visuales viven en hojas de estilo y clases con nombre semántico.
4. `:focus-visible` es obligatorio para enlaces, botones, controles de formulario, filtros, controles de modal y cualquier elemento operable por teclado. No usar `outline: none` sin reemplazo accesible.
5. No se oculta contenido de ficha técnica en HTML servido. Ningún modal o filtro es requisito para descubrir contenido; su lógica es solo mejora progresiva.
6. Revisar contraste de texto normal ≥ 4.5:1 y texto grande, componentes y bordes significativos ≥ 3:1, en cada fondo y estado real, incluidos hover, foco, error, éxito y deshabilitado.
7. Verificar teclado, zoom, flujo a 360 px, enlaces ES/EN, `prefers-reduced-motion`, dispositivo `(pointer: coarse)`, error de hidratación y fallos de imagen. Los activos externos deben conservar `alt` localizado y fallback visual.
8. El marquee y fondo reactivo respetan movimiento reducido; ninguna animación utiliza propiedades distintas de `transform` y `opacity`. Si la mejora interactiva falla, el resultado permanece estático y utilizable.
