// 03 - Encadenamiento secuencial vs paralelo
// Objetivo: Ejecutar 3 tareas asíncronas en secuencia y luego en paralelo, comparando tiempos.
// Temas: secuencia con then/await, Promise.all para paralelo.

import { delay } from "../utils/delay.js";

// Tareas simuladas: devuelven su etiqueta luego de un retardo.
const tarea = async (ms, etiqueta) => { await delay(ms); return etiqueta; };

// TODO 1: ejecutá A(400ms) -> B(500ms) -> C(300ms) en SECUENCIA y medí el tiempo total.
// TODO 2: ejecutá A, B y C en PARALELO con Promise.all y compará tiempos.
// TODO 3: imprimí los resultados en consola con marcas temporales (performance.now()).

console.log("Implementá las 2 estrategias y compará tiempos.");