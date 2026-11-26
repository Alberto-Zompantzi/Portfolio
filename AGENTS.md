# Instrucciones para agentes

## Propósito y ownership
- Implementa únicamente el issue asignado. Conserva los contratos v1.0 y las decisiones aceptadas en los ADR.
- `frontend/` es dueño de la interfaz estática, el contenido tipado, la mejora progresiva y el cliente de contacto.
- `backend/` es dueño de la API y su persistencia existente. No cambies su lógica salvo que un issue posterior lo autorice explícitamente.
- `docs/` es la fuente de verdad documental. `DESIGN.md` define el sistema visual del frontend.
- No existe `ai-core/`. `Información faltante/` es material local excluido de Git según MediaPolicy.

## Lectura acotada
- Lee el issue asignado, `DESIGN.md` cuando aplique y solo las secciones de arquitectura citadas por el issue; no escanees el repositorio ni abras archivos ajenos al alcance.
- Consulta `docs/api/openapi.yaml`, `docs/architecture/DATA_MODEL.md` y `docs/architecture/ARCHITECTURE.md` v1.0 únicamente cuando el cambio necesite esos contratos compartidos.

## Reglas inamovibles
- Rutas, enums y contratos salen de OpenAPI, DATA_MODEL y ARCHITECTURE v1.0; no los dupliques con definiciones incompatibles.
- Trata los contratos v1.0 y ADR aceptados como límites. No cambies documentos congelados ni `docs/api/*` sin acuerdo previo de las personas responsables; si el issue requiere ese cambio, detente y avisa.
- Respeta el alcance y las exclusiones del issue y de la arquitectura. Una exclusión requiere un issue posterior o una decisión de alcance explícita antes de ampliarse.
- Respeta `SSR_STATIC` y `INTERACTIVE_POINTER`, `prefers-reduced-motion: reduce` y `(pointer: coarse)` según `DESIGN.md`.
- No uses colores hexadecimales fuera de tokens ni espaciados fuera de la escala/tokens de `DESIGN.md`.
- No uses estilos en línea (`style="…"` ni `style={{…}}`).
- Nunca incluyas secretos ni datos personales reales en código, fixtures, ejemplos o logs.

## Flujo de colaboración
- Crea ramas desde `develop`: `feature/<issue>-<descripcion>`, `fix/<issue>-<descripcion>` o `task/<issue>-<descripcion>`.
- Escribe commits en inglés con Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`).
- Redacta issues y pull requests en español; enlaza el issue y describe validación reproducible.
- Mantén los cambios acotados al ownership responsable. Actualiza documentación cuando cambie el comportamiento y describe límites o supuestos sin publicar valores no confirmados.
- Ejecuta únicamente validaciones apropiadas y reproducibles para el área modificada; no afirmes una comprobación que no se haya ejecutado.
