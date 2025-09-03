// 05 — Fetch: POST JSON
// Objetivo: enviar JSON en el body y leer la respuesta creada (JSONPlaceholder crea un id falso).
// Tarea: POST a https://jsonplaceholder.typicode.com/posts con { title, body, userId } y renderizar el id devuelto.

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function crear(){
  // TODO: fetch(url, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({...}) })
}
crear();