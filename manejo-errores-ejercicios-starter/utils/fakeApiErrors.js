// utils/fakeApiErrors.js
import { delay } from "./delay.js";

const RESPONSES = {
  "/ok": { ok: true, status: 200, json: { message: "todo ok" } },
  "/500": { ok: false, status: 500, json: { error: "Error interno" } },
  "/404": { ok: false, status: 404, json: { error: "No encontrado" } },
  "/slow": { ok: true, status: 200, json: { message: "lento pero ok" }, delay: 1200 },
};

export class NetworkError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = "NetworkError";
    this.cause = cause;
  }
}

export class HttpError extends Error {
  constructor(status, body) {
    super(`HTTP ${status}`);
    this.name = "HttpError";
    this.status = status;
    this.body = body;
  }
}

export async function fakeFetch(resource, { delayMs = 500, randomFail = 0 } = {}) {
  await delay(delayMs);
  if (Math.random() < randomFail) {
    throw new NetworkError("Falla de red simulada");
  }
  const res = RESPONSES[resource];
  if (!res) throw new HttpError(400, { error: "Ruta no soportada" });
  await delay(res.delay ?? 0);
  return {
    ok: res.ok,
    status: res.status,
    async json() { return structuredClone(res.json); }
  };
}

export { delay };