// 03 — XHR: POST JSON
// Objetivo: enviar un cuerpo JSON y leer la respuesta.
// Tarea:
//  1) Con XHR, hacé POST a https://jsonplaceholder.typicode.com/posts
//  2) Enviá body: { title, body, userId } (JSON.stringify) y headers Content-Type: application/json
//  3) Imprimí status y el JSON devuelto.

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

function crearPost(){
  // TODO: XHR POST con setRequestHeader("Content-Type","application/json")
}

crearPost();