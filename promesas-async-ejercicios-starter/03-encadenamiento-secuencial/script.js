// 03 - Encadenamiento secuencial vs paralelo
// Objetivo: Ejecutar 3 tareas asíncronas en secuencia y luego en paralelo, comparando tiempos.
// Temas: secuencia con then/await, Promise.all para paralelo.

// Tareas simuladas: devuelven su etiqueta luego de un retardo.


// TODO 1: ejecutá A(400ms) -> B(500ms) -> C(300ms) en SECUENCIA y medí el tiempo total.
// TODO 2: ejecutá A, B y C en PARALELO con Promise.all y compará tiempos.
// TODO 3: imprimí los resultados en consola con marcas temporales (performance.now()).

import { delay } from "../utils/delay.js";

// Tarea simulada: espera y devuelve la etiqueta
const tarea = async (ms, etiqueta) => {
  await delay(ms);
  return etiqueta;
};

// ------- SECUENCIAL: A -> B -> C -------
async function correrSecuencial() {
  const t0 = performance.now();

  const rA = await tarea(400, "A"); // espera 400ms
  const rB = await tarea(500, "B"); // espera 500ms recién cuando termina A
  const rC = await tarea(300, "C"); // espera 300ms recién cuando termina B

  const t1 = performance.now();

  console.log("[SECUENCIAL] resultados:", rA, rB, rC);
  console.log("[SECUENCIAL] total ms:", (t1 - t0).toFixed(2));
}

// ------- PARALELO: A, B y C a la vez -------
async function correrParalelo() {
  const t0 = performance.now();

  const [rA, rB, rC] = await Promise.all([
    tarea(400, "A"),
    tarea(500, "B"),
    tarea(300, "C"),
  ]);

  const t1 = performance.now();

  console.log("[PARALELO] resultados:", rA, rB, rC);
  console.log("[PARALELO] total ms:", (t1 - t0).toFixed(2));
}

// Ejecutá ambas y compará
(async () => {
  console.log("== Medición SECUENCIAL ==");
  await correrSecuencial();

  console.log("== Medición PARALELO ==");
  await correrParalelo();
})();
