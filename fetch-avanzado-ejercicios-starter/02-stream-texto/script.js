// 02 — Leer un stream de texto línea a línea (NDJSON/chunked)
// Objetivo: practicar TextDecoder para transformar chunks a string y procesar líneas.
// API: https://httpbin.org/stream/20  (20 objetos JSON en streaming)

import { el } from "../utils/helpers.js";

const app = document.currentScript.closest('body').querySelector('.card');
const list = el('ul'); app.appendChild(list);

async function leerLineas(){
  const url = "https://httpbin.org/stream/20";
  // TODO:
  // 1) fetch(url) y obtener reader = res.body.getReader()
  // 2) Usar TextDecoder para acumular texto y dividir por 
 cuando haya líneas completas
  // 3) Por cada línea válida en JSON, renderizar un <li> con algún campo de la línea
}
leerLineas();