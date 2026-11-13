<p align="center"><img src="icons/icon.svg" alt="Icono de Inclusiendo" width="160"></p>

# Inclusiendo

Guía para conocer y adaptar actividades de aula de Educación Infantil (0-6 años) a niños con TEA, síndrome de Down, discapacidad intelectual, motórica, auditiva, visual, problemas de conducta, trastornos del lenguaje y retraso madurativo.

Todos los niños son distintos y todos encajan: la inclusión es un derecho.

**App:** https://peter1323.github.io/Inclusiendo/

## Qué incluye
- Una ficha por necesidad: características, señales de alerta, adaptaciones (comunicación, materiales, espacio, tiempos), con quién coordinarse, una actividad de ejemplo, apps y cuentos.
- Página sobre el Diseño Universal para el Aprendizaje (DUA).
- Recursos para el aula con filtros por tipo y por discapacidad.
- Buscador general, favoritos y modo oscuro.
- Buscador de pictogramas de ARASAAC y de signos en Spreadthesign.
- Se instala como app (PWA) en iPhone, Android y Windows y funciona sin conexión.

## Estructura (Modelo-Vista-Controlador)
| Archivo | Para qué sirve |
|---|---|
| `js/modelo.js` | Todo el contenido (arrays `DISCAPACIDADES` y `RECURSOS`, y el objeto `DUA`). **Para editar textos o enlaces, cambia este archivo.** |
| `js/vista.js` | Genera el HTML de cada pantalla. |
| `js/controlador.js` | Navegación, clics y búsquedas. |
| `app.js` | Arranca la app y registra el service worker. |
| `sw.js` | Modo sin conexión. Sube `VERSION` cada vez que cambies algo. |
| `manifest.json`, `icons/` | Instalación como app e iconos. |

HTML, CSS y JavaScript puro, sin frameworks.

## Autoría
Creado por **peter1323** (https://github.com/peter1323).
© 2026 peter1323. Todos los derechos reservados. No se permite copiar ni redistribuir este proyecto como propio sin permiso del autor.

## Créditos de terceros
- Pictogramas: autor Sergio Palao. Origen: ARASAAC (https://arasaac.org). Licencia: CC BY-NC-SA. Propiedad: Gobierno de Aragón (España).
- Los signos se consultan en Spreadthesign y en el DILSE (Fundación CNSE).
- Las apps y webs enlazadas pertenecen a sus respectivos autores.
