// 01 — HTTP: anatomía de petición y respuesta
// Objetivo: ver en la práctica método, URL, cabeceras y cuerpo de petición; y status, cabeceras y cuerpo de respuesta.
// Tarea:
//  1) Hacé un fetch GET a https://jsonplaceholder.typicode.com/posts?_limit=1
//  2) Imprimí en consola:
//     - request: método y URL (podés leerlos del código y verificar en la pestaña Network de DevTools)
//     - response: status, cabeceras seleccionadas (content-type) y el body (JSON).
//  3) En el DOM mostr&aacute; el status y el primer título.
// Tips: response.ok, response.status, response.headers.get('content-type'), await response.json().
// No resuelvas acá: dejé TODOs para que lo hagas vos.

import { $, el, pretty } from "../utils/helpers.js";

const app = document.currentScript.closest('body').querySelector('.card');

async function main(){
  // TODO: implementá el fetch y el render.
  // const url = "https://jsonplaceholder.typicode.com/posts?_limit=1";
  // const res = await fetch(url);
  // const data = await res.json();
  // console.log({ method:"GET", url });
  // console.log({ status: res.status, contentType: res.headers.get("content-type"), body: data });
  // app.appendChild(el('pre', {}, pretty(data)));
}
main();