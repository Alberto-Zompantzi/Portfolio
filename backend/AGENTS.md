# Reglas de backend

- Este directorio es dueño de la API existente y su persistencia. En este paso, trátalo como límite protegido: los issues documentales o del frontend no autorizan cambios de lógica backend.
- Conserva los contratos v1.0; usa `docs/api/openapi.yaml`, `docs/architecture/DATA_MODEL.md` y `docs/architecture/ARCHITECTURE.md` como fuentes compartidas.
- Usa Java 21 y Spring Boot.
- Conserva las capas `controller -> service -> repository`; los controllers no contienen lógica de negocio.
- Valida entradas con Bean Validation.
- Alinea el sobre de error con `docs/api/openapi.yaml` v1.0.
- Lee el origen CORS desde `FRONTEND_ORIGIN`.
- No hardcodees orígenes CORS ni credenciales.
- No registres en logs los campos personales `nombre`, `email` ni `mensaje`.
- No modifiques `docs/api/openapi.yaml` sin detenerte y avisar.
- No amplíes el alcance con exclusiones del MVP. Un cambio backend requiere el issue posterior correspondiente o una decisión de alcance explícita.
- No inventes rutas, enums, límites, configuración ni comportamiento que no estén confirmados por los contratos o decisiones aceptadas.

## Comando previsto

Pendiente hasta inicializar `backend/pom.xml`; no se puede ejecutar todavía:
- `./mvnw test`
