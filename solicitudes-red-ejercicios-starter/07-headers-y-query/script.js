// 07 — Headers y query params
// Objetivo: armar una URL con query string y enviar headers personalizados cuando tenga sentido.
// Tarea:
//  1) Usá https://api.agify.io?name=matias y mostr&aacute; age, count.
//  2) Creá una función buildUrl(base, params) para armar querys.
//  3) Mostrá cómo leer un header de la respuesta (si el servidor expone alguno).

import { el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

function buildUrl(base, params){
  // TODO: retornar base + "?" + new URLSearchParams(params)
}

async function main(){
  // TODO: fetch con la URL armada
}
main();