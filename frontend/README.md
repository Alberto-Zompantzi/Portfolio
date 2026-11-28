# Frontend

El sitio usa Next.js App Router con exportación estática. Para instalar dependencias y generar los archivos:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm build
pnpm typecheck
```

Cloudflare Pages conectado a este monorepo: directorio raíz `frontend`, comando de build `pnpm build` y directorio de salida `out` (declarado también en `wrangler.jsonc`). El build comprueba que `/` y `/en/` existan como `index.html` con idioma y contenido localizados; no requiere runtime de Next.js.

Esta exportación no incluye APIs de servidor ni middleware dinámico de Next.js. Las imágenes deben conservar `images.unoptimized: true` para no depender del optimizador de imágenes con runtime.

## API de contacto

`NEXT_PUBLIC_API_BASE_URL` se incorpora al JavaScript público durante el build. El valor de desarrollo en `.env.example` apunta a `http://localhost:8080`. Para producción, la URL actualmente prevista es `https://portfolio-backend-bjsa.onrender.com`; pertenece a la cuenta Render del backend legado y es temporal. Al migrar el backend a la otra cuenta, reemplaza esa variable en la configuración de build de Cloudflare Pages y vuelve a desplegar.

El backend legado responde en salud, pero su respuesta CORS observada permite `*` para cualquier origen. No cumple la allowlist requerida por este proyecto hasta que el servicio desplegado use `FRONTEND_ORIGIN`.
