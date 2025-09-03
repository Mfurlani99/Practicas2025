/*01 — Estados de una Promesa y cuándo queda “definida” (settled)
Hacer una promesa que espere un rato y después a veces salga bien (con un valor) y a veces salga mal (con un error), al azar.
Conceptos clave:
pending = “esperando”.
fulfilled = “salió bien” (tenés un valor).
rejected = “salió mal” (tenés un motivo/razón, normalmente un Error).
then = qué hacer si salió bien.
catch = qué hacer si salió mal.
value vs reason = en éxito tenés value; en fracaso tenés reason (el error).

TODO 1 (la fábrica de promesas)
Hacé una función fabricaPromesa(ms) que devuelva una promesa y haga esto:
Esperar ms milisegundos usando delay(ms) (ya te lo dan).
Después de esperar, tirar una moneda:
Con 60% de probabilidad: resolver (salió bien) y devolver algún valor (por ejemplo, un texto).
Con 40% de probabilidad: rechazar (salió mal) con un Error o un string que explique el motivo.
Idea: “esperá → sorteá → resolvé o rechazá”.

TODO 2 (probar varias a la vez)
Llamá 5 veces a fabricaPromesa(500) y a cada una conectale handlers:
En el then: mostrá en consola fulfilled: <valor> y devolvé el string "OK".
En el catch: mostrá en consola rejected: <razón> y devolvé el string "FAIL".
Importante: devolver algo en then/catch define lo que recibe el siguiente paso del encadenado.

TODO 3 (transformar solo si salió bien)
Encadená otro then después, para convertir el valor a MAYÚSCULAS, pero solo si la promesa salió bien.
Al final poné un catch que agarre cualquier error que haya quedado suelto.
Pista: si el catch va al final, cualquier rechazo que ocurra antes termina ahí.
Al transformar en mayúsculas, asegurate de hacerlo después de un then exitoso (y antes del catch final).
console.log("Implementá fabricaPromesa(ms) y probalo varias veces.");*/
import { delay } from "../utils/delay.js"

export async function fabricaPromesa(ms) {
  await delay(ms);                          // 1) Espera ms
  const p = Math.random();                  // 2) Azar entre 0 y 1
  if (p < 0.9) {                            // 60% éxito
    return `valor-${Date.now()}`;           // => fulfilled con un string
  } else {                                  // 40% fracaso
    throw new Error("algo salió mal");      // => rejected con Error
  }
}

for (let i = 0; i < 5; i++) {
  fabricaPromesa(500)
    .then((valor) => valor.toUpperCase())                      // TODO 3: solo si éxito
    .then((valorMayus) => {                                    // TODO 2: log de éxito
      console.log("fulfilled: ok", valorMayus);
      return "OK";                                             // string final si éxito
    })
    .catch((razon) => {                                        // TODO 2: log de error
      const msg = razon?.message ?? String(razon);
      console.log("rejected:", msg);
      return "FAIL";                                           // string final si error
    });
}