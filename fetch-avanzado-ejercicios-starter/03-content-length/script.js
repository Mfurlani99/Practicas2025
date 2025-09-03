// 03 — Content-Length: detectar y adaptar el progreso
// Objetivo: comparar 2 URLs: una con Content-Length y otra sin, y adaptar el cálculo del %.
// Sugerencias de prueba:
//  - Con longitud (probable): https://api.github.com/rate_limit
//  - Sin longitud (chunked): https://httpbin.org/stream/20

import { el } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function probar(url){
  // TODO:
  // - fetch(url), leer headers.get("Content-Length")
  // - mostrar si existe y su valor
  // - leer el stream sumando bytes y, si no hay total, explicá al usuario el modo "indeterminado"
}

async function main(){
  // TODO: llamá a probar() con ambas URLs
}

main();