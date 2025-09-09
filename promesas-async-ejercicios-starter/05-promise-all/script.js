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

const start = performance.now();

// Mostrar orden de llegada
console.log("Orden de llegada:");
p1.then(value => console.log("Llega:", value));
p2.then(value => console.log("Llega:", value));
p3.then(value => console.log("Llega:", value));

// Promise.all para agregación
Promise.all([p1, p2, p3])
  .then(values => {
    const end = performance.now();
    console.log("\nArray en orden del Promise.all:");
    for (const value of values) {
      console.log("→", value);
    }
    console.log(`\n⏱ Tiempo total: ${(end - start).toFixed(0)} ms`);
  });