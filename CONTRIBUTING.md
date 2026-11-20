# Contribuir

Estas reglas aplican al monorepo `frontend/`, `backend/` y `docs/`.

## Flujo de trabajo

- Crea ramas desde `develop`: `feature/<issue>-<descripcion>`, `fix/<issue>-<descripcion>` o `task/<issue>-<descripcion>`.
- Escribe commits en inglés con Conventional Commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:` o `chore:`.
- Redacta issues y pull requests en español; enlaza el issue relacionado y describe validación reproducible.
- Mantén cambios acotados al área responsable y actualiza la documentación cuando cambie el comportamiento.

## Regla de oro para contratos

Si un cambio toca `docs/api/openapi.yaml`, `docs/architecture/ARCHITECTURE.md` o `docs/architecture/DATA_MODEL.md`, acuerda y documenta el cambio con las personas responsables **antes de codificar**. La implementación debe seguir el contrato acordado.

## Medios y secretos

Está prohibido subir secretos o binarios no exentos. Sigue `MediaPolicy` en `docs/product/GLOSSARY.md` y las excepciones explícitas de `.gitignore`; no agregues medios por conveniencia. Ejecuta `gitleaks` antes de proponer un merge a `main`, además de revisar el historial y los archivos del cambio.

## Validación

Ejecuta las comprobaciones apropiadas al área: lint/build del frontend, compilación y pruebas del backend, y revisión de enlaces/contratos para documentación. Para cada merge a `main`, completa los nueve puntos de HU-10 en el PRD y registra el resultado.
