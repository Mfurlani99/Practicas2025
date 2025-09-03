// 10 — Captura global: unhandledrejection + reporte

function initGlobalHandler(){
  window.addEventListener("unhandledrejection", (event) => {
    console.warn("[GLOBAL] Rechazo no manejado:", event.reason?.message ?? event.reason);
    const div = document.createElement("div");
    div.style = "position:fixed;bottom:12px;left:12px;background:#fff3cd;border:1px solid #ffeeba;padding:10px;border-radius:8px;max-width:300px;z-index:9999";
    div.textContent = "Ups: ocurrió un error inesperado. Revisá la consola para más detalles.";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 4000);
  });
}

// TODO: llamá initGlobalHandler(); luego hacé Promise.reject(new Error("boom")) sin catch y verificá el aviso.

console.log("Agregá un handler global para rechazos no manejados.");