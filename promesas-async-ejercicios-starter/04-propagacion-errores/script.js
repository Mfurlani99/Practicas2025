// 04 - Propagación y recuperación de errores en cadenas
// Objetivo: Forzar un error en el segundo paso de una cadena y demostrar 2 estrategias:
//   a) catch al final
//   b) catch intermedio con rethrow
// Temas: propagación con throw, recuperación parcial, estado de la cadena.

import { delay } from "../utils/delay.js";

// TODO: creá una promesa base que resuelva con "start" tras 300ms.
// Encadená:
//  - .then(v => v + "-A")
//  - .then(() => { throw new Error("falló B"); })
//  - .then(v => v + "-C")  // este no debería ejecutarse si B falla
// Estrategia 1: un único .catch() al final que loguee y devuelva "RECUPERADO".
// Estrategia 2: agregá un catch intermedio tras B que haga rethrow (vuelva a fallar).
// Observá cómo cambia el flujo.

console.log("Probá ambas estrategias y analizá qué se ejecuta.");