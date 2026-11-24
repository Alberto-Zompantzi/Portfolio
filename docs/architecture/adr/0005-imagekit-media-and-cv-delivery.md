# ADR-0005: ImageKit como proveedor único de medios y CV

- **Estado:** Aceptado
- **Fecha:** 2026-11-23
- **Decidido por:** Alberto Zompantzi
- **Supersede:** ADR-0003 para todos los medios y CV

## Contexto

El portafolio requiere URLs públicas HTTPS para imágenes sanitizadas, identidad visual, imágenes Open Graph y los CV de ES/EN. D-02 conserva los originales fuera de Git; la política de medios prohíbe publicar originales crudos y binarios no exentos dentro del repositorio.

Alberto ya utiliza ImageKit y confirma que será el único proveedor para todos los medios y CV. Cloudflare R2 deja de formar parte de la arquitectura del portafolio. ADR-0003 se conserva como historial de la decisión anterior y queda supersedido por este ADR.

## Decisión

Utilizar **ImageKit Media Library y su CDN** como único servicio externo de almacenamiento y entrega de medios y CV. El frontend consumirá exclusivamente URLs públicas HTTPS; no incorporará claves de ImageKit ni permitirá subidas desde el navegador.

Los archivos se mantienen en `Portfolio/` en ImageKit. Solo se publican derivados sanitizados. Cuando el contrato de consumo requiera un MIME fijo, se desactiva la negociación automática o se fija el formato en la URL y se verifica la respuesta HTTP; no se infiere el MIME solo por la extensión.

El inventario de URLs verificadas está en [`docs/product/MEDIA_ASSETS.md`](../../product/MEDIA_ASSETS.md). La URL del mismo PDF de CV se usa en las rutas ES y EN por confirmación del propietario; el PDF contiene texto seleccionable. La URL de MediFlow fija salida PNG porque la optimización automática de ImageKit entregaba JPEG en la URL original.

## Consecuencias

- **Positivas:** se reutiliza una cuenta ya disponible, se suben activos desde la Media Library y se centralizan la entrega HTTPS, la optimización y las URLs. No se requiere un bucket ni configuración de Cloudflare R2.
- **Límites:** el plan gratuito de ImageKit publica actualmente 3 GB de almacenamiento y 20 GB de transferencia al mes; al alcanzar el límite mensual gratuito, la entrega se detiene. Revisar los límites vigentes y el consumo antes de producción. [Planes de ImageKit](https://imagekit.io/plans/)
- **Integridad de contenido:** transformaciones o ajustes de negociación de formato pueden modificar el MIME entregado. Las URLs que requieran MIME estable deben forzar el formato, y la respuesta pública debe verificarse con HTTP 200 y `Content-Type` esperado. [Optimización de imágenes de ImageKit](https://imagekit.io/docs/image-optimization)
- **Privacidad:** solo se publican archivos visuales aprobados y sanitizados y el CV confirmado por Alberto. No se suben los originales crudos ni claves privadas.
- **D-03:** proveedor seleccionado y todos los activos requeridos (capturas sanitizadas, logo y foto de perfil) publicados y registrados con URLs HTTPS y MIME verificados en `docs/product/MEDIA_ASSETS.md`.
- **D-06:** ubicación ImageKit y texto seleccionable del CV verificados; el mismo documento se asigna a ES y EN por confirmación de Alberto.

## Verificación reproducible

- Solicitar las URLs públicas sin autenticación mediante HTTPS.
- Confirmar HTTP 200 y `Content-Type` para cada objeto.
- Confirmar que el PDF tiene texto seleccionable mediante extracción de texto.
- Confirmar que los originales y derivados no están versionados en Git.
