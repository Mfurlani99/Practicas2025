# Manejo avanzado de fetch y conectividad — 10 ejercicios prácticos (starter)

Entrenás **Streams + progreso**, **AbortController (cancelar/timeout/múltiples)**, **CORS (simple vs preflight)** y **URL/searchParams** con **APIs públicas**.

## Cómo usar
1) Descomprimí el ZIP.
2) Abrí cualquier carpeta `01-...` y ejecutá `index.html` en tu navegador.
3) Abrí la consola (F12) para ver el detalle de requests y errores.
4) Completá los **TODOs** en cada `script.js`.

## APIs públicas usadas
- https://httpbin.org (streams, delay, anything)
- https://api.github.com/rate_limit (header/content-length de ejemplo)
- https://api.agify.io, https://api.genderize.io, https://api.nationalize.io

> Tip: Si alguna request es bloqueada por CORS, revisá Network (OPTIONS/headers). Probá desde un servidor local (p. ej. `npx serve`) en lugar de abrir `file://`.