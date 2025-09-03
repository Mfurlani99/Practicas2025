// 06 - Reporte robusto con Promise.allSettled()
// Objetivo: Ejecutar 5 promesas donde algunas fallen y generar un resumen claro.
// Temas: estados fulfilled/rejected, reporte estadístico, filtrado por estado.

import { delay } from "../utils/delay.js";

const tareaOk = async (ms, id) => { await delay(ms); return { id, ok: true }; };
const tareaFail = async (ms, id) => { await delay(ms); throw new Error(`Fallo ${id}`); };

// TODO: construí un array con una mezcla de promesas OK y fallidas.
// Usá Promise.allSettled(...) y generá un objeto resumen:
// {
//   total: 5,
//   ok: <n>,
//   fail: <n>,
//   errores: ["Fallo ...", ...],
//   resultadosOk: [ {id, ok:true}, ... ]
// }
// Tip: results.filter(r => r.status === "fulfilled").map(r => r.value)

console.log("Generá el reporte a partir de allSettled.");