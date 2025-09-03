// 01 - Estados de una Promesa y transición a settled
// Objetivo: Crear manualmente una Promesa que se resuelve o rechaza en forma aleatoria tras un retardo.
// Temas: estados (pending/fulfilled/rejected), then/catch, value vs reason.

import { delay } from "../utils/delay.js";

// TODO 1: crea una función fabricaPromesa(ms) que devuelva una nueva Promesa.
//  - Debe esperar 'ms' milisegundos y luego, con prob. 60%, resolver con un valor
//    y con 40% rechazar con un Error (o string). Usa delay(ms).

// TODO 2: invocá 5 veces fabricaPromesa(500) y conectá handlers then/catch que:
//  - Logueen 'fulfilled:' + valor o 'rejected:' + razón
//  - Devuelvan un string final con formato 'OK' o 'FAIL' (según caso).

// TODO 3: Probá encadenar un .then() adicional para transformar el valor a mayúsculas
//  solo en caso de éxito. Verificá que el .catch final capture cualquier rechazo.

console.log("Implementá fabricaPromesa(ms) y probalo varias veces.");