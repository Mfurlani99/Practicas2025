// 07 - Race vs Any: primeras respuestas y timeouts
// Objetivo: Practicar Promise.race() y Promise.any() construyendo un wrapper timeout().
// Temas: carrera entre promesas, diferencia entre race y any, timeouts.

import { delay } from "../utils/delay.js";

// TODO 1: implementá timeout(promise, ms) que:
//   - Devuelva una promesa que se resuelve/rechaza con la primera en completar
//     entre la promesa original y otra que RECHACE tras ms con Error("timeout").
//   - Tip: Promise.race([promesaOriginal, promesaDeRechazoTras(ms)])
// TODO 2: probalo con una promesa que demora 800ms y timeout de 500ms (debe fallar).
// TODO 3: usá Promise.any() con 3 promesas donde 2 fallen y 1 resuelva, verificá el valor obtenido.

console.log("Construí timeout() y probalo con race/any.");