# Inventario de medios públicos

Fuente documental temporal para las URLs externas verificadas hasta que los tickets de frontend las registren en `frontend/src/config/media.ts`. Solo contiene referencias públicas; los binarios permanecen en ImageKit y no se guardan en Git.

## Capturas de proyectos (D-03)

| Activo | URL pública verificada | Content-Type | Respuesta |
| --- | --- | --- | --- |
| MediFlow | [PNG fijo en ImageKit](https://ik.imagekit.io/seefqe4nn/Portfolio/Mediflow.png?tr=f-png&updatedAt=1795494088794) | `image/png` | HTTP 200 |
| Automatización LinkedIn | [JPG en ImageKit](https://ik.imagekit.io/seefqe4nn/Portfolio/automatizaci%C3%B3n%20presencial%20LinkedIn.jpg?updatedAt=1795494087541) | `image/jpeg` | HTTP 200 |

ImageKit entregó la URL original de MediFlow como `image/jpeg` por optimización automática. La URL documentada fuerza `f-png`; la respuesta comprobada es `image/png`. Si se cambia la URL o su configuración, repetir la comprobación de estado y MIME.

## CV (D-06)

| Idioma | URL pública verificada | Content-Type | Verificación |
| --- | --- | --- | --- |
| Español | [CV PDF en ImageKit](https://ik.imagekit.io/seefqe4nn/Portfolio/CV%20Alberto%20Zompantzi%20Full%20Stack.pdf) | `application/pdf` | HTTP 200; PDF de una página con texto seleccionable |
| Inglés | [Mismo PDF, según confirmación del propietario](https://ik.imagekit.io/seefqe4nn/Portfolio/CV%20Alberto%20Zompantzi%20Full%20Stack.pdf) | `application/pdf` | HTTP 200; PDF de una página con texto seleccionable |

El uso del mismo archivo para ambas rutas fue confirmado por Alberto. No se deduce un CV inglés distinto ni se publica una segunda URL no confirmada.

## Identidad visual (D-03)

| Activo | URL pública verificada | Content-Type | Respuesta |
| --- | --- | --- | --- |
| Logo | [WebP en ImageKit](https://ik.imagekit.io/seefqe4nn/Portfolio/Logo.webp?tr=f-webp) | `image/webp` | HTTP 200 |
| Foto de perfil | [JPEG en ImageKit](https://ik.imagekit.io/seefqe4nn/Portfolio/profilephoto.jpeg) | `image/jpeg` | HTTP 200 |

La URL original del logo respondió como `image/jpeg` pese a la extensión `.webp`; la URL documentada fuerza el formato `f-webp` y se verificó como `image/webp`. Repetir la comprobación de estado y MIME si cambia la URL o su configuración.
