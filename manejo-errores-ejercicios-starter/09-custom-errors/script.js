// 09 — Errores de dominio (clases custom) y instanceof

class ValidationError extends Error { constructor(msg){ super(msg); this.name="ValidationError"; } }
class PermissionError extends Error { constructor(msg){ super(msg); this.name="PermissionError"; } }

function validarUsuario(u){
  if (!u?.email) throw new ValidationError("Email requerido");
  if (!u.email.includes("@")) throw new ValidationError("Email inválido");
}

function checkPermisos(u){
  if (!u?.role || u.role !== "admin") throw new PermissionError("Acceso denegado");
}

// TODO: manejá estos dos tipos de error con instanceof y mostrales mensajes adecuados.

console.log("Creá y manejá errores de dominio con instanceof.");