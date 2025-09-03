// 08 — Múltiples solicitudes en paralelo con Promise.all
// Objetivo: disparar varias requests al mismo tiempo y combinar los resultados.
// Tarea: para un nombre, pedí en paralelo a agify.io, genderize.io y nationalize.io y mostr&aacute; un resumen.

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function estimar(nombre){
  // TODO: Promise.all sobre 3 fetch en paralelo
}

estimar("matias");