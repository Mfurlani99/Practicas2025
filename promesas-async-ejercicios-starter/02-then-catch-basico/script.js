// 02 - Transformaciones con then() y manejo básico de errores
// Objetivo: Practicar then() para mapear valores y propagar errores hasta un catch final.
// Temas: then encadenado, throw para propagar, catch final único.

import { delay } from "../utils/delay.js";

// TODO 1: crea una promesa base que resuelva con el número 5 tras 400ms.
// TODO 2: encadená varios .then() que apliquen transformaciones:
//   - x => x * 2
//   - x => x + 10
//   - si x > 18, lanzá un Error("límite sobrepasado") usando throw
// TODO 3: agrega un único .catch() final que loguee el error y retorne un valor de recuperación
//   (por ejemplo 0), y luego un .then() más que loguee el valor final (recuperado o no).

console.log("Completá la cadena de then() y el manejo de error al final.");


import { delay } from "../utils/delay.js";

const promise2 = delay(400).then(() => 5);

promise2
  .then(x => {
    console.log(x);       // 5
    return x * 2;         // 10
  })
  .then(x => {
    console.log(x);       // 10
    return x + 10;        // 20
  })
  .then(x => {
    console.log(x);       // 20
    if (x > 18) throw new Error("límite sobrepasado");
    return x;             // (propaga el valor si no hay error)
  })
  .catch(err => {
    const msg = err?.message ?? String(err);
    console.error("rejected:", msg);
    return 0;             // valor de recuperación
  })
  .then(final => {
    console.log(final);   // 0 (o el valor final si no hubo error)
  });
