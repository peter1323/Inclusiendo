/* =====================================================================
   VISTA  ·  Inclusiendo
   ---------------------------------------------------------------------
   Aquí solo se "dibuja": cada función recibe datos del Modelo y
   devuelve el HTML de una pantalla como texto.
   La Vista NO guarda datos ni escucha clics (eso es del Controlador).
   ===================================================================== */

const Vista = {

  /* Elementos que se pueden marcar con estrella, guardados por id.
     El Controlador los consulta al pulsar una estrella. */
  items: {},

  /* Evita que un texto rompa el HTML (por ejemplo si lleva < o ") */
  esc(texto) {
    return String(texto ?? "").replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },

  /* Botón de estrella de favoritos */
  estrella(item) {
    this.items[item.id] = item;
    const activo = Modelo.esFavorito(item.id);
    return `<button class="estrella ${activo ? "activa" : ""}" data-fav="${item.id}"
              aria-pressed="${activo}" aria-label="${activo ? "Quitar de" : "Añadir a"} favoritos">${activo ? "★" : "☆"}</button>`;
  },

  /* Tarjeta de una app o recurso con enlace externo */
  tarjetaEnlace(item, color) {
    return `
      <li class="enlace aparece" style="--c:${color || "var(--coral)"}">
        <div class="enlace-txt">
          <a href="${this.esc(item.url)}" target="_blank" rel="noopener">${this.esc(item.nombre)} <span aria-hidden="true">↗</span></a>
          <p>${this.esc(item.texto)}</p>
        </div>
        ${this.estrella({ id: Modelo.crearId(item.prefijo || "app", item.nombre + item.url),
                          titulo: item.icono + " " + item.nombre, texto: item.texto, url: item.url, disc: item.disc })}
      </li>`;
  },

  /* Cabecera de las pantallas de herramientas */
  titulo(icono, texto, sub) {
    return `<div class="titulo-pantalla aparece">
              <h1><span aria-hidden="true">${icono}</span> ${texto}</h1>
              ${sub ? `<p>${sub}</p>` : ""}
            </div>`;
  },

  /* ================= PANTALLA: INICIO ================= */
  inicio() {
    const tarjetas = DISCAPACIDADES.map((d, i) => `
      <a class="tarjeta aparece" href="#ficha/${d.id}" style="--c:${d.color}; --i:${i}">
        <span class="tarjeta-emoji" aria-hidden="true">${d.emoji}</span>
        <span class="tarjeta-nombre">${this.esc(d.nombre)}</span>
        <span class="tarjeta-lema">${this.esc(d.lema)}</span>
      </a>`).join("");

    return `
      <section class="hero aparece">
        <h1>¡Hola! 👋</h1>
        <p>Todos los niños son distintos y <strong>todos encajan</strong>.
           La inclusión es un derecho, no un favor.</p>
      </section>
      <h2 class="subtitulo">Elige una necesidad educativa</h2>
      <div class="rejilla">${tarjetas}</div>
      <a class="tarjeta tarjeta-ancha aparece" href="#recursos" style="--c:var(--naranja); --i:${DISCAPACIDADES.length}">
        <span class="tarjeta-emoji" aria-hidden="true">📚</span>
        <span>
          <span class="tarjeta-nombre">Recursos para el aula</span>
          <span class="tarjeta-lema">Cuentos, fichas, lengua de signos y webs</span>
        </span>
      </a>
      <a class="tarjeta tarjeta-ancha aparece" href="#dua" style="--c:var(--turquesa); --i:${DISCAPACIDADES.length + 1}">
        <span class="tarjeta-emoji" aria-hidden="true">♾️</span>
        <span>
          <span class="tarjeta-nombre">Diseño Universal para el Aprendizaje</span>
          <span class="tarjeta-lema">DUA: una clase pensada para todos desde el principio</span>
        </span>
      </a>`;
  },

  /* ================= PANTALLA: FICHA DE UNA DISCAPACIDAD ================= */
  ficha(d) {
    // Contenido de cada sección del acordeón
    const contenido = {
      lista: clave => `<ul class="lista">${d[clave].map(texto => `
          <li class="aparece"><span>${this.esc(texto)}</span>
            ${this.estrella({ id: Modelo.crearId(d.id + "-" + clave, texto),
                              titulo: SECCIONES.find(s => s.clave === clave).icono + " " +
                                      SECCIONES.find(s => s.clave === clave).titulo,
                              texto, disc: d.id })}
          </li>`).join("")}</ul>`,

      actividad: () => `
        <div class="actividad">
          <div class="actividad-cab">
            <div>
              <h3>${this.esc(d.actividad.titulo)}</h3>
              <p class="chip-edad">👧 ${this.esc(d.actividad.edad)}</p>
            </div>
            ${this.estrella({ id: Modelo.crearId(d.id + "-actividad", d.actividad.titulo),
                              titulo: "🎨 Actividad: " + d.actividad.titulo,
                              texto: d.actividad.objetivo + " " + d.actividad.pasos.join(" "), disc: d.id })}
          </div>
          <p><strong>Objetivo:</strong> ${this.esc(d.actividad.objetivo)}</p>
          <ol class="pasos">${d.actividad.pasos.map(p => `<li class="aparece">${this.esc(p)}</li>`).join("")}</ol>
        </div>`,

      apps: () => `<ul class="enlaces">${d.apps.map(a =>
          this.tarjetaEnlace({ ...a, icono: "📱", disc: d.id }, d.color)).join("")}</ul>`,

      // Cuentos y materiales: salen del array RECURSOS filtrando por esta discapacidad
      cuentos: () => {
        const recursos = RECURSOS.filter(r => r.disc.includes(d.id) && r.tipo !== "webs");
        return `<ul class="enlaces">${recursos.map(r => {
                  const tipo = TIPOS_RECURSO.find(t => t.clave === r.tipo);
                  return this.tarjetaEnlace({ ...r, icono: tipo.icono, prefijo: "rec", disc: r.disc[0] }, d.color);
                }).join("")}</ul>
                <a class="btn btn-sec" href="#recursos/todos/${d.id}">Ver todos los recursos de ${this.esc(d.nombre)}</a>`;
      }
    };

    const acordeon = SECCIONES.map((s, i) => {
      const html = contenido[s.clave] ? contenido[s.clave]() : contenido.lista(s.clave);
      return `
        <details class="seccion aparece" style="--i:${i}" ${i === 0 ? "open" : ""}>
          <summary><span class="sec-ico" aria-hidden="true">${s.icono}</span>
                   <span class="sec-tit">${s.titulo}</span>
                   <span class="flecha" aria-hidden="true">⌄</span></summary>
          <div class="seccion-cuerpo">${s.nota ? `<p class="nota">${this.esc(s.nota)}</p>` : ""}${html}</div>
        </details>`;
    }).join("");

    // "Discapacidad auditiva" → "discapacidad auditiva" (pero "TEA" se queda igual)
    let quien = d.nombre.replace(" (autismo)", "");
    if (quien[1] === quien[1].toLowerCase()) quien = quien[0].toLowerCase() + quien.slice(1);

    return `
      <div class="ficha" style="--c:${d.color}">
        <header class="ficha-cab aparece">
          <a href="#inicio" class="volver" aria-label="Volver al inicio">← Inicio</a>
          <span class="ficha-emoji" aria-hidden="true">${d.emoji}</span>
          <h1>${this.esc(d.nombre)}</h1>
          <p>${this.esc(d.lema)}</p>
        </header>
        <p class="nota">Hablamos siempre de <strong>niños con ${this.esc(quien)}</strong>:
           primero va el niño. Cada niño es único.</p>
        ${acordeon}
      </div>`;
  },

  /* ================= PANTALLA: DUA ================= */
  dua() {
    const lista = textos => `<ul class="lista">${textos.map(t => `<li class="aparece"><span>${this.esc(t)}</span></li>`).join("")}</ul>`;
    const principios = DUA.principios.map((p, i) => `
      <details class="seccion aparece" style="--i:${i}" open>
        <summary><span class="sec-ico" aria-hidden="true">${p.icono}</span>
                 <span class="sec-tit">${this.esc(p.titulo)}</span>
                 <span class="flecha" aria-hidden="true">⌄</span></summary>
        <div class="seccion-cuerpo"><p><strong>${this.esc(p.texto)}</strong></p>${lista(p.ejemplos)}</div>
      </details>`).join("");
    return `
      <div style="--c:var(--turquesa)">
        ${this.titulo("♾️", "Diseño Universal para el Aprendizaje", "Tres principios para que la clase sirva a todos.")}
        ${lista(DUA.intro)}
        <h2 class="subtitulo">Los tres principios</h2>
        ${principios}
        <h2 class="subtitulo">${this.esc(DUA.ejemplo.titulo)}</h2>
        <ol class="pasos">${DUA.ejemplo.pasos.map(p => `<li class="aparece">${this.esc(p)}</li>`).join("")}</ol>
        <h2 class="subtitulo">Para saber más</h2>
        <ul class="enlaces">${DUA.enlaces.map(e => this.tarjetaEnlace({ ...e, icono: "♾️" }, "var(--turquesa)")).join("")}</ul>
      </div>`;
  },

  /* ================= PANTALLA: RECURSOS ================= */
  recursos(tipo, disc) {
    const chipsTipo = [{ clave: "todos", nombre: "Todos", icono: "✨" }, ...TIPOS_RECURSO].map(t => `
      <a class="chip ${t.clave === tipo ? "activo" : ""}" href="#recursos/${t.clave}/${disc}">${t.icono} ${t.nombre}</a>`).join("");

    const chipsDisc = [{ id: "todas", nombre: "Todas", emoji: "🌈", color: "var(--indigo)" }, ...DISCAPACIDADES].map(d => `
      <a class="chip ${d.id === disc ? "activo" : ""}" style="--c:${d.color}" href="#recursos/${tipo}/${d.id}">${d.emoji} ${this.esc(d.nombre)}</a>`).join("");

    const lista = RECURSOS
      .filter(r => tipo === "todos" || r.tipo === tipo)
      .filter(r => disc === "todas" || r.disc.includes(disc));

    const tarjetas = lista.map(r => {
      const t = TIPOS_RECURSO.find(x => x.clave === r.tipo);
      const color = Modelo.discapacidad(r.disc[0]).color;
      return this.tarjetaEnlace({ ...r, icono: t.icono, prefijo: "rec", disc: r.disc[0] }, color)
        .replace("<p>", `<p class="etiquetas">${t.icono} ${t.nombre} · ${r.disc.map(id => Modelo.discapacidad(id).emoji).join(" ")}</p><p>`);
    }).join("");

    return `
      ${this.titulo("📚", "Recursos para el aula", "Cuentos, fichas, lengua de signos y webs fiables.")}
      <p class="filtro-tit">Tipo</p>
      <div class="chips">${chipsTipo}</div>
      <p class="filtro-tit">Necesidad</p>
      <div class="chips chips-scroll">${chipsDisc}</div>
      <p class="contador">${lista.length} recursos</p>
      <ul class="enlaces">${tarjetas || `<li class="vacio">No hay recursos con estos filtros.</li>`}</ul>`;
  },

  /* ================= PANTALLA: BUSCAR ================= */
  buscar(consulta) {
    const sugerencias = ["pictograma", "cuento", "ruido", "agenda", "signos", "texturas", "rabietas", "pulsador"]
      .map(p => `<button class="chip" data-sugerencia="${p}">${p}</button>`).join("");
    return `
      ${this.titulo("🔍", "Buscar", "Escribe una palabra y verás las adaptaciones y recursos relacionados.")}
      <form class="buscador" id="formBuscar" role="search">
        <input id="inputBuscar" type="search" placeholder="Ej.: pictograma, cuento, ruido…"
               value="${this.esc(consulta)}" autocomplete="off" aria-label="Buscar">
      </form>
      <div class="chips">${sugerencias}</div>
      <div id="resultados">${this.resultadosBusqueda(consulta)}</div>`;
  },

  /* Solo la lista de resultados (se repinta al escribir) */
  resultadosBusqueda(consulta) {
    if (!consulta || consulta.trim().length < 2) return "";
    const res = Modelo.buscar(consulta);
    if (!res.length) return `<p class="vacio">No he encontrado nada con «${this.esc(consulta)}». Prueba otra palabra.</p>`;
    return `<p class="contador">${res.length} resultados</p>
            <ul class="resultados">${res.slice(0, 80).map(el => this.tarjetaGuardada(el)).join("")}</ul>`;
  },

  /* Tarjeta usada en Buscar y en Favoritos */
  tarjetaGuardada(el) {
    const d = Modelo.discapacidad(el.disc);
    const color = d ? d.color : "var(--coral)";
    return `
      <li class="resultado aparece" style="--c:${color}">
        <div class="enlace-txt">
          <p class="etiquetas">${d ? `<a href="#ficha/${d.id}">${d.emoji} ${this.esc(d.nombre)}</a> · ` : ""}${this.esc(el.titulo)}</p>
          ${el.url ? `<a href="${this.esc(el.url)}" ${el.url[0] === "#" ? "" : `target="_blank" rel="noopener"`} class="res-enlace">Abrir enlace ↗</a>` : ""}
          <p>${this.esc(el.texto)}</p>
        </div>
        ${this.estrella(el)}
      </li>`;
  },

  /* ================= PANTALLA: PICTOGRAMAS (ARASAAC) ================= */
  pictos() {
    return `
      ${this.titulo("🖼️", "Pictogramas", "Busca pictogramas de ARASAAC para tus agendas, carteles y cuentos.")}
      <form class="buscador" id="formPictos" role="search">
        <input id="inputPictos" type="search" placeholder="Ej.: comer, baño, jugar…" autocomplete="off" aria-label="Palabra">
        <button class="btn" type="submit">Buscar</button>
      </form>
      <p class="aviso-red">Necesita conexión a internet.</p>
      <div id="pictosResultados" class="rejilla-pictos"></div>
      ${this.creditoArasaac()}`;
  },

  /* Rejilla de pictogramas encontrados */
  rejillaPictos(ids, palabra) {
    if (!ids.length) return `<p class="vacio">No hay pictogramas para «${this.esc(palabra)}».</p>`;
    return ids.map(id => `
      <button class="picto aparece" data-picto="${id}" aria-label="Ver pictograma de ${this.esc(palabra)} en grande">
        <img src="${Modelo.urlPictograma(id)}" alt="${this.esc(palabra)}" loading="lazy" width="150" height="150">
      </button>`).join("");
  },

  /* Ventana con el pictograma en grande */
  modalPicto(id, palabra) {
    return `
      <div class="modal-caja">
        <img src="${Modelo.urlPictograma(id)}" alt="${this.esc(palabra)}" width="300" height="300">
        <p class="modal-palabra">${this.esc(palabra)}</p>
        <div class="modal-botones">
          <button class="btn" data-descargar="${id}" data-nombre="${this.esc(palabra)}">⬇️ Descargar</button>
          <button class="btn btn-sec" data-cerrar>Cerrar</button>
        </div>
        ${this.creditoArasaac()}
      </div>`;
  },

  creditoArasaac() {
    return `<p class="credito">Autor pictogramas: Sergio Palao. Origen: ARASAAC
      (<a href="https://arasaac.org" target="_blank" rel="noopener">https://arasaac.org</a>).
      Licencia: CC BY-NC-SA. Propiedad: Gobierno de Aragón (España).</p>`;
  },

  /* ================= PANTALLA: LENGUA DE SIGNOS ================= */
  signos() {
    const palabras = ["hola", "agua", "baño", "comer", "jugar", "gracias", "mamá", "papá", "casa", "perro"]
      .map(p => `<button class="chip" data-signo="${p}">${p}</button>`).join("");
    return `
      ${this.titulo("🤟", "Lengua de signos", "Escribe una palabra y verás su signo en vídeo en Spreadthesign.")}
      <form class="buscador" id="formSignos" role="search">
        <input id="inputSignos" type="search" placeholder="Ej.: agua, jugar, gracias…" autocomplete="off" aria-label="Palabra">
        <button class="btn" type="submit">Ver signo</button>
      </form>
      <p class="filtro-tit">Palabras útiles en el aula</p>
      <div class="chips">${palabras}</div>
      <h2 class="subtitulo">Diccionarios y recursos</h2>
      <ul class="enlaces">
        ${this.tarjetaEnlace({ nombre: "DILSE · Fundación CNSE", icono: "🤟", disc: "auditiva",
             texto: "Diccionario normativo de la lengua de signos española, con vídeos.", url: "https://fundacioncnse-dilse.org" }, "#9575CD")}
        ${this.tarjetaEnlace({ nombre: "Spreadthesign", icono: "🤟", disc: "auditiva",
             texto: "Diccionario de signos en vídeo de muchas lenguas de signos.", url: "https://www.spreadthesign.com/es.es/" }, "#9575CD")}
        ${this.tarjetaEnlace({ nombre: "LSE en el aula 0-6 (CNSE)", icono: "🤟", disc: "auditiva",
             texto: "Canciones, cuentos y juegos en LSE para Infantil.", url: "https://cnse.es/lseaula/" }, "#9575CD")}
      </ul>
      <p class="aviso-red">Se abre en una pestaña nueva y necesita conexión.</p>`;
  },

  /* ================= PANTALLA: FAVORITOS ================= */
  favoritos() {
    const favs = Modelo.leerFavoritos();
    const lista = favs.length
      ? `<ul class="resultados">${favs.map(f => this.tarjetaGuardada(f)).join("")}</ul>`
      : `<div class="vacio grande aparece"><span aria-hidden="true">⭐</span>
           <p>Aún no tienes favoritos.</p>
           <p>Pulsa la estrella ☆ junto a una adaptación o un recurso para guardarlo aquí.</p></div>`;
    return `${this.titulo("⭐", "Favoritos", "Se guardan en este dispositivo.")}${lista}`;
  }
};
