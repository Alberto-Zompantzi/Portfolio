# Diagramas de Flujo y Estados del Sistema

> **Fuentes:** `docs/product/BRIEF.md` (v1.7), `docs/product/ROADMAP.md` (v1.4), `docs/product/PRD.md` (v1.2) y `docs/product/GLOSSARY.md`.  
> **Nota:** Las decisiones aún marcadas como `PENDIENTE` (`D-03`, `D-04a`/`D-04b`, `D-05`, `D-06`, `D-07a`–`D-07d`) se representan como interfaces abstractas hasta cerrarse en los Pasos 7 y 8. D-01 está cerrado; ADR-0002 define Next.js con exportación estática en Cloudflare Pages y el dominio de producción.

---

## 1. Flujo Principal de Compilación, Entrega Estática, Hidratación y Fondo (`flowchart`)

```mermaid
flowchart TD
    A["Build SSG (Next.js output: export; D-01) "] --> B["Genera '/' con <html lang='es'> y <a href='/en'>"]
    A --> C["Genera '/en' con <html lang='en'> y <a href='/'>"]
    A --> D["Genera SEO por ruta (title, description, canonical, hreflang es/en/x-default->'/', og:image absoluta) y sitemap.xml"]

    B --> E{"Cliente solicita '/' o '/en'"}
    C --> E

    E --> F["Estado SSR_STATIC: Entrega HTML inicial completo"]
    F --> G["DOM inicial sin JS: Perfil, <a href> CV ES/EN (D-06), Catálogo + detalle completo en línea sin ocultamiento, matriz de enlaces (D-04a/b), Marquee (iconos + texto plano) y Formulario con nota de privacidad"]
    F --> H["Solicita imágenes sanitizadas desde Nube externa (media.ts / D-03)"]

    H -->|HTTP 200| I["Imagen renderizada con atributo alt localizado"]
    H -->|Error de red| J["Mantiene atributo alt descriptivo accesible en HTML (si JS hidratado, activa además fallback visual de media.ts)"]

    F --> K{"¿JavaScript activo en navegador?"}
    K -->|No - ATS / Scraper| L(["Estado final: SSR_STATIC (vista estática íntegra)"])
    K -->|Sí| M{"¿Hidratación exitosa?"}
    M -->|No| N(["Estado final: HYDRATION_FAILED (DOM inicial íntegro y visible)"])
    M -->|Sí| O["Estado HYDRATED: vista hidratada (habilita filtros Stack/Rol, modal, pausa de marquee en hover/focus/toque y envío de formulario)"]

    O --> P{"Evaluación de Fondo Reactivo (Recorrido C / HU-08)"}
    P -->|Dispositivo táctil| Q(["Estado final: STATIC_TOUCH (sin fondo animado ni listeners)"])
    P -->|prefers-reduced-motion: reduce| R(["Estado final: STATIC_REDUCED_MOTION (sin fondo animado ni listeners)"])
    P -->|Escritorio sin reduced-motion| S["Estado activo: INTERACTIVE_POINTER (GPU transform/opacity, D-07d PENDIENTE)"]
    S -->|Error en script| T(["Estado final: STATIC_FALLBACK (sin fondo animado ni listeners)"])
```

---

## 2. Máquina de Estados del Formulario de Contacto (`stateDiagram-v2`)

```mermaid
stateDiagram-v2
    [*] --> IDLE: Render inicial HTML (con nota de privacidad en idioma activo)

    IDLE --> VALIDATING: Evento submit en formulario

    VALIDATING --> DROPPED_HONEYPOT: Campo trampa contiene texto (sin petición HTTP ni error)
    VALIDATING --> ERROR_VALIDATION: Campos obligatorios (D-05) vacíos o email inválido en cliente
    VALIDATING --> SUBMITTING: Validación en cliente exitosa y campo trampa vacío

    ERROR_VALIDATION --> VALIDATING: Usuario corrige datos y vuelve a enviar

    SUBMITTING --> SUCCESS: Envío aceptado por backend/ (origen CORS permitido y respuesta exitosa)
    SUBMITTING --> ERROR_NETWORK: Error observado por el cliente (fallo de red, origen CORS rechazado o respuesta HTTP de error)

    ERROR_NETWORK --> VALIDATING: Usuario reintenta el envío

    DROPPED_HONEYPOT --> [*]
    SUCCESS --> [*]
```

---

## 3. Secuencia de Interacción entre Servicios (`sequenceDiagram`)

```mermaid
sequenceDiagram
    actor U as Usuario / Reclutador / ATS
    participant H as Hosting Estático (SSG / D-01)
    participant C as Nube de Medios (D-03)
    participant B as Backend Existente (D-05)

    U->>H: GET / o GET /en
    H-->>U: HTML prerenderizado completo (perfil, <a href> CV, catálogo con detalle en línea y enlaces D-04a/b, marquee con texto plano, SEO/hreflang y formulario)
    U->>C: GET activos gráficos (URLs desde media.ts)
    alt Activo disponible (HTTP 200)
        C-->>U: Imagen sanitizada
    else Error de carga en nube
        C-->>U: Error HTTP / Timeout
        Note over U: Atributo alt accesible en HTML (si JS hidratado, activa fallback visual de media.ts)
    end

    opt Usuario envía formulario de contacto (requiere ejecución de script en cliente; sin JS el formulario no envía)
        Note over U: Validación de formato en cliente + revisión de campo trampa vacío
        U->>B: POST <ENDPOINT_ENV> (payload según D-05 PENDIENTE, Origin: dominio final)
        alt Envío aceptado por backend/ (origen CORS permitido y respuesta exitosa)
            B-->>U: Respuesta exitosa (mensaje de confirmación localizado ES/EN)
        else Error observado por el cliente (fallo de red, rechazo CORS o respuesta HTTP de error)
            Note over U: Fallo de red, rechazo CORS en navegador o respuesta HTTP de error
            Note over U: Detiene estado de carga y muestra error localizado ES/EN
        end
    end
```

---

## 4. Puerta de Aceptación Técnica Previa a Merge a `main` (`HU-10` / Fila 8)

```mermaid
flowchart TD
    A["Rama candidata lista (Bloque A, Bloque B o Fila 14)"] --> B["1. HTML sin JS en '/' y '/en': campos clave Métrica 1 y detalle en línea sin ocultamiento"]
    B --> C["2. Descarga de CV por ruta ('/'->ES, '/en'->EN) y texto seleccionable legible por ATS"]
    C --> D["3. git ls-files y git log: cero binarios no exentos y cero archivos de información faltante/"]
    D --> E["4. Búsqueda en código fuente: cero coincidencias de frontend/public/imagenes/"]
    E --> F["5. Verificación HTTP 200 en todas las URLs de frontend/src/config/media.ts"]
    F --> G["6. Matriz de enlaces UI: sin enlaces a backend/Render y sin enlaces externos en n8n"]
    G --> H["7. DOM y atributos accesibles: cero ocurrencias del texto PENDIENTE"]
    H --> I["8. Formulario de contacto y CORS verificados contra dominio final de producción"]
    I --> J["9. Tras Bloque B: texto plano indexable junto a cada icono del marquee y SVGs <= umbral D-07c"]

    J --> K{"¿Pasan las 9 verificaciones?"}
    K -->|No| L(["Bloquea merge a main hasta corregir hallazgos y re-ejecutar"])
    K -->|Sí| M(["Aprueba puerta de aceptación y habilita merge a main"])
```
