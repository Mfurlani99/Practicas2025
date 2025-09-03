// 08 — Reintento simple con backoff
// Objetivo: implementar withRetry(fn, maxIntentos, baseMs) para NetworkError.

import { fakeFetch, NetworkError, delay } from "../utils/fakeApiErrors.js";

// TODO: implementá withRetry(taskFn, max=3, baseMs=300) que reintente ante NetworkError.
// Probá con fakeFetch('/ok', { randomFail: 0.7 }).

console.log("Implementá withRetry y probalo con fallos aleatorios.");