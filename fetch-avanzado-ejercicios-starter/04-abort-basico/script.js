// 04 — AbortController básico (cancelar una solicitud lenta)
// Objetivo: cancelar un fetch largo manualmente y mostrar un mensaje claro si es AbortError.
// API: https://httpbin.org/delay/10  (responde tras ~10s)

import { $, el, toast } from "../utils/helpers.js";

const app = document.currentScript.closest('body').querySelector('.card');
const btn = el('button', { id:"cancelar" }, "Cancelar");
app.appendChild(btn);

async function pedir(){
  const controller = new AbortController();
  const signal = controller.signal;
  // TODO: lanzá el fetch con { signal } y, al click de "Cancelar", llamá controller.abort().
  // En el catch, si e.name === "AbortError", mostr&aacute; un toast amigable.
}

pedir();