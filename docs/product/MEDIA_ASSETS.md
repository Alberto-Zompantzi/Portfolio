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

## Pendientes de D-03

| Activo | Estado |
| --- | --- |
| Logo | Pendiente de confirmar archivo/ruta y URL pública ImageKit |
| Foto de perfil | Pendiente de confirmar disponibilidad y URL pública ImageKit |
