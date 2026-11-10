/* =====================================================================
   SERVICE WORKER  ·  Inclusiendo
   ---------------------------------------------------------------------
   Guarda los archivos de la app en el móvil para que funcione SIN
   INTERNET. Las búsquedas de pictogramas (ARASAAC) y los enlaces
   externos sí necesitan conexión.

   ⚠️ Cada vez que cambies algún archivo, sube el número de VERSION
   para que los móviles descarguen la versión nueva.
   ===================================================================== */

const VERSION = "inclusiendo-v2";

// Archivos de la app que se guardan al instalarla
const ARCHIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./js/modelo.js",
  "./js/vista.js",
  "./js/controlador.js",
  "./manifest.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

// 1) INSTALAR: guardar los archivos en la caché
self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

// 2) ACTIVAR: borrar cachés de versiones antiguas
self.addEventListener("activate", evento => {
  evento.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(c => c !== VERSION).map(c => caches.delete(c))))
      .then(() => self.clients.claim())
  );
});

// 3) PETICIONES: decidir de dónde sale cada archivo
self.addEventListener("fetch", evento => {
  const peticion = evento.request;
  if (peticion.method !== "GET") return;
  const url = new URL(peticion.url);

  // Archivos de la propia app: primero la caché (rápido y sin internet)
  if (url.origin === location.origin) {
    evento.respondWith(
      caches.match(peticion, { ignoreSearch: true }).then(guardado =>
        guardado || fetch(peticion).then(resp => {
          const copia = resp.clone();
          caches.open(VERSION).then(cache => cache.put(peticion, copia));
          return resp;
        }).catch(() => caches.match("./index.html"))
      )
    );
    return;
  }

  // Tipografía Nunito (Google Fonts): se guarda la primera vez que se descarga
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    evento.respondWith(
      caches.match(peticion).then(guardado =>
        guardado || fetch(peticion).then(resp => {
          const copia = resp.clone();
          caches.open(VERSION).then(cache => cache.put(peticion, copia));
          return resp;
        })
      )
    );
  }
  // El resto (ARASAAC, enlaces externos) va directo a internet.
});
