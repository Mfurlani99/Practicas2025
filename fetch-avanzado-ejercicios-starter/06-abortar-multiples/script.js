// 06 — Un solo AbortController para abortar varias solicitudes
// Objetivo: disparar 2 o 3 fetch en paralelo y cancelarlos a todos con un único abort().
// APIs: https://httpbin.org/delay/8 y https://httpbin.org/delay/10

import { el } from "../utils/helpers.js";

const app = document.currentScript.closest('body').querySelector('.card');

async function main(){
  // TODO:
  // 1) crear controller y pasar su signal a varios fetch()
  // 2) después de 3s, llamar controller.abort()
  // 3) loguear qué ocurrió en cada promesa (AbortError)
}
main();