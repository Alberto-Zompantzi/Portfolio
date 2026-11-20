# ADR-0002: Propuesta de Framework SSG (Next.js Static Export) y Hosting en Cloudflare Pages (`D-01`)

- **Estado:** Aceptado (stack SSG y hosting aprobados; dominio final de D-01 permanece PENDIENTE)
- **Fecha:** 2026-11-19
- **Decidido por:** Alberto Zompantzi

## Contexto

El desbloqueo `D-01` (`ROADMAP.md`, `PENDIENTE`) abarca la selección de la herramienta SSG, la plataforma de hosting estático y el dominio final de producción. El sitio debe generar páginas HTML estáticas prerenderizadas (`SSR_STATIC`) para `/` (`es`) y `/en` (`en`) que sean 100% legibles sin JavaScript para sistemas ATS y reclutadores (`HU-02`, `HU-03`, `HU-04`, `HU-09`), aplicando mejora progresiva (`HYDRATED`) en React y TypeScript para filtros por Stack/Rol, modal de detalle, pausa de marquesina y fondo reactivo (`HU-05` a `HU-08`), con costo operativo recurrente de `$0 USD/mes` (`SUPUESTO`).

## Opciones evaluadas

| Opción                                               | Pros                                                                                                                                                                                                                                                   | Contras                                                                                                                                                       |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Next.js (`output: 'export'`) en Cloudflare Pages** | Dominio técnico previo completo (React, TS, Next.js y Cloudflare Pages); genera HTML estático puro (`out/`) con metadatos SEO por ruta (`canonical`, `hreflang`, `sitemap.xml`); costo `$0 USD/mes` (`SUPUESTO`) en capa gratuita de Cloudflare Pages. | En modo de exportación estática no se pueden usar funciones de servidor de Next.js (`headers()`, middleware dinámico o `next/image` sin `unoptimized: true`). |
| **Astro + React (Islands) en Cloudflare Pages**      | Cero JavaScript enviado por defecto salvo islas explícitas; excelente rendimiento estático.                                                                                                                                                            | Introduce sintaxis `.astro` y modelo de hidratación nuevo para el flujo de desarrollo, penalizando el tiempo de entrega del `WalkingSkeleton`.                |
| **Vite + React SPA con prerenderizado manual**       | Stack familiar de SPA sin cambio de bundler.                                                                                                                                                                                                           | Exige mantener scripts o plugins manuales para prerenderizar múltiples rutas (`/`, `/en`) e inyectar etiquetas `<head>` SEO específicas por idioma.           |

## Decisión

Seleccionar **Next.js configurado con exportación estática (output: 'export')** en TypeScript como herramienta SSG y **Cloudflare Pages** ($0 USD/mes, SUPUESTO) como plataforma de hosting estático. Dentro de D-01, queda únicamente PENDIENTE confirmar el **dominio final de producción** (subdominio \*.pages.dev o dominio personalizado).

## Consecuencias

- **Positivas:** Elimina curva de aprendizaje; acelera la entrega del `WalkingSkeleton` bilingüe con **Tzompcomer**; genera archivos HTML estáticos puros para `/` y `/en` verificables con `curl` y sin JavaScript; soporta HTTPS automático y dominio personalizado gratuito.
- **Negativas / Compromisos:** La elección del framework por sí sola **no garantiza automáticamente** HTML legible sin JavaScript ni visibilidad para ATS; exige implementar las fichas de proyecto (`InlineProjectDetail`) sin renderizado exclusivo en cliente ni ocultamiento CSS y verificar cada ruta (`/`, `/en`) con JavaScript deshabilitado (`HU-10` punto 1). Además, queda prohibido usar APIs de servidor Node en `frontend/` (el formulario debe consumir exclusivamente el `backend/` existente vía `fetch` en cliente) y `images.unoptimized` debe configurarse en `true`.
