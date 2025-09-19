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


const p1 = (async () => { await delay(700); return "P1"; })();
const p2 = (async () => { await delay(800); return "P2"; })();
const p3 = (async () => { await delay(600); return "P3"; })();

const p4 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "la promesa 4 fue rechazada por exceso de facha");
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(reject, 400, "la promesa 5 fue rechazada por exceso de facha");
});



Promise.race([p1, p2,p3 , p4]).then((value) => {
  console.log("la primera en terminar: " + value);
});

Promise.any([p1, p2 , p4]).then((value) => {
  console.log("la primera cumplida: " + value);
});