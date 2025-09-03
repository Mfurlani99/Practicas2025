// 08 — Preflight CORS: método/headers no simples
// Objetivo: disparar una solicitud que gatille <preflight> (OPTIONS) y observar en DevTools.
// API candidata: https://httpbin.org/anything  (refleja método y headers)
// Tarea: Enviar un PUT con header personalizado 'X-Demo: 1'. Si el server permite, verás la respuesta;
//        si no, será bloqueado por CORS. Lo importante es observar la solicitud OPTIONS previa.

const app = document.currentScript.closest('body').querySelector('.card');

async function probarPreflight(){
  // TODO:
  // try {
  //   const res = await fetch("https://httpbin.org/anything", { method:"PUT", headers:{ "X-Demo":"1" }, body: "{}" });
  //   console.log("status", res.status);
  //   console.log("headers", [...res.headers]);
  //   console.log("body", await res.json());
  // } catch (e) {
  //   console.warn("Bloqueado por CORS o fallo de red:", e);
  // }
}
probarPreflight();