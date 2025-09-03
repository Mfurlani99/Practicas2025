// 05 — Catch único vs. catches intermedios (rethrow)
// Objetivo: comparar estrategias de manejo de errores en cadenas de promesas.

const base = Promise.resolve(5);
function paso1(x){ return x*2; }
function paso2(){ throw new Error("Error en paso2"); }
function paso3(x){ return x+1; }

// TODO A: catch solo al final
// TODO B: catch intermedio tras paso2 que haga rethrow para que el final también lo reciba.

console.log("Probá las dos variantes y observá el flujo.");