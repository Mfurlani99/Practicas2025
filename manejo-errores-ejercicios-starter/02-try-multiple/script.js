// 02 — Múltiples operaciones en un único try
// Objetivo: ver cómo se interrumpe el bloque y cómo manejarlo de forma limpia.

function pasoA(){ return "A"; }
function pasoB(){ throw new Error("B falló"); }
function pasoC(){ return "C"; }

// TODO: dentro de un único try, ejecutá A, B y C en ese orden y guardá resultados.
//  - en catch, registrá el .message del error y continuá sin romper la app.
//  - verificá si C se ejecuta o no y por qué.

console.log("Implementá el flujo con A,B,C dentro de un único try.");