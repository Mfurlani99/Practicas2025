// 03 — Uso de finally para limpieza de recursos
// Objetivo: simular apertura/cierre y garantizar cleanup (cerrar), ocurra lo que ocurra.

const recurso = { abierto: false };
function abrir(){ recurso.abierto = true; console.log("Recurso abierto"); }
function cerrar(){ recurso.abierto = false; console.log("Recurso cerrado"); }
function operar(){ throw new Error("Operación falló"); }

// TODO: escribí usarRecurso() que use try/catch/finally para asegurar cerrar()
// y demostrale en consola que queda cerrado aún con error.

console.log("Escribí usarRecurso() con try/catch/finally.");