# ADR-0006: Fuente canónica del backend y URL temporal de Render

- **Estado:** Aceptado
- **Fecha:** 2026-11-28
- **Issue:** #57

## Contexto

La arquitectura v1.0 asigna la API y su persistencia a `backend/`, y ADR-0004 exige una allowlist CORS externalizada mediante `FRONTEND_ORIGIN`. El servicio que actualmente responde en Render (`https://portfolio-backend-bjsa.onrender.com`) está conectado al repositorio legado `portfolio-backend`; su controlador conserva `@CrossOrigin(origins = "*")` y el preflight público responde `Access-Control-Allow-Origin: *` incluso para orígenes ajenos. El código canónico en este monorepo ya implementa el contrato CORS, pero la configuración de `application.yml` debe mantener `spring.datasource` bajo `spring` para que la aplicación pueda iniciar.

El propietario confirmó que el servicio Render actual seguirá siendo temporal hasta migrar el backend a otra cuenta. La URL pública puede cambiar en esa migración; no se conoce ni se registra un destino futuro.

## Decisiones

1. **Fuente canónica:** `backend/` dentro del repositorio `Portfolio` es la única fuente de verdad para el backend. El servicio Render existente se reconfigurará para desplegar desde el repositorio `Portfolio`, raíz `backend/`; no se mantendrá una copia de código backend independiente como fuente de producción.
2. **Continuidad del servicio:** conservar el host temporal actual y la configuración de persistencia existente al cambiar el origen de build. No migrar ni modificar la base de datos en este trabajo. Si Render no permite conservar el host o la persistencia al cambiar de fuente, detener el cambio y registrar el impedimento en #57 antes de crear otro servicio.
3. **CORS:** `FRONTEND_ORIGIN` debe contener el origen exacto de Pages `https://albertozompantzi-portfolio.pages.dev`. No se admite wildcard ni lista abierta de orígenes. El preflight permitido debe incluir ese origen exacto; un origen no listado debe ser rechazado sin `Access-Control-Allow-Origin`.
4. **URL temporal en frontend:** `NEXT_PUBLIC_API_BASE_URL` es una variable pública de build, no un secreto. Para producción apunta temporalmente a `https://portfolio-backend-bjsa.onrender.com`; `.env.example` conserva `http://localhost:8080` para desarrollo local. La URL temporal no se copia al código del formulario.
5. **Migración de cuenta:** cuando el servicio pase a otra cuenta Render, actualizar la configuración de `FRONTEND_ORIGIN` y, si el host cambia, `NEXT_PUBLIC_API_BASE_URL`; reconstruir y desplegar Pages. No cambiar rutas, payload, modelo de datos ni lógica de negocio por el cambio de cuenta.

## Verificación requerida antes de activar Pages

- Confirmar salud HTTP 200 del servicio tras cambiar su fuente de build.
- Enviar preflight `OPTIONS` con `Origin: https://albertozompantzi-portfolio.pages.dev` y verificar la respuesta allowlist.
- Repetir con un origen de prueba no listado y verificar el rechazo.
- Mantener la prueba de envío válido con datos sintéticos y persistencia aislada; no crear registros ficticios en la base de producción.
- Configurar `NEXT_PUBLIC_API_BASE_URL` en Pages solo después de que los checks CORS pasen.

## Consecuencias

- `backend/` permanece como la única fuente de verdad de API y persistencia, conforme a `AGENTS.md` y `ARCHITECTURE.md` v1.0.
- El host de Render actual es un dato operacional temporal confirmado por el propietario, no un contrato de API ni un valor codificado en la interfaz.
- El despliegue queda bloqueado si no se puede preservar el endpoint público o la configuración de persistencia al cambiar el origen del build.
- Esta decisión no modifica contratos congelados ni las respuestas OpenAPI v1.0.
