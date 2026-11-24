# Verificación de proyectos y textos publicables — Issue #5

Revisión realizada el **2026-11-23** para cerrar D-04a/D-04b. La visibilidad se comprobó en GitHub mediante el campo de visibilidad del repositorio; cada destino de repositorio que se autoriza abajo resuelve a un proyecto concreto de la cuenta `Alberto-Zompantzi`.

## Vía verificable y decisión de enlace

| Proyecto | Evidencia observada | Vía verificable | Decisión de enlace público |
| --- | --- | --- | --- |
| Tzompcomer | [`Alberto-Zompantzi/Tzompcomer`](https://github.com/Alberto-Zompantzi/Tzompcomer), GitHub `visibility=public` | Repositorio público; el Brief también registra `https://tzompcomer.pages.dev/` como producción | Publicar enlace al repositorio y a la URL de producción ya declarada. No enlazar backend. |
| MediFlow | [`Alberto-Zompantzi/MediFlow`](https://github.com/Alberto-Zompantzi/MediFlow), GitHub `visibility=public` | Repositorio público | Publicar enlace al repositorio. No hay URL de producción confirmada; omitirla. No enlazar hosts, APIs ni servicios internos. |
| DivertiKids | [`Alberto-Zompantzi/divertikids-frontend`](https://github.com/Alberto-Zompantzi/divertikids-frontend), GitHub `visibility=public` | Repositorio público de frontend | Publicar solo el enlace al repositorio frontend. No enlazar el repositorio backend ni una URL de producción no confirmada. |
| Casa Zompantzi | [`Alberto-Zompantzi/Casa--Zompantzi`](https://github.com/Alberto-Zompantzi/Casa--Zompantzi), GitHub `visibility=public` | Repositorio público | Publicar enlace al repositorio. No hay URL de producción confirmada; omitirla. |
| Sunnyside Boutique | [`Alberto-Zompantzi/Sunnyside`](https://github.com/Alberto-Zompantzi/Sunnyside), GitHub `visibility=public` | Repositorio público | Publicar enlace al repositorio. No hay URL de producción confirmada; omitirla. |
| Automatización n8n | Texto de presentación local revisado; el `.json` de workflow no está presente en `Información faltante/` | Descripción de alto nivel y captura sanitizada; no se publica código | No publicar enlace a repositorio, workflow, URL externa ni servicios internos. |

Los repositorios de cada proyecto aparecieron con visibilidad `public` en la consulta. La revisión no afirma que sus ramas o despliegues estén libres de contenido sensible; este registro decide qué destinos puede mostrar el portafolio y mantiene los enlaces fuera del alcance excluidos.

## Texto de MediFlow revisado

**ES:** MediFlow es un prototipo que procesa documentos y ayuda a organizar la información extraída para su revisión por una persona. La solución separa la interfaz, el procesamiento del servicio y la asistencia de IA; las decisiones que requieren validación permanecen sujetas a revisión humana.

**EN:** MediFlow is a prototype that processes documents and helps organize extracted information for human review. The solution separates the interface, service processing, and AI assistance; decisions that require validation remain subject to human review.

La copia omite nombres de pacientes, profesionales, equipos y organizaciones; ejemplos clínicos; endpoints y nombres de campos internos; hosts, rutas, identificadores, almacenamiento y detalles de despliegue; credenciales; así como parámetros operativos que no hacen falta para describir el proyecto. No incluye resultados numéricos ni atribuye uso en producción.

## Texto de Automatización n8n revisado

**ES:** Flujo personal de apoyo editorial que recopila noticias de tecnología, prepara resúmenes y borradores para una publicación, y deja la decisión de publicar bajo control humano.

**EN:** A personal editorial workflow that gathers technology news, prepares summaries and draft posts, and keeps the publishing decision under human control.

La copia omite cuentas, direcciones de correo, URLs de webhooks, IDs, prompts, payloads y detalles de configuración. También omite el ahorro de tiempo y la frecuencia declarados en el borrador porque no se corroboran con el workflow. El `.json` no está en el checkout, por lo que no se afirman disparadores, integraciones ni tecnologías concretas a partir de él. No se publica código, repositorio ni enlace externo, de acuerdo con el Brief.

## Límites de esta comprobación

- Se comprobó visibilidad pública de repositorios; no se revisó la totalidad de su historial ni se certificó su contenido.
- La decisión de producción de cada proyecto se limita a las URLs confirmadas en el Brief. No se infieren dominios a partir de nombres de proyecto.
- Los textos anteriores son las únicas copias autorizadas por esta revisión. Los insumos locales sin sanitizar no deben copiarse al código, a documentación pública ni a logs.
- Para n8n, el archivo `.json` de origen no estaba disponible. Cualquier afirmación sobre el comportamiento exacto del flujo, integraciones o stack requiere contrastar ese insumo antes de ampliarse.
