# Reglas de frontend

- Este directorio es dueño de la interfaz, las rutas estáticas bilingües, el contenido tipado versionado y la mejora progresiva del cliente. No asumas ownership de la API ni su persistencia.
- Respeta las decisiones aceptadas y los contratos v1.0; para modelos y payloads sigue `docs/api/openapi.yaml`, `docs/architecture/DATA_MODEL.md` y `docs/architecture/ARCHITECTURE.md`.
- Usa Next.js App Router con prerenderizado estático para `/` (ES) y `/en` (EN), conforme a la arquitectura v1.0.
- Mantén TypeScript estricto.
- Genera los tipos compartidos desde `docs/api/openapi.yaml`; nunca edites tipos generados a mano.
- Consume tokens semánticos de `DESIGN.md` y usa `MediaAsset.visualFallback` cuando falle un medio.
- Mantén las fichas técnicas presentes y visibles en el HTML servido; no uses `hidden`, `display: none` ni `opacity: 0` para ocultarlas.
- El submit de contacto empieza deshabilitado en SSR y se habilita solo después de hidratar.
- No uses valores de estilo fuera de los tokens ni estilos en línea.
- Respeta `SSR_STATIC` como fallback completo. `INTERACTIVE_POINTER` solo se habilita según `DESIGN.md`; `prefers-reduced-motion: reduce` y `(pointer: coarse)` desactivan los efectos correspondientes.
- No publiques `PENDIENTE` en la interfaz ni inventes URLs, contenidos, umbrales o configuraciones aún no confirmados.
- Mantén el alcance del issue; no implementes exclusiones del MVP ni cambies contratos compartidos sin el acuerdo previo requerido.

## Comandos previstos

Pendientes hasta inicializar `frontend/package.json`; no se pueden ejecutar todavía:
- `pnpm install`
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm test`
- `pnpm build`

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
