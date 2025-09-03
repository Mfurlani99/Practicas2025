// 09 - Refactor a async/await con try/catch/finally
// Objetivo: Tomar una cadena de then() y reescribirla usando async/await, manteniendo la lógica.
// Temas: await secuencial, manejo de errores con try/catch, sección finally para limpieza.

import { delay } from "../utils/delay.js";

const stepA = async () => { await delay(200); return "A"; };
const stepB = async () => { await delay(300); if (Math.random() < 0.4) throw new Error("B falló"); return "B"; };
const stepC = async () => { await delay(250); return "C"; };

// TODO: escribí una función async flujo() que:
//   - Espere A, luego B, luego C (en ese orden), acumulando resultados en un array.
//   - Use try/catch para capturar fallos y retornar un objeto { ok, data|error }.
//   - Use finally para loguear 'fin de flujo' siempre.
//   - Proponé además una versión que ejecute A y C en paralelo una vez completado B (si B no falla).

console.log("Escribí flujo() con async/await.");