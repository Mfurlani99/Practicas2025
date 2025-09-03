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