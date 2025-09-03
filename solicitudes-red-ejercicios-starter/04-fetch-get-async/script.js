// 04 — Fetch + async/await: GET con chequeo de errores
// Objetivo: usar response.ok / status y parsear JSON.
// Tarea: pedí https://jsonplaceholder.typicode.com/todos?_limit=5 y mostrá la lista.
// Si !ok, tirá Error con el status. Capturá y mostrá un mensaje amable.

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function cargarTodos(){
  // TODO
  // try {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  //   if(!res.ok) throw new Error("HTTP " + res.status);
  //   const data = await res.json();
  //   app.appendChild(el('pre', {}, pretty(data)));
  // } catch (e) {
  //   app.appendChild(el('p', {class:"small"}, "Error: " + e.message));
  // }
}
cargarTodos();