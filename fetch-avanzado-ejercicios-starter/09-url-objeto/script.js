// 09 — Objeto URL: construir y modificar URLs con searchParams
// Objetivo: crear una función buildURL(base, params) usando URL y URLSearchParams.
// Ejemplo de uso con API pública: https://api.agify.io?name=matias

import { el } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

function buildURL(base, params){
  // TODO: crear new URL(base) y setear params con url.searchParams.set(k, v)
}

async function demo(){
  // TODO: usá buildURL("https://api.agify.io", { name: "matias" }), hacé fetch y mostr&aacute; el JSON
}
demo();