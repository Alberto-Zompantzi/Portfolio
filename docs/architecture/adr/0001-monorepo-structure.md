# ADR-0001: Estructura de Monorepo para Frontend Estático, Backend Existente y Documentación

- **Estado:** Aceptado
- **Fecha:** 2026-11-19
- **Decidido por:** Alberto Zompantzi

## Contexto

La raíz del repositorio local contiene actualmente los directorios `backend/`, `docs/`, `frontend/` y la carpeta de insumos locales `Información faltante/`. De acuerdo con `BRIEF.md` y `MediaPolicy` (`GLOSSARY.md`), `Información faltante/` corresponde a material crudo local que debe quedar estrictamente excluido del historial de Git, mientras que el servicio `backend/` existente (`D-05`, `PENDIENTE` de inspección de contrato) y el nuevo sitio estático bilingüe (`frontend/`) requieren gobernanza única de documentación, auditorías de seguridad (`HU-10`) y reglas para agentes de IA sin acoplar sus despliegues.

## Opciones evaluadas

| Opción                                          | Pros                                                                                                                                                                                                               | Contras                                                                                                                                                                                                                      |
| :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Monorepo (`frontend/`, `backend/`, `docs/`)** | Fuente única de verdad para `docs/`, auditorías de `git ls-files` / `git log` (`HU-10`) y coordinación del contrato de `backend/` una vez cerrado `D-05` (`PENDIENTE`); despliegues independientes por directorio. | Exige bloquear `Información faltante/` y binarios no exentos mediante `.gitignore` antes del primer commit, configurar el directorio raíz (`frontend`) en el hosting estático y acotar contexto por carpeta para agentes IA. |
| **Multirepo separado**                          | Aislamiento total de historiales Git entre frontend y backend.                                                                                                                                                     | Duplica documentación, configuración de CI y auditorías; obliga a sincronizar contratos manualmente entre repositorios distintos.                                                                                            |

## Decisión

Adoptar una estructura de **monorepo** con las carpetas frontend/, backend/ y docs/ como único árbol versionado objetivo en Git, manteniendo Información faltante/ excluida del control de versiones conforme a MediaPolicy.

## Consecuencias

- **Positivas:** Toda la documentación (`docs/`), el registro central de medios (`frontend/src/config/media.ts`) y el código del `backend/` se auditan en un mismo historial Git; las verificaciones de `HU-10` se ejecutan sobre un único árbol; facilita alinear y verificar el contrato de `backend/` en cuanto se cierre `D-05` (`PENDIENTE`).
- **Negativas / Compromisos:** Debe asegurarse mediante `.gitignore` (antes del primer commit) que `Información faltante/` nunca ingrese al índice de Git; el pipeline de hosting estático deberá apuntar a `frontend/` como directorio raíz de compilación; se requerirán archivos `AGENTS.md` específicos por carpeta en el Paso 18.
