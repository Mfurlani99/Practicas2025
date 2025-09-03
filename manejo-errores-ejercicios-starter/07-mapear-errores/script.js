// 07 — Mapear tipos de error a mensajes amigables
// Objetivo: crear mapError(e) que devuelva un string según el tipo de Error.

import { fakeFetch, HttpError, NetworkError } from "../utils/fakeApiErrors.js";

// TODO:
// 1) escribí mapError(e) con casos: HttpError 404/500, NetworkError, SyntaxError, default
// 2) probalo con /404, /500 y randomFail (fakeFetch('/ok', {randomFail: 0.7}))

console.log("Escribí mapError(e) y probalo con distintos errores.");