// 06 — FormData: construir, iterar y (opcional) enviar
// Objetivo: armar FormData desde un formulario, recorrer entries/keys/values y opcionalmente enviarlo.
// Tareas:
//  1) Capturá el submit del form, creá new FormData(form) y listá sus entries en un <pre>.
//  2) (Opcional) Intentá POST a https://httpbin.org/post para ver eco del formulario (puede requerir CORS).
//  3) Alternativa segura: convertir FormData a JSON y POST a JSONPlaceholder.

import { $, el, pretty } from "../utils/helpers.js";
const app = document.currentScript.closest('body').querySelector('.card');
const form = document.getElementById("f");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(form);

  // TODO: iterar fd.entries(), fd.keys(), fd.values() y mostrar resultados
  // const obj = Object.fromEntries(fd.entries());
  // console.log(obj);

  // TODO (opcional): POST con fetch a httpbin.org/post (si CORS lo permite)
  // try { const res = await fetch("https://httpbin.org/post", { method:"POST", body: fd }); console.log(await res.json()); } catch(e){ console.warn("CORS bloqueó el envío", e); }
});