// 01 — Streams: mostrar progreso de descarga con getReader()
// Objetivo: leer un recurso por chunks y actualizar una barra de progreso.
// API pública sugerida: httpbin (stream de bytes).
//   URL: https://httpbin.org/stream-bytes/1048576?chunk_size=65536  (1 MiB)
//   Tip: si el servidor no envía Content-Length, calculá el % como "indeterminado".

import { $, el, pretty } from "../utils/helpers.js";
import { streamWithProgress } from "../utils/progress.js";

const app = document.currentScript.closest('body').querySelector('.card');
const progress = el('progress', { max: 100, value: 0 });
const log = el('pre');

app.appendChild(progress);
app.appendChild(log);

async function descargar(){
  const url = "https://httpbin.org/stream-bytes/1048576?chunk_size=65536";
  // TODO: Usá streamWithProgress(url, { onProgress }) para ir actualizando la barra.
  // Hint: onProgress({ received, total, percent })
  // - Si total es null => mostr&aacute; "Descargando... (tama&ntilde;o desconocido)".
  // - Al final, logue&aacute; los bytes recibidos.
}

descargar();