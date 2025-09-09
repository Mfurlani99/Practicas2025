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

const p1 = tareaOk(500, 1);
const p2 = tareaFail(200, 2);
const p3 = tareaOk(800, 3);
const p4 = tareaFail(100, 4);
const p5 = tareaOk(400, 5);


const promesas =[p1,p2,p3,p4,p5]


const results = await Promise.allSettled(promesas);
const resultadosOk = []
const rejected = []

for (let index = 0; index < results.length; index++) {
    if (results[index].status === "fulfilled") {
        resultadosOk.push(results[index].id)
    }else{
       rejected.push(results[index].status) 
        rejected.push(results[index].reason.message) 
    }    
}

Promise.allSettled(results).then((resultados) =>
 resultados.forEach((resultados) => console.log(resultados.status)),
console.log("el total es: " + results.length),
console.log("el total de ok es: " + resultadosOk.length),
console.log("el total de fallidos es: " + rejected.length),
console.log(results),
console.log(resultadosOk),
console.log(rejected)
);
