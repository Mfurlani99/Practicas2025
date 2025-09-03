// 02 — XMLHttpRequest: GET básico (eventos y readyState)
// Objetivo: practicar XHR, estados y parsing manual de JSON.
// Tarea:
//  1) Con XHR (no fetch), pedí https://jsonplaceholder.typicode.com/users?_limit=3
//  2) Cuando readyState == 4:
//     - si status == 200: parseá responseText como JSON y mostralo
//     - si no: logueá un error claro.
//  3) Renderizá una listita de nombres en el DOM.

import { $, el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

function cargarUsuarios(){
  // TODO: creá el XHR, open("GET", url, true), onreadystatechange, send()
}

cargarUsuarios();