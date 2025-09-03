// utils/fakeApi.js
// Mini API falsa para practicar sin depender de Internet.
// Respuestas similares a fetch() con .json()
import { delay } from './delay.js';

export async function fakeFetch(resource, { delayMs = 600, shouldFail = false, payload = null } = {}) {
  await delay(delayMs);
  if (shouldFail) {
    throw new Error(`Fallo simulado en ${resource}`);
  }
  const value = payload ?? { resource, ok: true, ts: Date.now() };
  // Imitamos el shape de Response de fetch() (solo lo que necesitamos)
  return {
    ok: true,
    async json(){ return value; }
  };
}

// Datos de ejemplo
export const todos = [
  { id: 1, title: "Aprender Promesas", completed: false },
  { id: 2, title: "Practicar encadenamiento", completed: true },
  { id: 3, title: "Leer sobre Promise.all", completed: false },
];

export async function getTodo(id, opts = {}) {
  return fakeFetch(`/todos/${id}`, { ...opts, payload: todos.find(t => t.id === id) ?? null });
}

export async function getTodos(opts = {}) {
  return fakeFetch('/todos', { ...opts, payload: todos });
}

export async function failSometimes(p = 0.4, opts = {}) {
  const shouldFail = Math.random() < p;
  return fakeFetch('/random', { ...opts, shouldFail, payload: { n: Math.random() } });
}