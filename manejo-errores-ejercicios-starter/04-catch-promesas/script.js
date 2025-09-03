// 04 — Manejo de errores con .catch() en promesas
// Objetivo: ver cómo .catch al final captura errores de cualquier punto de la cadena.

const puedeFallar = () => new Promise((res, rej) => {
  setTimeout(() => Math.random() < 0.5 ? res(10) : rej(new Error("Fallo aleatorio")), 400);
});

// TODO: encadená .then(x => x*2).then(x => x+5) y un .catch final que loguee el error.
// Agregá un .then/.finally final para avisar "terminado".

console.log("Encadená .then() y agregá un .catch() final.");