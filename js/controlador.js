/* =====================================================================
   CONTROLADOR  ·  Inclusiendo
   ---------------------------------------------------------------------
   Une el Modelo y la Vista:
     - Lee la dirección (#inicio, #ficha/tea...) y decide qué pantalla
       mostrar (esto se llama "router" o enrutador).
     - Escucha los clics y lo que se escribe, y actúa.
   ===================================================================== */

const Controlador = {

  app: null,     // <main id="app"> donde se pinta cada pantalla
  modal: null,   // <dialog> para ver pictogramas en grande

  /* Se llama una sola vez al abrir la app (desde app.js) */
  iniciar() {
    this.app = document.getElementById("app");
    this.modal = document.getElementById("modal");

    this.aplicarTema(Modelo.leerTema());
    document.getElementById("btnTema").addEventListener("click", () => this.cambiarTema());

    // Cada vez que cambia la dirección (#...), se pinta la pantalla
    window.addEventListener("hashchange", () => this.mostrarPantalla());

    // Un solo "escuchador" para todos los clics de la app (delegación de eventos)
    document.addEventListener("click", e => this.alHacerClic(e));
    document.addEventListener("submit", e => this.alEnviar(e));
    document.addEventListener("input", e => this.alEscribir(e));

    // Cerrar la ventana de pictograma al pulsar fuera de ella
    this.modal.addEventListener("click", e => { if (e.target === this.modal) this.modal.close(); });

    this.mostrarPantalla();
  },

  /* ---------- ENRUTADOR ----------
     "#recursos/cuentos/tea" → ruta = "recursos", partes = ["cuentos", "tea"] */
  mostrarPantalla() {
    const [ruta, ...partes] = (location.hash.slice(1) || "inicio").split("/");
    Vista.items = {};
    let html;

    switch (ruta) {
      case "ficha": {
        const d = Modelo.discapacidad(partes[0]);
        html = d ? Vista.ficha(d) : Vista.inicio();
        break;
      }
      case "recursos":  html = Vista.recursos(partes[0] || "todos", partes[1] || "todas"); break;
      case "buscar":    html = Vista.buscar(decodeURIComponent(partes[0] || "")); break;
      case "pictos":    html = Vista.pictos(); break;
      case "signos":    html = Vista.signos(); break;
      case "favoritos": html = Vista.favoritos(); break;
      default:          html = Vista.inicio();
    }

    this.app.innerHTML = html;
    this.marcarNavegacion(ruta === "ficha" ? "inicio" : ruta);

    // Al cambiar de pantalla, subir arriba (salvo al cambiar filtros de recursos)
    if (ruta !== "recursos" || !this.ultimaRuta?.startsWith("recursos")) window.scrollTo(0, 0);
    this.ultimaRuta = ruta;

    // Animación de entrada de la pantalla
    this.app.classList.remove("entrar");
    void this.app.offsetWidth;            // truco para reiniciar la animación
    this.app.classList.add("entrar");
  },

  /* Resalta el botón activo de la barra inferior */
  marcarNavegacion(ruta) {
    document.querySelectorAll(".barra-nav a").forEach(a => {
      const activo = a.dataset.ruta === ruta || (ruta === "" && a.dataset.ruta === "inicio");
      a.classList.toggle("activo", activo);
      if (activo) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  },

  /* ---------- CLICS ---------- */
  alHacerClic(e) {
    const el = e.target.closest("button, a");
    if (!el) return;

    // ⭐ Estrella de favoritos
    if (el.dataset.fav) {
      const item = Vista.items[el.dataset.fav];
      const activo = Modelo.alternarFavorito(item);
      el.classList.toggle("activa", activo);
      el.textContent = activo ? "★" : "☆";
      el.setAttribute("aria-pressed", activo);
      el.setAttribute("aria-label", (activo ? "Quitar de" : "Añadir a") + " favoritos");
      el.classList.add("pop");
      setTimeout(() => el.classList.remove("pop"), 300);
      // En la pantalla de favoritos, quitar la tarjeta al desmarcar
      if (!activo && location.hash === "#favoritos") setTimeout(() => this.mostrarPantalla(), 250);
      return;
    }

    // Sugerencias del buscador
    if (el.dataset.sugerencia) {
      const input = document.getElementById("inputBuscar");
      input.value = el.dataset.sugerencia;
      this.alEscribir({ target: input });
      return;
    }

    // Palabras rápidas de lengua de signos
    if (el.dataset.signo) { this.abrirSigno(el.dataset.signo); return; }

    // Ver un pictograma en grande
    if (el.dataset.picto) {
      this.modal.innerHTML = Vista.modalPicto(el.dataset.picto, this.palabraPicto);
      this.modal.showModal();
      return;
    }

    // Descargar pictograma
    if (el.dataset.descargar) { this.descargarPicto(el.dataset.descargar, el.dataset.nombre, el); return; }

    // Cerrar ventana
    if (el.hasAttribute("data-cerrar")) this.modal.close();
  },

  /* ---------- FORMULARIOS (pulsar Buscar / Intro) ---------- */
  alEnviar(e) {
    e.preventDefault();
    if (e.target.id === "formPictos") this.buscarPictos(document.getElementById("inputPictos").value);
    if (e.target.id === "formSignos") this.abrirSigno(document.getElementById("inputSignos").value);
    if (e.target.id === "formBuscar") document.getElementById("inputBuscar").blur();  // cierra el teclado
  },

  /* ---------- BUSCADOR: resultados mientras se escribe ---------- */
  alEscribir(e) {
    if (e.target.id !== "inputBuscar") return;
    const consulta = e.target.value;
    document.getElementById("resultados").innerHTML = Vista.resultadosBusqueda(consulta);
    // Guarda la búsqueda en la dirección sin crear historial
    history.replaceState(null, "", "#buscar/" + encodeURIComponent(consulta));
  },

  /* ---------- PICTOGRAMAS ---------- */
  async buscarPictos(palabra) {
    palabra = palabra.trim();
    if (!palabra) return;
    this.palabraPicto = palabra;
    const caja = document.getElementById("pictosResultados");
    caja.innerHTML = `<p class="cargando">Buscando pictogramas…</p>`;
    try {
      const ids = await Modelo.buscarPictogramas(palabra);
      caja.innerHTML = Vista.rejillaPictos(ids, palabra);
    } catch (err) {
      caja.innerHTML = `<p class="vacio">No se ha podido conectar con ARASAAC. Revisa tu conexión a internet.</p>`;
    }
  },

  /* Descarga la imagen como archivo PNG */
  async descargarPicto(id, nombre, boton) {
    const url = Modelo.urlPictograma(id);
    try {
      boton.textContent = "Descargando…";
      const blob = await (await fetch(url)).blob();
      const enlace = document.createElement("a");
      enlace.href = URL.createObjectURL(blob);
      enlace.download = `${nombre}-arasaac-${id}.png`;
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();
      setTimeout(() => URL.revokeObjectURL(enlace.href), 2000);
      boton.textContent = "✅ Descargado";
    } catch (err) {
      window.open(url, "_blank");     // si falla, se abre la imagen para guardarla a mano
      boton.textContent = "⬇️ Descargar";
    }
  },

  /* ---------- LENGUA DE SIGNOS ---------- */
  abrirSigno(palabra) {
    palabra = palabra.trim();
    if (!palabra) return;
    window.open("https://www.spreadthesign.com/es.es/search/?q=" + encodeURIComponent(palabra), "_blank", "noopener");
  },

  /* ---------- MODO OSCURO ----------
     tema = "oscuro", "claro" o null (null = el que tenga el móvil) */
  aplicarTema(tema) {
    const raiz = document.documentElement;
    if (tema) raiz.dataset.theme = tema === "oscuro" ? "dark" : "light";
    const oscuro = tema ? tema === "oscuro" : matchMedia("(prefers-color-scheme: dark)").matches;
    const btn = document.getElementById("btnTema");
    btn.textContent = oscuro ? "☀️" : "🌙";
    btn.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  },
  cambiarTema() {
    const ahoraOscuro = document.getElementById("btnTema").textContent === "☀️";
    const nuevo = ahoraOscuro ? "claro" : "oscuro";
    Modelo.guardarTema(nuevo);
    this.aplicarTema(nuevo);
  }
};
