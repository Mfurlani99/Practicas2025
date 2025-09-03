# Promesas y manejo asíncrono — Ejercicios (Starter)

Diez ejercicios pensados para practicar **Promesas**, **encadenamiento**, **manejo de errores**, **Promise API** (`all`, `allSettled`, `race`, `any`), **promisificación** y **async/await**. Podés correrlos solo abriendo cada `index.html` en tu navegador. Sin dependencias.

> Tip: abrí la consola (F12) para ver la salida. Editá `script.js` en cada carpeta.

## Estructura

- `utils/` utilidades compartidas
  - `delay.js`: `delay(ms)` devuelve una Promesa que resuelve en `ms` (promisificación de `setTimeout`).
  - `fakeApi.js`: `fakeFetch(...)`, `getTodos(...)` y helpers para simular una API.
- `01-*` a `10-*`: cada ejercicio con `index.html` + `script.js` con TODOs.

## Cómo usar
1. Descargá y descomprimí el zip.
2. Abrí, por ejemplo, `01-estados-promesa/index.html` y leé las TODOs de `script.js`.
3. Resolvé los TODOs y refrescá el navegador para probar.
4. Repetí con el resto.

## Notas
- Los ejercicios están **sin resolver** (solo consignas + TODOs).
- Si querés usar APIs reales, usá el modo `USE_REAL_API = true` del ejercicio 10 y asegurate de tener conexión.
- Podés convertir cualquier ejercicio a Node.js importando los módulos vía `node --experimental-modules` o usando un bundler, pero están pensados para navegador por simplicidad.