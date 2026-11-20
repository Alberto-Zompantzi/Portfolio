# Reglas de backend

- Usa Java 21 y Spring Boot.
- Conserva las capas `controller -> service -> repository`; los controllers no contienen lógica de negocio.
- Valida entradas con Bean Validation.
- Alinea el sobre de error con `docs/api/openapi.yaml` v1.0.
- Lee el origen CORS desde `FRONTEND_ORIGIN`.
- No hardcodees orígenes CORS ni credenciales.
- No registres en logs los campos personales `nombre`, `email` ni `mensaje`.
- No modifiques `docs/api/openapi.yaml` sin detenerte y avisar.

## Comando previsto

Pendiente hasta inicializar `backend/pom.xml`; no se puede ejecutar todavía:
- `./mvnw test`
