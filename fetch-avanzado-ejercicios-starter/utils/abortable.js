// utils/abortable.js
export function fetchWithTimeout(url, { ms = 5000, ...options } = {}){
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(id));
}

export function makeSharedController(){
  const controller = new AbortController();
  return { controller, signal: controller.signal, abort: () => controller.abort() };
}