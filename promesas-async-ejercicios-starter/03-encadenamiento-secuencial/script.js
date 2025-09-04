// 03 - Encadenamiento secuencial vs paralelo
// Objetivo: Ejecutar 3 tareas asíncronas en secuencia y luego en paralelo, comparando tiempos.
// Temas: secuencia con then/await, Promise.all para paralelo.

// Tareas simuladas: devuelven su etiqueta luego de un retardo.


// TODO 1: ejecutá A(400ms) -> B(500ms) -> C(300ms) en SECUENCIA y medí el tiempo total.
// TODO 2: ejecutá A, B y C en PARALELO con Promise.all y compará tiempos.
// TODO 3: imprimí los resultados en consola con marcas temporales (performance.now()).

// 03 - Encadenamiento secuencial vs paralelo
// Objetivo: Ejecutar 3 tareas asíncronas en secuencia y luego en paralelo, comparando tiempos.
// Temas: secuencia con then/await, Promise.all para paralelo.

import { delay } from "../utils/delay.js";

// -----------------------------------------------------------------------------
// Utilidad para marcas temporales (ms):
// - En navegadores: performance.now() existe por defecto.
// - En Node: a veces existe global; si no, usamos Date.now() como respaldo.
//
// NO cambia el resultado pedagógico: queremos comparar "total secuencial" vs "total paralelo".
// -----------------------------------------------------------------------------
const now = () =>
  (typeof globalThis.performance?.now === "function")
    ? globalThis.performance.now()
    : Date.now();

// -----------------------------------------------------------------------------
// Tarea simulada:
// - Loguea inicio y fin con marcas temporales
// - Espera "ms" usando delay(ms)
// - Devuelve una etiqueta (A/B/C)
// -----------------------------------------------------------------------------
const tarea = async (ms, etiqueta) => {
  const inicio = now();
  console.log(`[${etiqueta}] inicio  @ ${inicio.toFixed(2)} ms`);

  await delay(ms); // <-- acá ocurre la espera no bloqueante

  const fin = now();
  console.log(
    `[${etiqueta}] fin     @ ${fin.toFixed(2)} ms (duró ~${(fin - inicio).toFixed(2)} ms)`
  );
  return etiqueta;
};

// -----------------------------------------------------------------------------
// Estrategia 1: SECUENCIAL (A -> B -> C)
// - A empieza, termina, recién ahí arranca B, y luego C.
// - El tiempo total ≈ suma de los tres retardos, porque se encadenan uno tras otro.
// -----------------------------------------------------------------------------
async function correrSecuencial() {
  console.log("\n== SECUENCIAL A → B → C ==");
  const t0 = now();

  const rA = await tarea(400, "A"); // espera ~400ms
  const rB = await tarea(500, "B"); // empieza cuando termina A (espera ~500ms)
  const rC = await tarea(300, "C"); // empieza cuando termina B (espera ~300ms)

  const t1 = now();
  console.log("[SECUENCIAL] resultados:", rA, rB, rC);
  console.log("[SECUENCIAL] total ms:", (t1 - t0).toFixed(2));
  // Intuición: debería acercarse a 400 + 500 + 300 (más pequeñas diferencias de ejecución)
}

// -----------------------------------------------------------------------------
// Estrategia 2: PARALELO (A, B y C a la vez)
// - Disparamos las tres tareas juntas y esperamos a que TODAS terminen con Promise.all.
// - El tiempo total ≈ el MÁS LARGO de los tres, porque corren en paralelo.
// -----------------------------------------------------------------------------
async function correrParalelo() {
  console.log("\n== PARALELO A | B | C ==");
  const t0 = now();

  // Lanza las tres SIN esperar a que terminen (arrancan casi al mismo tiempo)
  const promA = tarea(400, "A");
  const promB = tarea(500, "B");
  const promC = tarea(300, "C");

  // Espera a que terminen las tres
  const [rA, rB, rC] = await Promise.all([promA, promB, promC]);

  const t1 = now();
  console.log("[PARALELO] resultados:", rA, rB, rC);
  console.log("[PARALELO] total ms:", (t1 - t0).toFixed(2));
  // Intuición: debería acercarse al máximo entre 400, 500 y 300 → ~500ms
}

// -----------------------------------------------------------------------------
// Ejecución de ambas estrategias para comparar
// -----------------------------------------------------------------------------
(async () => {
  console.log("Implementá las 2 estrategias y compará tiempos.\n");

  await correrSecuencial();
  await correrParalelo();

  console.log("\nListo. Observá la diferencia entre los tiempos totales.");
})();
