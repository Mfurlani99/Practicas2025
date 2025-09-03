// 10 — Mini buscador de nombres: agify + genderize + nationalize
// Objetivo: combinar todo: construir URLs con URL/searchParams, disparar 3 fetch en paralelo,
// permitir cancelar con AbortController y aplicar un timeout de seguridad.
// APIs: https://api.agify.io, https://api.genderize.io, https://api.nationalize.io

import { $, el, sleep } from "../utils/helpers.js";
import { makeSharedController, fetchWithTimeout } from "../utils/abortable.js";

const app = document.currentScript.closest('body').querySelector('.card');
const form = el('form', { class:"grid cols-2" }, [
  el('label', {}, ["Nombre", el('input', { name:"q", required:true, placeholder:"ej: matias" })]),
  el('div', {}, [ el('button', { type:"submit" }, "Buscar"), el('button', { type:"button", id:"cancelar", style:"margin-left:8px" }, "Cancelar") ]),
]);
const out = el('pre');
app.appendChild(form); app.appendChild(out);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = new FormData(form).get("q");
  out.textContent = "Buscando...
";
  // TODO:
  // 1) crear un controller compartido (makeSharedController())
  // 2) construir las 3 URLs con URL/searchParams
  // 3) lanzar 3 fetchWithTimeout(..., { ms: 5000, signal }) en paralelo
  // 4) combinar resultados y mostrarlos
  // 5) si cancelan, abortar y reflejarlo en UI
});

document.getElementById("cancelar").addEventListener("click", () => {
  // TODO: abortar el controller compartido
});