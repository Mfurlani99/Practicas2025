// 08 - Promisificación de API con callbacks (err-first)
// Objetivo: Convertir una función de estilo Node (err, data) => void a una basada en Promesas.
// Temas: new Promise, resolve/reject según error, consumo con then/catch y async/await.
// TODO 1: escribí promisificarLeer(path) que devuelva una Promesa basada en leerRecursoSimulado.
// TODO 2: consumí la versión promisificada con then/catch y luego con async/await + try/catch.
// TODO 3: asegurate de propagar correctamente el error cuando corresponda.

// ✅ Simulación de una API con callback err-first
// Esta función representa una API antigua que recibe una ruta y un callback.
// El callback usa el formato (err, data) => {...}, como en Node.js.
function leerRecursoSimulado(path, cb) {
  setTimeout(() => {
    // Si el path contiene "bad", se simula un error.
    if (path.includes("bad")) cb(new Error("Ruta inválida"));
    else cb(null, `Contenido de ${path}`); // Si no hay error, retorna contenido simulado.
  }, 400);
}

// ✅ Paso 1: Promisificar la API
// Esta función envuelve `leerRecursoSimulado` en una Promise moderna.
function promisificarLeer(path) {
  return new Promise((resolve, reject) => {
    leerRecursoSimulado(path, (err, data) => {
      if (err) reject(err);     // Si hay error, se rechaza la promesa.
      else resolve(data);       // Si todo está bien, se resuelve con los datos.
    });
  });
}

// ✅ Paso 2a: Consumo con .then() / .catch()
promisificarLeer("archivo.txt")
  .then(data => {
    console.log("✅ Con .then():", data); // Debería mostrar: Contenido de archivo.txt
  })
  .catch(err => {
    console.error("❌ Error con .then():", err.message);
  })
  .finally(() => {
    console.log("📦 Terminó la promesa con .then()\n");
  });

// ✅ Paso 2b: Consumo con async/await y try/catch
async function leerAsync() {
  try {
    const data = await promisificarLeer("archivo.txt");
    console.log("✅ Con async/await:", data); // Debería mostrar: Contenido de archivo.txt
  } catch (err) {
    console.error("❌ Error con async/await:", err.message);
  } finally {
    console.log("📦 Terminó la promesa con async/await\n");
  }
}

// Llamamos a la función asincrónica
leerAsync();

// ✅ Paso 3: Forzar un error (ruta inválida) para probar propagación
promisificarLeer("bad/path")
  .then(data => {
    console.log("❌ NO debería llegar acá:", data);
  })
  .catch(err => {
    console.error("✅ Error esperado:", err.message); // Debería decir: Ruta inválida
  })
  .finally(() => {
    console.log("📦 Terminó la promesa con error forzado");
  });
