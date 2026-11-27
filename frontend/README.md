# Frontend

El sitio usa Next.js App Router con exportación estática. Para instalar dependencias y generar los archivos:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Cloudflare Pages: comando de build `pnpm build`, directorio de salida `out`. La salida incluye `/` y `/en/` como directorios con `index.html`; no requiere runtime de Next.js.
