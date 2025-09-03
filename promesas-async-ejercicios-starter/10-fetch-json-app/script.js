// 10 - Mini app: traer JSON y render simple (sin frameworks)
// Objetivo: Usar fetch() (o fakeFetch) para traer datos, transformarlos y mostrarlos en el DOM.
// Temas: fetch + .json(), estado de carga, manejo de error, encadenamiento o async/await.

// Modo: cambiá a true para usar la API pública (si tenés Internet).
// Con false, se usa la API falsa local (utils/fakeApi.js).
const USE_REAL_API = false;

import { getTodos, fakeFetch } from "../utils/fakeApi.js";

const $app = document.createElement('div');
document.body.appendChild($app);

function renderLoading(){ $app.innerHTML = "<p>Cargando...</p>"; }
function renderError(msg){ $app.innerHTML = `<p style="color:#b00020">Error: ${msg}</p>`; }
function renderList(items){
  $app.innerHTML = `<h2>Todos</h2>` + items.map(t => `<li>${t.id}. ${t.title} — <strong>${t.completed ? "✔" : "✗"}</strong></li>`).join("");
}

async function main(){
  renderLoading();
  try{
    let todos;
    if (USE_REAL_API) {
      // TODO: usá fetch a https://jsonplaceholder.typicode.com/todos?_limit=5
      // y hacé response.json() para obtener los datos.
      // Tip: agregá un pequeño delay artificial para ver el "loading".
      todos = [{ id: 999, title: "TODO: implementar fetch real", completed: false }];
    } else {
      // Modo offline con API falsa:
      const res = await getTodos({ delayMs: 700 });
      todos = await res.json();
    }

    // TODO: transformá los datos: ordená por 'completed' (false primero) y luego por 'title' asc.
//    const ordenados = ...

    // TODO: renderList(ordenados);
    renderList(todos);
  }catch(err){
    renderError(err.message);
  }
}

main();