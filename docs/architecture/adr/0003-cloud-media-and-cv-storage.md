# ADR-0003: Propuesta de Almacenamiento Externo en Nube para Medios y CVs (`D-03` y `D-06`)

- **Estado:** Aceptado (proveedor aprobado; aprovisionamiento de bucket y validación de URLs para D-03 y D-06 permanecen PENDIENTE)
- **Fecha:** 2026-11-19
- **Decidido por:** Alberto Zompantzi

## Contexto

La política de medios (`MediaPolicy`, `HU-01`, `HU-03`, `RISKS.md` R-04/R-05) prohíbe alojar binarios no exentos e insumos crudos dentro del repositorio Git (`0` archivos en `frontend/public/imagenes/`) y exige URLs externas HTTPS públicas y estables para todas las capturas sanitizadas de proyectos (`D-03`, `PENDIENTE`) y para los archivos PDF de CV en español (`/`) e inglés (`/en`) con texto seleccionable (`D-06`, `PENDIENTE`), manteniendo un costo operativo de `$0 USD/mes` (`SUPUESTO`).

## Opciones evaluadas

| Opción                               | Pros                                                                                                                                                                                                                                                                                | Contras                                                                                                                                                                                               |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cloudflare R2 (bucket público)**   | Capa gratuita (`SUPUESTO`: hasta $10\text{ GB}$ de almacenamiento y operaciones mensuales sin cargo por transferencia/_egress_); unifica proveedor con Cloudflare Pages; URLs públicas HTTPS sin suspensión por inactividad; control directo de `Content-Type` para PNG/WebP y PDF. | Requiere configurar manualmente el acceso público de lectura del bucket (`r2.dev` o dominio propio) y optimizar/sanitizar localmente cada archivo antes de subirlo; sujeto a cuotas de capa gratuita. |
| **Cloudinary (capa gratuita)**       | Optimización automática de imágenes y subida directa vía panel web; capa gratuita suficiente para portafolio.                                                                                                                                                                       | La entrega directa de archivos PDF (`raw`) requiere configurar permisos públicos específicos; separa los activos en un segundo proveedor.                                                             |
| **Supabase Storage (capa gratuita)** | API familiar en proyectos fullstack.                                                                                                                                                                                                                                                | Cuota gratuita más acotada ($1\text{ GB}$) y riesgo de pausa automática del proyecto gratuito tras inactividad, comprometiendo la disponibilidad HTTP `200` (`HU-10` punto 5).                        |

## Decisión

Utilizar **Cloudflare R2** (bucket público con URLs HTTPS estáticas registradas en frontend/src/config/media.ts) como proveedor externo para alojar tanto las capturas sanitizadas de proyectos (D-03) como ambos archivos PDF de CV en español e inglés con texto seleccionable (D-06). **Cloudinary** queda documentado únicamente como alternativa evaluada en caso de contingencia, sin mecanismo activo de conmutación automática. Ambos desbloqueos (D-03 y D-06) permanecen PENDIENTE hasta completar el aprovisionamiento, la subida de archivos y la verificación HTTP 200 de sus URLs finales.

## Consecuencias

- **Positivas:** Mantiene el repositorio Git ligero y libre de binarios no exentos (`MediaPolicy`); unifica la infraestructura estática bajo Cloudflare; opera a `$0 USD/mes` (`SUPUESTO` válido mientras el almacenamiento total se mantenga $\le 10\text{ GB}$ y las solicitudes mensuales dentro de las cuotas gratuitas de R2; si se excedieran, se deberá auditar el peso de activos o migrar a la alternativa evaluada).
- **Negativas / Compromisos:** Exige habilitar acceso público de lectura en el bucket, garantizar cabeceras `Content-Type` correctas (`image/png`, `image/webp`, `application/pdf`), sanitizar manualmente las capturas antes de subirlas y validar que el $100\%$ de las URLs registradas en `frontend/src/config/media.ts` y los enlaces de CV respondan HTTP `200` en navegación anónima (`HU-10` puntos 2 y 5 — `PENDIENTE` de ejecución).
