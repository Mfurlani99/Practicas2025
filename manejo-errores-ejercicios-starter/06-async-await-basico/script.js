// 06 — Async/Await con try/catch (API falsa)
// Objetivo: chequear ok/!ok y lanzar HttpError si corresponde.

import { fakeFetch, HttpError } from "../utils/fakeApiErrors.js";

// TODO: implementá obtenerOk() y obtener404() con await fakeFetch("/ok") y await fakeFetch("/404").
// Si !response.ok => throw new HttpError(status, body). Capturá en un try/catch externo y mostrale
// al usuario un mensaje claro (console.log).

console.log("Implementá obtenerOk/obtener404 con async/await y manejo de errores.");