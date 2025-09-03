// 08 - Promisificación de API con callbacks (err-first)
// Objetivo: Convertir una función de estilo Node (err, data) => void a una basada en Promesas.
// Temas: new Promise, resolve/reject según error, consumo con then/catch y async/await.

// API simulada (callback err-first)
function leerRecursoSimulado(path, cb){
  setTimeout(() => {
    if (path.includes("bad")) cb(new Error("Ruta inválida"));
    else cb(null, `Contenido de ${path}`);
  }, 400);
}

// TODO 1: escribí promisificarLeer(path) que devuelva una Promesa basada en leerRecursoSimulado.
// TODO 2: consumí la versión promisificada con then/catch y luego con async/await + try/catch.
// TODO 3: asegurate de propagar correctamente el error cuando corresponda.

console.log("Implementá promisificarLeer(path).");