// 09 — Status HTTP y manejo de errores (404/500)
// Objetivo: practicar cómo responder ante status no exitosos.
// Tarea: hacé GET a una ruta que 404ea (p. ej. https://jsonplaceholder.typicode.com/esto-no-existe)
//        - Detectá !response.ok y construí un mensaje claro para el usuario
//        - Mostrá status y (si hay) cuerpo de error

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function probar404(){
  // TODO
}

probar404();