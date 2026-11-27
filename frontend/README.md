# Frontend

El sitio usa Next.js App Router con exportación estática. Para instalar dependencias y generar los archivos:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm build
pnpm typecheck
```

Cloudflare Pages: comando de build `pnpm build`, directorio de salida `out`. La salida incluye `/` y `/en/` como directorios con `index.html`; no requiere runtime de Next.js.

Esta exportación no incluye APIs de servidor ni middleware dinámico de Next.js. Las imágenes deben conservar `images.unoptimized: true` para no depender del optimizador de imágenes con runtime.
