// 05 - Aggregación con Promise.all()
// Objetivo: Lanzar 3 promesas independientes y esperar a todas con Promise.all().
// Temas: paralelismo, mapeo de resultados, control de tiempos.

import { delay } from "../utils/delay.js";

const p1 = (async () => { await delay(300); return "P1"; })();
const p2 = (async () => { await delay(550); return "P2"; })();
const p3 = (async () => { await delay(180); return "P3"; })();

// TODO: usá Promise.all([p1,p2,p3]) para obtener un array con resultados.
// Mostrá los valores en orden de llegada vs. orden del array.
// Medí el tiempo total y justificá por qué es ese y no la suma de todos.

console.log("Completá el Promise.all y analizá los resultados.");