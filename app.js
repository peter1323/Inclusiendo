/* =====================================================================
   APP.JS  ·  Punto de arranque de Inclusiendo
   ---------------------------------------------------------------------
   La app está organizada en Modelo-Vista-Controlador (MVC):

     js/modelo.js      → MODELO: todo el contenido (arrays DISCAPACIDADES
                          y RECURSOS) y los datos guardados (favoritos, tema).
                          ✏️ Para cambiar textos, apps o enlaces: edita ese archivo.
     js/vista.js       → VISTA: convierte los datos en HTML (las pantallas).
     js/controlador.js → CONTROLADOR: navegación, clics y búsquedas.

   Este archivo solo arranca la app y registra el service worker
   (sw.js), que permite instalarla y usarla sin internet.
   ===================================================================== */

// 1) Arrancar la app cuando el HTML está listo
document.addEventListener("DOMContentLoaded", () => Controlador.iniciar());

// 2) Registrar el service worker (modo sin conexión e instalación)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err =>
      console.warn("No se pudo registrar el service worker:", err));
  });
}
