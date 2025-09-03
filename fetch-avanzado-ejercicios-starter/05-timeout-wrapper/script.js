// 05 — Implementá fetchWithTimeout(url, {ms})
// Objetivo: crear un helper que aborte automáticamente si la respuesta demora demasiado.
// API de prueba: https://httpbin.org/delay/5
// Tip: AbortController + setTimeout(() => abort())

import { el } from "../utils/helpers.js";
import { fetchWithTimeout } from "../utils/abortable.js";

const app = document.currentScript.closest('body').querySelector('.card');

async function demo(){
  // TODO: usá fetchWithTimeout("https://httpbin.org/delay/5", { ms: 2000 }) y mostrá el resultado o el error por timeout.
}
demo();