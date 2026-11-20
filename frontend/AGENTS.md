# Reglas de frontend

- Usa Next.js App Router con prerenderizado estático para `/` (ES) y `/en` (EN), conforme a la arquitectura v1.0.
- Mantén TypeScript estricto.
- Genera los tipos compartidos desde `docs/api/openapi.yaml`; nunca edites tipos generados a mano.
- Consume tokens semánticos de `DESIGN.md` y usa `MediaAsset.visualFallback` cuando falle un medio.
- Mantén las fichas técnicas presentes y visibles en el HTML servido; no uses `hidden`, `display: none` ni `opacity: 0` para ocultarlas.
- El submit de contacto empieza deshabilitado en SSR y se habilita solo después de hidratar.
- No uses valores de estilo fuera de los tokens ni estilos en línea.

## Comandos previstos

Pendientes hasta inicializar `frontend/package.json`; no se pueden ejecutar todavía:
- `pnpm install`
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm test`
- `pnpm build`
