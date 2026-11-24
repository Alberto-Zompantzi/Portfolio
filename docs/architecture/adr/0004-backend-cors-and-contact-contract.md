# ADR-0004: CORS del backend y contrato de contacto

- **Estado:** Aceptado
- **Fecha:** 2026-11-19

## Contexto

PRD HU-05 5.3a/5.3b exige aceptar únicamente el origen CORS configurado mediante variable de entorno y rechazar orígenes no listados. ROADMAP Won't 17 excluye modificar la lógica de negocio o persistencia de `backend/`, y permite configurar los orígenes permitidos por variable. La inspección del backend muestra `@CrossOrigin(origins = "*")` en `ContactoController`, un DTO con `nombre`, `email`, `asunto` y `mensaje`, y una entidad `Contacto` que serializa el campo `asunto`, aunque el DTO no lo exige con `@NotBlank`.

## Decisiones vinculantes para Bloque A

### 1. CORS externalizado en backend/

Se sustituirá el wildcard actual `@CrossOrigin(origins = "*")` por configuración externalizada mediante `FRONTEND_ORIGIN` (por ejemplo, `${FRONTEND_ORIGIN}` en `application.yml` y `@CrossOrigin(origins = "${FRONTEND_ORIGIN}")`). El backend aceptará únicamente el origen configurado y rechazará orígenes no listados. El cambio se limita a configuración CORS; no se alterarán el controlador, la entidad `Contacto`, la lógica de negocio ni la persistencia. Esta decisión reconcilia PRD HU-05 5.3a/5.3b con ROADMAP Won't 17.

### 2. Payload `ContactSubmission`

El frontend enviará únicamente `{ "nombre": string, "email": string, "mensaje": string }` a `POST /api/v1/contactos`. Omitirá `asunto`, que es opcional y carece de `@NotBlank` en `ContactoDTO`. `honeypot` y `locale` son datos locales del cliente y no se envían.

### Estado observado de implementación (revisión D-05)

La inspección del backend local confirma el contrato del DTO y la respuesta `201 Created` descritos en `docs/api/openapi.yaml`. La decisión CORS de la sección 1 todavía no está aplicada: `ContactoController` conserva `@CrossOrigin(origins = "*")` y `application.yml` no define `FRONTEND_ORIGIN`. Este registro describe el estado actual; cerrar D-05 no cambia ni declara implementada la configuración CORS, que requiere el trabajo de configuración previsto por este ADR.

## Consecuencias

- El contrato de envío del frontend queda explícito y no requiere añadir o modificar lógica de negocio ni persistencia.
- El origen permitido queda limitado a la configuración del entorno del backend y los orígenes no listados se rechazan.
- `FRONTEND_ORIGIN` debe configurarse en el entorno del backend antes de probar producción; Preview y producción deben usar el origen correspondiente.
- HU-10 punto 8 verifica el envío real y CORS contra el dominio final de producción.
- La respuesta `201 Created` continúa serializando la entidad `Contacto`; `asunto` aparece como `null` cuando el request lo omite.
