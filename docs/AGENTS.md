# Reglas de documentación

- `docs/` es la fuente de verdad para producto, arquitectura, ADR, modelo de datos, API y políticas del proyecto.
- Mantén ownership y límites definidos en `docs/architecture/ARCHITECTURE.md` §2 y las decisiones aceptadas en los ADR. La documentación no transfiere ownership entre componentes.
- Conserva los contratos v1.0. `docs/api/openapi.yaml` y `docs/architecture/DATA_MODEL.md` son referencias canónicas para API y datos compartidos; no copies contratos en reglas locales con versiones divergentes.
- No cambies `docs/api/*`, `docs/architecture/ARCHITECTURE.md` ni `docs/architecture/DATA_MODEL.md` congelados sin acuerdo previo de las personas responsables, conforme a `CONTRIBUTING.md`. Si el issue requiere un cambio de contrato, detente y comunícalo.
- Registra decisiones nuevas mediante el proceso de ADR y el issue que las autoriza; no presentes supuestos, `PENDIENTE` ni configuraciones no confirmadas como hechos.
- Respeta el alcance del issue y las exclusiones documentadas en arquitectura y PRD. Las exclusiones se atienden en issues posteriores; ampliar el alcance requiere una decisión explícita.
- Redacta issues y pull requests en español, enlaza el issue relacionado e indica validación reproducible.
- Para cada merge a `main`, sigue la puerta HU-10 del PRD; no declares completados los puntos que no se hayan verificado.
