# Instrucciones para agentes

## Propósito y mapa
- Implementa únicamente el issue asignado y conserva los contratos v1.0.
- `frontend/`: interfaz web; `backend/`: API; `docs/`: fuente de verdad; `DESIGN.md`: sistema de diseño.
- No existe `ai-core/`.

## Lectura acotada
- Lee solo el issue asignado, `DESIGN.md` y las secciones de `docs/architecture/ARCHITECTURE.md` citadas por ese issue.
- No escanees todo el repositorio ni abras archivos ajenos al alcance.
- Para contratos compartidos, consulta `docs/api/openapi.yaml`, `docs/architecture/DATA_MODEL.md` y `docs/architecture/ARCHITECTURE.md` v1.0.

## Reglas inamovibles
- Rutas, enums y contratos salen de OpenAPI, DATA_MODEL y ARCHITECTURE v1.0; no los dupliques con definiciones incompatibles.
- Si el cambio requiere tocar `docs/api/*`, detente y avisa antes de modificarlo.
- Respeta `SSR_STATIC` y `INTERACTIVE_POINTER`, `prefers-reduced-motion: reduce` y `(pointer: coarse)` según `DESIGN.md`.
- No uses colores hexadecimales fuera de tokens ni espaciados fuera de la escala/tokens de `DESIGN.md`.
- No uses estilos en línea (`style="…"` ni `style={{…}}`).
- Nunca incluyas secretos ni datos personales reales en código, fixtures, ejemplos o logs.

## Flujo de colaboración
- Crea ramas desde `develop`: `feature/<issue>-<descripcion>`, `fix/<issue>-<descripcion>` o `task/<issue>-<descripcion>`.
- Escribe commits en inglés con Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`).
- Redacta issues y pull requests en español; enlaza el issue y describe validación reproducible.
