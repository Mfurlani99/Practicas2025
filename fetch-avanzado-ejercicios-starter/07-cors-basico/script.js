// 07 — CORS en la práctica: un ejemplo bloqueado y uno permitido
// Objetivo: evidenciar la diferencia entre una respuesta bloqueada por CORS y otra permitida.
// Prueba sugerida:
//   - Bloqueado (probable): fetch("https://www.google.com/robots.txt")
//   - Permitido: fetch("https://api.github.com/rate_limit")

import { el } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');

async function comparar(){
  // TODO:
  // - Intentá ambos fetch en un try/catch separado
  // - Si falla por CORS, el error suele ser TypeError (sin acceso a la respuesta)
  // - Si funciona, mostrá status y algunos headers como 'content-type' o 'access-control-allow-origin'
}
comparar();