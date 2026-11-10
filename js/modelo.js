/* =====================================================================
   MODELO  ·  Inclusiendo
   ---------------------------------------------------------------------
   Aquí están TODOS los datos de la app:
     1) DISCAPACIDADES → una ficha por cada discapacidad.
     2) RECURSOS       → cuentos, fichas, lengua de signos y webs.
     3) Funciones para guardar favoritos, el tema y buscar.

   ✏️ PARA EDITAR EL CONTENIDO solo hay que tocar los dos arrays.
   Cada línea de texto es un elemento de una lista: "texto",
   Cada app o recurso es un objeto: { nombre, texto, url }
   ===================================================================== */


/* ---------------------------------------------------------------------
   Títulos e iconos de las secciones de cada ficha (acordeón).
   El orden de este array es el orden en el que salen en la ficha.
   --------------------------------------------------------------------- */
const SECCIONES = [
  { clave: "caracteristicas", titulo: "Características y limitaciones", icono: "📋" },
  { clave: "comunicacion",    titulo: "Adaptaciones de comunicación",   icono: "💬" },
  { clave: "materiales",      titulo: "Adaptaciones de materiales",     icono: "✂️" },
  { clave: "espacio",         titulo: "Adaptaciones del espacio",       icono: "🏫" },
  { clave: "tiempos",         titulo: "Tiempos y rutinas",              icono: "⏰" },
  { clave: "actividad",       titulo: "Ejemplo de actividad adaptada",  icono: "🎨" },
  { clave: "apps",            titulo: "Apps y recursos recomendados",   icono: "📱" },
  { clave: "cuentos",         titulo: "Cuentos y materiales para el aula", icono: "📖" }
];


/* ---------------------------------------------------------------------
   1) DISCAPACIDADES
   --------------------------------------------------------------------- */
const DISCAPACIDADES = [

  /* ============================ TEA ============================ */
  {
    id: "tea",
    nombre: "TEA (autismo)",
    emoji: "🧩",
    color: "#F28B82",          // color principal (coral)
    lema: "Anticipar y hacerlo visual",
    caracteristicas: [
      "Dificultades en la comunicación: puede no hablar, repetir palabras (ecolalia) o no usar el lenguaje para pedir.",
      "Dificultades en la interacción social: poco contacto visual, juego en solitario y dificultad para entender emociones y turnos.",
      "Conductas e intereses repetitivos.",
      "Rigidez: necesita rutinas y le cuestan los cambios.",
      "Sensibilidad sensorial alta o baja (ruido, luz, tacto, texturas).",
      "Aprende mejor con lo visual que con lo oral."
    ],
    comunicacion: [
      "Frases cortas y concretas: «Coge el lápiz», no «¿Te apetece pintar?».",
      "Acompaña cada instrucción con un pictograma de ARASAAC o un objeto real.",
      "Llámale por su nombre antes de darle una consigna.",
      "Tablero de comunicación con pictogramas (AraBoard) para pedir: agua, baño, ayuda, descanso.",
      "Dale tiempo para responder: espera unos segundos sin repetir enseguida.",
      "Usa historias sociales para explicar situaciones nuevas (excursión, médico, fiesta)."
    ],
    materiales: [
      "Agenda visual de la jornada con pictogramas de ARASAAC (velcro: se quita lo que ya se ha hecho).",
      "Secuencias visuales de pasos: lavarse las manos, ponerse el abrigo.",
      "Tarjetas «primero… después…» para motivar.",
      "Fichas con poca información y fondo limpio.",
      "Materiales relacionados con sus intereses (trenes, dinosaurios…) para enganchar.",
      "Cascos antirruido y objetos sensoriales (pelota antiestrés, mordedor)."
    ],
    espacio: [
      "Rincones bien delimitados y señalizados con pictogramas (juego, asamblea, trabajo).",
      "Rincón de la calma: tranquilo, con cojines y poca luz.",
      "Sitio fijo en la asamblea, lejos de puertas y ventanas ruidosas.",
      "Evitar paredes muy cargadas de dibujos y colores.",
      "Cajas y estanterías con foto o pictograma de lo que contienen."
    ],
    tiempos: [
      "Rutinas fijas y siempre en el mismo orden.",
      "Anticipa los cambios con la agenda visual («hoy viene la música»).",
      "Avisa de las transiciones: «5 minutos y recogemos» con temporizador visual.",
      "Tareas cortas con descansos programados.",
      "Señal clara de inicio y final de cada actividad (pictograma «terminado»)."
    ],
    actividad: {
      titulo: "Asamblea de los buenos días",
      edad: "3-5 años",
      objetivo: "Participar en la asamblea y anticipar el día.",
      pasos: [
        "Antes: preparar la agenda del día con pictogramas de ARASAAC y su foto en la lista de clase.",
        "Saludo con canción siempre igual; el niño con TEA pega su foto en «¿Quién ha venido?».",
        "Cada niño elige el tiempo que hace señalando un pictograma (sol, nube, lluvia).",
        "Repasamos la agenda: el niño con TEA quita el pictograma de «asamblea» al terminar.",
        "Si le agobia el ruido, puede usar cascos o sentarse en el extremo del círculo.",
        "Evaluación: ¿anticipa lo que viene? ¿señala o pide con pictogramas?"
      ]
    },
    apps: [
      { nombre: "ARASAAC", texto: "Banco gratuito de pictogramas del Gobierno de Aragón para agendas, carteles y cuentos adaptados.", url: "https://arasaac.org" },
      { nombre: "AraBoard", texto: "Crea tableros de comunicación con pictogramas (Constructor) y úsalos en tablet o móvil (Player).", url: "https://giga.cps.unizar.es/affectivelab/araboard.html" },
      { nombre: "AraWord", texto: "Procesador de textos que escribe a la vez texto y pictogramas.", url: "https://arasaac.org/software/araword" },
      { nombre: "Pictotraductor", texto: "Convierte una frase escrita en pictogramas.", url: "https://www.pictotraductor.com" },
      { nombre: "José Aprende", texto: "Cuentos con pictogramas sobre autocuidados, rutinas y emociones (Aprendices Visuales y Fundación Orange).", url: "https://play.google.com/store/apps/details?id=com.orange.joseaprende" },
      { nombre: "Día a Día", texto: "Diario visual con calendario para guardar lo que se hizo cada día con fotos, vídeos o textos.", url: "https://fundacionorange.es/aplicaciones/dia-a-dia/" },
      { nombre: "e-Mintza", texto: "Comunicador gratuito con pictogramas de ARASAAC para formar frases.", url: "https://fundacionorange.es/aplicaciones/e-mintza/" },
      { nombre: "PictoTEA", texto: "Crea frases con pictogramas, permite añadir los tuyos y tachar tareas.", url: "https://play.google.com/store/search?q=pictotea&c=apps" }
    ]
  },

  /* ======================= SÍNDROME DE DOWN ======================= */
  {
    id: "down",
    nombre: "Síndrome de Down",
    emoji: "🤗",
    color: "#4DB6AC",          // turquesa
    lema: "Ver, imitar y repetir",
    caracteristicas: [
      "Discapacidad intelectual de grado variable y ritmo de aprendizaje más lento.",
      "Hipotonía (tono muscular bajo), que afecta a la motricidad gruesa y fina.",
      "Retraso en el lenguaje expresivo: entiende más de lo que dice.",
      "Memoria auditiva a corto plazo limitada; mejor memoria visual.",
      "Problemas frecuentes de audición y visión.",
      "Atención breve, pero muy sociables y aprenden por imitación."
    ],
    comunicacion: [
      "Habla despacio, con frases cortas y mirándole a la cara.",
      "Una instrucción cada vez; espera a que la cumpla antes de dar la siguiente.",
      "Apoya la palabra con gesto, signo o imagen (comunicación bimodal).",
      "Pídele que repita o enseñe lo que ha entendido.",
      "Amplía lo que dice: si dice «agua», respóndele «quieres agua».",
      "Refuerza cada intento de comunicarse, aunque no sea perfecto."
    ],
    materiales: [
      "Fotografías y láminas reales (Soy Visual) para trabajar vocabulario.",
      "Tarjetas de lectura global: palabra + imagen (método Troncoso).",
      "Lápices gruesos o con engrosador, tijeras con muelle, punzones grandes.",
      "Plastilina, pinzas y ensartables para fortalecer la mano.",
      "Fichas con poca información, letra grande y buen contraste."
    ],
    espacio: [
      "Siéntale cerca de la maestra y de la pizarra (posibles problemas de vista u oído).",
      "Junto a un compañero que sea buen modelo para imitar.",
      "Sillas y mesas a su altura, con los pies apoyados (ayuda a la postura).",
      "Espacio para moverse: circuitos de psicomotricidad sencillos."
    ],
    tiempos: [
      "Actividades cortas y variadas: cambia antes de que pierda la atención.",
      "Más tiempo para terminar tareas y para responder.",
      "Repetir mucho y en contextos distintos para afianzar.",
      "Rutinas estables con agenda visual para ganar autonomía.",
      "Descansos de movimiento entre tareas de mesa."
    ],
    actividad: {
      titulo: "Bingo de las frutas",
      edad: "4-5 años",
      objetivo: "Ampliar vocabulario y asociar palabra e imagen.",
      pasos: [
        "Cartones con fotos reales de frutas y su palabra escrita debajo (lectura global).",
        "La maestra saca una fruta de verdad de una bolsa y dice su nombre despacio con un signo.",
        "Los niños buscan la foto y la tapan con una ficha grande, fácil de coger.",
        "El niño con síndrome de Down dice o signa la palabra; se refuerza cualquier intento.",
        "Un compañero «tutor» le ayuda si lo necesita (aprendizaje por imitación).",
        "Final: probar las frutas y nombrarlas otra vez."
      ]
    },
    apps: [
      { nombre: "Soy Visual", texto: "Fotografías, láminas y materiales gráficos para estimular el lenguaje.", url: "https://www.soyvisual.org" },
      { nombre: "Método de lectura global Troncoso", texto: "Primero palabras completas con imagen, después sílabas y después letras. Recursos en la Fundación Síndrome de Down de Cantabria.", url: "https://downcantabria.com" },
      { nombre: "Método LecturaSD (Aula PT)", texto: "Método gratuito con pasos, edades y muchas fichas.", url: "https://www.aulapt.org" },
      { nombre: "José Aprende", texto: "Cuentos con pictogramas para rutinas y autonomía.", url: "https://play.google.com/store/apps/details?id=com.orange.joseaprende" },
      { nombre: "ARASAAC", texto: "Pictogramas para agendas, rutinas y autonomía.", url: "https://arasaac.org" },
      { nombre: "Down21 (Fundación Iberoamericana Down21)", texto: "Artículos y materiales de educación para niños con síndrome de Down.", url: "https://down21.org/educacion/" }
    ]
  },

  /* =================== DISCAPACIDAD INTELECTUAL =================== */
  {
    id: "intelectual",
    nombre: "Discapacidad intelectual",
    emoji: "🧠",
    color: "#F39C12",          // naranja
    lema: "Concreto, paso a paso",
    caracteristicas: [
      "Ritmo de aprendizaje más lento y dificultad para generalizar.",
      "Dificultad con lo abstracto: necesita lo concreto y manipulativo.",
      "Atención y memoria limitadas.",
      "Lenguaje más pobre en vocabulario y estructura.",
      "Dificultades en la autonomía (aseo, vestido, comida).",
      "Le cuesta resolver problemas y adaptarse a situaciones nuevas."
    ],
    comunicacion: [
      "Lenguaje sencillo, frases cortas y palabras conocidas.",
      "Divide las tareas en pasos y da los pasos de uno en uno.",
      "Acompaña cada paso con una imagen (ARASAAC, Pictotraductor).",
      "Demuestra lo que hay que hacer antes de pedírselo (modelado).",
      "Comprueba que ha entendido: «Enséñame qué vas a hacer»."
    ],
    materiales: [
      "Objetos reales y material manipulativo (bloques, regletas, frutas de juguete).",
      "Fichas adaptadas: menos ejercicios, letra grande, una consigna por ficha.",
      "Instrucciones con apoyo visual paso a paso.",
      "Juegos de asociación foto-objeto y clasificación por colores o tamaños.",
      "Secuencias de autonomía (lavarse las manos, vestirse) en el lugar donde se hacen."
    ],
    espacio: [
      "Cerca de la maestra para recibir ayuda rápida.",
      "Rincones organizados y fáciles de reconocer con fotos.",
      "Lugar de trabajo sin distracciones (poco material sobre la mesa).",
      "Trabajo en pequeño grupo o por parejas."
    ],
    tiempos: [
      "Más tiempo y más repeticiones para cada aprendizaje.",
      "Volver a los mismos contenidos en situaciones diferentes (generalizar).",
      "Sesiones cortas con pausas.",
      "Rutinas diarias iguales para ganar autonomía.",
      "Celebrar cada pequeño logro."
    ],
    actividad: {
      titulo: "Hacemos una macedonia",
      edad: "4-6 años",
      objetivo: "Seguir una secuencia de pasos y aprender vocabulario de alimentos.",
      pasos: [
        "Tira de pictogramas en la mesa: lavar manos → pelar → cortar → mezclar → comer.",
        "Fruta real, cuchillo de plástico y cuencos grandes.",
        "La maestra hace cada paso primero y los niños la imitan.",
        "El niño con discapacidad intelectual va tachando o girando cada pictograma al terminarlo.",
        "Se trabajan conceptos concretos: grande/pequeño, muchos/pocos, colores.",
        "Al día siguiente se repite con otras frutas para generalizar."
      ]
    },
    apps: [
      { nombre: "Soy Visual", texto: "Fotos y láminas reales para trabajar el lenguaje.", url: "https://www.soyvisual.org" },
      { nombre: "ARASAAC", texto: "Pictogramas para simplificar instrucciones y acompañar cada paso con imagen.", url: "https://arasaac.org" },
      { nombre: "AraWord", texto: "Escribe textos que salen con pictogramas debajo.", url: "https://arasaac.org/software/araword" },
      { nombre: "Pictotraductor", texto: "Pasa una frase a pictogramas en segundos.", url: "https://www.pictotraductor.com" },
      { nombre: "Aula PT", texto: "Web de maestras de Pedagogía Terapéutica con fichas y adaptaciones descargables.", url: "https://www.aulapt.org" },
      { nombre: "Plena inclusión", texto: "Confederación de entidades de discapacidad intelectual: guías y materiales en lectura fácil.", url: "https://www.plenainclusion.org/publicaciones/" }
    ]
  },

  /* ==================== DISCAPACIDAD MOTÓRICA ==================== */
  {
    id: "motorica",
    nombre: "Discapacidad motórica",
    emoji: "♿",
    color: "#5C6BC0",          // azul índigo
    lema: "Accesible y a su alcance",
    caracteristicas: [
      "Limitación en el movimiento, la postura o el desplazamiento (parálisis cerebral, espina bífida…).",
      "Dificultades en la motricidad fina: lápiz, recortar, manipular.",
      "Puede tener afectada el habla (disartria) o la deglución.",
      "Fatiga con facilidad.",
      "Puede necesitar productos de apoyo: silla de ruedas, andador, pulsadores.",
      "La capacidad intelectual no tiene por qué estar afectada."
    ],
    comunicacion: [
      "Ponte a su altura para hablarle (agáchate o siéntate).",
      "Si le cuesta hablar, da tiempo y no termines sus frases.",
      "Preguntas de sí/no con un gesto acordado (mirar, parpadear, levantar la mano).",
      "Tablero o comunicador con pictogramas al alcance de su mano o mirada.",
      "Comunicador con pulsador: siempre en el mismo sitio y con un pictograma."
    ],
    materiales: [
      "Engrosadores de lápiz, pinceles y cubiertos con mango grueso.",
      "Tijeras adaptadas (de muelle o de mesa) y punzones grandes.",
      "Antideslizante (Dycem) para que el papel y los platos no se muevan.",
      "Piezas y puzles grandes, con pivotes para cogerlos mejor.",
      "Pulsadores conectados a juguetes, tablet u ordenador.",
      "Atril o plano inclinado para ver y trabajar mejor."
    ],
    espacio: [
      "Pasillos anchos y sin obstáculos para la silla o el andador.",
      "Mesa a la altura de la silla de ruedas (o mesa con escotadura).",
      "Materiales a su alcance, en estantes bajos.",
      "Baño adaptado y cambiador cerca del aula.",
      "En psicomotricidad, adaptar el circuito para que todos participen."
    ],
    tiempos: [
      "Más tiempo para desplazarse, vestirse y terminar las tareas.",
      "Alternar tareas de esfuerzo con descanso (se fatiga).",
      "Respetar los cambios de postura que indique la fisioterapeuta.",
      "Prever con tiempo las salidas y excursiones (accesibilidad, transporte)."
    ],
    actividad: {
      titulo: "Pintamos con canicas",
      edad: "3-6 años",
      objetivo: "Expresión plástica y coordinación, con participación de todos.",
      pasos: [
        "Papel dentro de una caja o bandeja con borde; canicas mojadas en pintura.",
        "Cada niño mueve la caja para que las canicas pinten (no hace falta pinza fina).",
        "El niño con discapacidad motórica usa una bandeja con antideslizante sobre su mesa adaptada.",
        "Si no puede mover la bandeja, elige los colores con un pulsador o con la mirada y un compañero la mueve.",
        "Se exponen todas las obras con su nombre.",
        "Evaluación: ¿ha elegido, ha participado, ha disfrutado?"
      ]
    },
    apps: [
      { nombre: "Plaphoons", texto: "Comunicador con pictogramas o escritura; graba frases o las dice con voz sintética. Del Projecte Fressa (Jordi Lagares).", url: "http://www.xtec.cat/~jlagares/" },
      { nombre: "Plaphoons para Android", texto: "Versión para móvil o tablet del comunicador Plaphoons.", url: "https://play.google.com/store/search?q=plaphoons&c=apps" },
      { nombre: "Rata Plaphoons", texto: "Para manejar el ratón del ordenador con un pulsador (Projecte Fressa).", url: "http://www.xtec.cat/~jlagares/" },
      { nombre: "HeadMouse", texto: "Ratón virtual gratuito que se controla con la cabeza usando una webcam (Universitat de Lleida).", url: "http://robotica.udl.cat/catedra/headmouse/headmouse.html" },
      { nombre: "AsTeRICS Grid", texto: "Comunicador por voz personalizable que funciona sin conexión, en el navegador.", url: "https://grid.asterics.eu" },
      { nombre: "Comunicador sencillo con pulsador", texto: "Ponlo siempre en el mismo sitio, márcalo con un pictograma y da tiempo para responder.", url: "https://arasaac.org/aac/es" },
      { nombre: "CEAPAT", texto: "Centro estatal de autonomía personal y ayudas técnicas: información sobre productos de apoyo.", url: "https://ceapat.imserso.es" }
    ]
  },

  /* ==================== DISCAPACIDAD AUDITIVA ==================== */
  {
    id: "auditiva",
    nombre: "Discapacidad auditiva",
    emoji: "👂",
    color: "#9575CD",          // lila
    lema: "Que lo vea todo",
    caracteristicas: [
      "Dificultad para acceder al lenguaje oral: vocabulario, pronunciación y comprensión.",
      "No se entera de las instrucciones orales ni de lo que pasa a su espalda.",
      "Depende de la vista: lectura labial, gestos y lengua de signos.",
      "Puede llevar audífonos o implante coclear.",
      "Puede aislarse en actividades en grupo o con mucho ruido.",
      "Se cansa por el esfuerzo de atención constante."
    ],
    comunicacion: [
      "Llama su atención antes de hablar (tocar el hombro, gesto, luz).",
      "Habla de frente, con la cara iluminada y sin taparte la boca.",
      "Vocaliza bien, sin exagerar ni gritar.",
      "Apoya lo que dices con signos de LSE, gestos e imágenes.",
      "Aprende con la clase signos básicos: hola, agua, baño, jugar, bien, ayuda.",
      "En la asamblea, señala a quién le toca hablar para que pueda mirarle."
    ],
    materiales: [
      "Agenda visual y pictogramas para todas las rutinas.",
      "Cuentos con imágenes grandes y cuentos signados (TeCuento, Mi baúl).",
      "Tarjetas con signo + dibujo + palabra.",
      "Avisos luminosos o visuales (por ejemplo, encender y apagar la luz para recoger).",
      "Revisar cada día que el audífono o implante funciona y tiene pila."
    ],
    espacio: [
      "Asamblea en círculo o en U: así ve la cara de todos.",
      "Siéntale cerca de la maestra y con la luz de la ventana a su espalda.",
      "Reducir el ruido: fieltro en las patas de las sillas, alfombras, cerrar puertas.",
      "Carteles con imágenes en rincones y puertas."
    ],
    tiempos: [
      "Pausas: leer los labios cansa mucho.",
      "Anticipa con la agenda visual lo que va a pasar.",
      "Repite o resume lo importante de forma visual al final.",
      "Da tiempo para mirar: primero mira el objeto, luego te mira a ti y después escucha."
    ],
    actividad: {
      titulo: "Canción de los animales signada",
      edad: "3-6 años",
      objetivo: "Aprender vocabulario de animales en LSE y en castellano oral, todos juntos.",
      pasos: [
        "Antes: buscar los signos de cada animal en Spreadthesign o en el DILSE.",
        "Presentar cada animal con un muñeco o una foto grande, su signo y su nombre.",
        "Cantar la canción despacio mientras toda la clase hace los signos.",
        "Juego: la maestra hace un signo y los niños buscan el muñeco correcto.",
        "El niño sordo puede ser el «profe de signos» (refuerza su autoestima).",
        "Cartel en la clase con las fotos de los signos aprendidos."
      ]
    },
    apps: [
      { nombre: "DILSE", texto: "Diccionario oficial de lengua de signos española de la Fundación CNSE, con miles de signos.", url: "https://fundacioncnse-dilse.org" },
      { nombre: "DILSE (app)", texto: "El diccionario DILSE en el móvil. Incluye signos por temas para comunicarse con niños pequeños.", url: "https://play.google.com/store/apps/details?id=com.tresandroides.dilse" },
      { nombre: "Spreadthesign", texto: "Diccionario online con vídeos de signos de muchas lenguas de signos, incluida la española.", url: "https://www.spreadthesign.com/es.es/" },
      { nombre: "TeCuento (CNSE)", texto: "Cuentos infantiles en lengua de signos española.", url: "https://tecuentoweb.org/" },
      { nombre: "¡Dilo con las manos!", texto: "Juegos y retos para aprender lo básico de la LSE (Android).", url: "https://play.google.com/store/search?q=dilo%20con%20las%20manos&c=apps" },
      { nombre: "Transcripción instantánea (Google)", texto: "Pasa a texto lo que se habla en tiempo real.", url: "https://play.google.com/store/apps/details?id=com.google.audio.hearing.visualization.accessibility.scribe" },
      { nombre: "Vocabulario temprano en LSE (CNSE)", texto: "Primeras palabras en signos para trabajar con los más pequeños.", url: "https://fundacioncnse.org/cdi/" }
    ]
  },

  /* ===================== DISCAPACIDAD VISUAL ===================== */
  {
    id: "visual",
    nombre: "Discapacidad visual",
    emoji: "👁️",
    color: "#42A5F5",          // azul cielo
    lema: "Tocar, oír y explorar",
    caracteristicas: [
      "Puede ser ceguera total o baja visión.",
      "Dificultad para acceder a la información visual: imágenes, pizarra, gestos.",
      "Retraso en la motricidad y el desplazamiento, y miedo a explorar.",
      "Le cuesta aprender por imitación.",
      "Usa mucho el tacto y el oído.",
      "Puede tener movimientos repetitivos (frotarse los ojos, balancearse)."
    ],
    comunicacion: [
      "Di su nombre al hablarle y di el tuyo al acercarte.",
      "Describe en voz alta lo que pasa y lo que haces («ahora reparto las pinturas»).",
      "Evita palabras vagas como «aquí» o «eso»: di «encima de la mesa», «a tu derecha».",
      "Avisa cuando te vas, para que no hable solo.",
      "Guía su mano sobre los objetos (mano bajo mano) para enseñarle."
    ],
    materiales: [
      "Materiales táctiles: texturas, relieves, objetos reales en lugar de dibujos.",
      "Cuentos con texturas y libros en braille o con relieve (ONCE).",
      "Juguetes sonoros: pelotas con cascabel, instrumentos.",
      "Baja visión: alto contraste (negro sobre amarillo), letra grande, rotulador grueso.",
      "Etiquetas táctiles en cajas y perchas (un objeto pegado o un relieve).",
      "Lupa, atril y buena luz si tiene resto visual."
    ],
    espacio: [
      "Aula ordenada: cada cosa siempre en su sitio.",
      "Avisar de cualquier cambio de mobiliario y recorrerlo con él.",
      "Puertas totalmente abiertas o cerradas (nunca a medias).",
      "Referencias táctiles o sonoras en los rincones (una alfombra, un móvil sonoro).",
      "Buena iluminación sin reflejos ni deslumbramientos."
    ],
    tiempos: [
      "Más tiempo para explorar con las manos antes de empezar.",
      "Anticipar las rutinas con objetos de referencia (una cuchara = comer).",
      "Repetir los recorridos (aula, baño, patio) hasta que los haga solo.",
      "Pausas: el esfuerzo de atención auditiva y táctil cansa."
    ],
    actividad: {
      titulo: "La caja de las sorpresas",
      edad: "3-5 años",
      objetivo: "Explorar con el tacto, describir texturas y ampliar vocabulario.",
      pasos: [
        "Caja con agujero y objetos con texturas distintas: esponja, piña, peluche, piedra lisa.",
        "Cada niño mete la mano, describe lo que nota (suave, rugoso, frío) y adivina qué es.",
        "Todos los niños juegan con los ojos tapados: el niño con discapacidad visual es el experto.",
        "Se asocia cada objeto con un sonido o una canción.",
        "Mural táctil de la clase con las texturas pegadas y etiquetas en braille.",
        "Si tiene baja visión, objetos de colores vivos sobre fondo negro."
      ]
    },
    apps: [
      { nombre: "Recursos educativos de la ONCE", texto: "Base de datos pública de recursos materiales y digitales para alumnado con discapacidad visual.", url: "https://educacion.once.es" },
      { nombre: "Equipos específicos de la ONCE", texto: "A quién pedir apoyo, orientación y material adaptado para el alumno.", url: "https://educacion.once.es" },
      { nombre: "Seeing AI", texto: "App de Microsoft que describe en voz alta objetos, personas y textos.", url: "https://www.seeingai.com" },
      { nombre: "Be My Eyes", texto: "Conecta con voluntarios o una IA que describen lo que enfoca la cámara.", url: "https://www.bemyeyes.com" }
    ]
  },

  /* ===================== PROBLEMAS DE CONDUCTA ===================== */
  {
    id: "conducta",
    nombre: "Problemas de conducta",
    emoji: "🌱",
    color: "#81C784",          // verde
    lema: "Calma, normas claras y cariño",
    caracteristicas: [
      "Rabietas frecuentes e intensas para su edad.",
      "Dificultad para aceptar normas y límites.",
      "Impulsividad: pegar, empujar, quitar juguetes.",
      "Poca tolerancia a la frustración y a la espera.",
      "Dificultad para regular y expresar emociones.",
      "Afecta a la relación con los compañeros; puede buscar atención con conductas negativas."
    ],
    comunicacion: [
      "Habla con calma y voz baja, sobre todo en una rabieta.",
      "Di lo que tiene que hacer, no lo que no: «Camina despacio» en vez de «No corras».",
      "Pon nombre a la emoción: «Estás enfadado porque querías el coche».",
      "Elogia en concreto cuando se porta bien: «¡Qué bien has esperado tu turno!».",
      "Ofrece elecciones sencillas: «¿Recoges los coches o los bloques?».",
      "Habla de lo ocurrido cuando ya esté tranquilo, no durante la rabieta."
    ],
    materiales: [
      "Cartel de normas de clase con pictogramas de ARASAAC (pocas y en positivo).",
      "Termómetro o semáforo de las emociones.",
      "Temporizador visual (Time Timer) para esperas y transiciones.",
      "Rincón de la calma con botella de la calma, cojines y cuentos de emociones.",
      "Economía de fichas sencilla: pegatinas por conductas positivas."
    ],
    espacio: [
      "Siéntale cerca de la maestra y lejos de distracciones o de conflictos habituales.",
      "Rincón de la calma: un lugar para tranquilizarse, nunca un castigo.",
      "Espacios amplios para evitar choques y empujones.",
      "Material suficiente para que no haya peleas (dos juguetes iguales)."
    ],
    tiempos: [
      "Anticipa con agenda visual: saber qué viene reduce las rabietas.",
      "Avisa antes de cada cambio («dos minutos y recogemos»).",
      "Esperas cortas y con algo que hacer.",
      "Tiempos de movimiento entre actividades tranquilas.",
      "Responsabilidades diarias (repartir vasos) para que se sienta importante."
    ],
    actividad: {
      titulo: "El semáforo de las emociones",
      edad: "3-6 años",
      objetivo: "Reconocer las emociones y aprender a calmarse.",
      pasos: [
        "Mural con un semáforo: rojo = paro (estoy muy enfadado), amarillo = respiro, verde = lo soluciono.",
        "Cuento sobre una rabieta y lo hablamos en la asamblea.",
        "Practicamos respiraciones: «oler la flor y soplar la vela».",
        "Cada niño coloca su foto en el color de cómo se siente al llegar.",
        "Cuando el niño se enfada, se le acompaña al semáforo y al rincón de la calma.",
        "Se celebra cuando consigue pasar al verde."
      ]
    },
    apps: [
      { nombre: "Pictogramas de normas (ARASAAC)", texto: "Para hacer carteles con las normas de la clase.", url: "https://arasaac.org" },
      { nombre: "Time Timer", texto: "Temporizador visual con un disco de color que baja; ayuda en las transiciones.", url: "https://www.timetimer.com" },
      { nombre: "Bouncy Balls", texto: "Web con pelotas que saltan más cuanto más ruido hay en clase.", url: "https://bouncyballs.org" },
      { nombre: "ClassDojo", texto: "Puntos por conductas positivas, como una economía de fichas digital.", url: "https://www.classdojo.com/es-es/" },
      { nombre: "Día a Día", texto: "Agenda con fotos y pictogramas: anticipar lo que va a pasar reduce las rabietas.", url: "https://fundacionorange.es/aplicaciones/dia-a-dia/" }
    ]
  }
];


/* ---------------------------------------------------------------------
   2) RECURSOS PARA EL AULA
   tipo: "cuentos" | "fichas" | "signos" | "webs"
   disc: lista de ids de DISCAPACIDADES a las que sirve
   --------------------------------------------------------------------- */
const TIPOS_RECURSO = [
  { clave: "cuentos", nombre: "Cuentos",             icono: "📖" },
  { clave: "fichas",  nombre: "Fichas y materiales", icono: "✂️" },
  { clave: "signos",  nombre: "Lengua de signos",    icono: "🤟" },
  { clave: "webs",    nombre: "Webs de recursos",    icono: "🌐" }
];

const RECURSOS = [
  /* ---- Cuentos adaptados ---- */
  { tipo: "cuentos", disc: ["tea", "intelectual", "down"], nombre: "Cuentos de Aprendices Visuales",
    texto: "Cuentos con pictogramas sobre rutinas, autonomía y emociones.", url: "https://plataformaescuelasvisuales.com/p/cuentospictogramas" },
  { tipo: "cuentos", disc: ["tea", "intelectual", "down"], nombre: "Cuentos con pictogramas (Actividades de Infantil y Primaria)",
    texto: "Cuentos cortos con pictogramas en PDF para iniciar la lectura y para alumnos con NEE.", url: "https://www.actividadesdeinfantilyprimaria.com" },
  { tipo: "cuentos", disc: ["tea", "intelectual", "down"], nombre: "Cuentos adaptados de Orientación Andújar",
    texto: "Cuentos clásicos y populares adaptados con pictogramas para descargar.", url: "https://www.orientacionandujar.es" },
  { tipo: "cuentos", disc: ["tea", "intelectual", "motorica", "auditiva"], nombre: "Xandre, el elefante sin sombra (TADEGa)",
    texto: "Cuento interactivo, adaptado y accesible en diferentes sistemas de comunicación.", url: "https://tadega.net" },
  { tipo: "cuentos", disc: ["auditiva"], nombre: "TeCuento (CNSE)",
    texto: "Biblioteca de cuentos infantiles en lengua de signos española.", url: "https://tecuentoweb.org/" },
  { tipo: "cuentos", disc: ["auditiva"], nombre: "Cuentos para prevenir (CNSE)",
    texto: "Cuentos y relatos infantiles en lengua de signos sobre prevención y hábitos saludables.", url: "https://fundacioncnse.org/cuentosdrogas2/" },
  { tipo: "cuentos", disc: ["auditiva"], nombre: "Signacuentos (Editorial Carambuco)",
    texto: "Cuentos adaptados a la lengua de signos, para niños sordos y oyentes.", url: "https://www.signacuentos.com" },
  { tipo: "cuentos", disc: ["visual"], nombre: "Cuentos con texturas de la ONCE",
    texto: "Libros adaptados al tacto para niños con discapacidad visual (búscalos en su catálogo).", url: "https://educacion.once.es" },
  { tipo: "cuentos", disc: ["auditiva"], nombre: "Mi baúl de lengua de signos (CNSE)",
    texto: "Biblioteca gratuita de cuentos y canciones en lengua de signos, ordenados por edad.", url: "https://mibaul.fundacioncnse.org/" },
  { tipo: "cuentos", disc: ["tea", "conducta", "intelectual", "down"], nombre: "Cuentos para crecer",
    texto: "Cuentos gratuitos para trabajar emociones, valores y convivencia.", url: "https://cuentosparacrecer.org/" },

  /* ---- Fichas y materiales ---- */
  { tipo: "fichas", disc: ["tea", "down", "intelectual", "motorica", "conducta"], nombre: "Catálogo de materiales de ARASAAC",
    texto: "Miles de materiales hechos con pictogramas (agendas, tableros, juegos, cuentos) con buscador y filtros.", url: "https://arasaac.org/materials/search" },
  { tipo: "fichas", disc: ["tea", "motorica", "intelectual"], nombre: "Aula Abierta de ARASAAC",
    texto: "Tutoriales y materiales de comunicación aumentativa: tableros, cuadernos y libros de comunicación.", url: "https://aulaabierta.arasaac.org" },
  { tipo: "fichas", disc: ["tea", "intelectual", "motorica"], nombre: "Picto Selector",
    texto: "Programa para crear e imprimir tableros y actividades con pictogramas.", url: "https://www.pictoselector.eu/es/" },
  { tipo: "fichas", disc: ["tea", "down", "intelectual", "conducta"], nombre: "Orientación Andújar",
    texto: "Blog con muchísimas fichas, pictogramas y materiales para NEAE e Infantil.", url: "https://www.orientacionandujar.es" },
  { tipo: "fichas", disc: ["tea", "down", "intelectual"], nombre: "Actividades de Infantil y Primaria (NEAE)",
    texto: "Fichas, frases con pictogramas, instrucciones con apoyo visual y material TEA.", url: "https://www.actividadesdeinfantilyprimaria.com" },
  { tipo: "fichas", disc: ["down", "intelectual"], nombre: "Aula PT – Infantil",
    texto: "Fichas y adaptaciones de Pedagogía Terapéutica para Educación Infantil.", url: "https://www.aulapt.org/tag/infantil/" },
  { tipo: "fichas", disc: ["visual"], nombre: "Recursos educativos de la ONCE",
    texto: "Materiales táctiles, sonoros y digitales para alumnos con ceguera o baja visión.", url: "https://educacion.once.es" },
  { tipo: "fichas", disc: ["auditiva"], nombre: "Matemáticas visuales (CNSE)",
    texto: "Recursos visuales y en LSE para trabajar números y conceptos matemáticos.", url: "https://fundacioncnse.org/educa/matematicas/" },

  /* ---- Lengua de signos ---- */
  { tipo: "signos", disc: ["auditiva"], nombre: "LSE en el aula 0-6 (CNSE)",
    texto: "Propuestas, pautas y recursos para trabajar la LSE en Infantil: canciones, cuentos, juegos y diálogos.", url: "https://cnse.es/lseaula/" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Canciones en LSE para 0-6 años (CNSE)",
    texto: "Canciones infantiles signadas en vídeo para cantar en clase.", url: "https://cnse.es/lseaula/0-6/canciones-0-6.php" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Cuentos en LSE para 0-6 años (CNSE)",
    texto: "Cuentos signados para Infantil dentro de LSE en el aula.", url: "https://cnse.es/lseaula/0-6/cuentos-0-6.php" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Juegos en LSE para 0-6 años (CNSE)",
    texto: "Juegos para aprender signos jugando en el aula de Infantil.", url: "https://cnse.es/lseaula/0-6/juegos-0-6.php" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Banco de imágenes y signos (Fundación CNSE)",
    texto: "Imágenes y signos para crear materiales para alumnado sordo de Infantil y Primaria.", url: "https://fundacioncnse.org/educa/bancolse/" },
  { tipo: "signos", disc: ["auditiva"], nombre: "DILSE – Diccionario de LSE",
    texto: "Diccionario normativo de la lengua de signos española con vídeos.", url: "https://fundacioncnse-dilse.org" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Spreadthesign",
    texto: "Diccionario de signos en vídeo, con la lengua de signos española.", url: "https://www.spreadthesign.com/es.es/" },
  { tipo: "signos", disc: ["auditiva"], nombre: "LSE TIC: crea tus juegos (CNSE)",
    texto: "Herramienta para crear juegos educativos con signos.", url: "https://fundacioncnse.org/educa/lsetic/" },
  { tipo: "signos", disc: ["auditiva"], nombre: "Jugando con cabeza (CNSE)",
    texto: "Juegos y actividades en LSE para familias y aula.", url: "https://jugandoconcabeza.fundacioncnse.org/" },

  /* ---- Webs de recursos ---- */
  { tipo: "webs", disc: ["tea", "down", "intelectual", "motorica", "conducta"], nombre: "ARASAAC",
    texto: "Portal aragonés de comunicación aumentativa: pictogramas, materiales y programas gratuitos.", url: "https://arasaac.org" },
  { tipo: "webs", disc: ["tea"], nombre: "Autismo España",
    texto: "Confederación de entidades de autismo: guías y recursos para familias y escuela.", url: "https://autismo.org.es" },
  { tipo: "webs", disc: ["down"], nombre: "DOWN ESPAÑA",
    texto: "Federación de síndrome de Down: guías y materiales de educación inclusiva.", url: "https://www.sindromedown.org/" },
  { tipo: "webs", disc: ["intelectual", "down"], nombre: "Plena inclusión",
    texto: "Publicaciones y guías sobre discapacidad intelectual y lectura fácil.", url: "https://www.plenainclusion.org/publicaciones/" },
  { tipo: "webs", disc: ["auditiva"], nombre: "Mi hijo sordo (Fundación CNSE)",
    texto: "Información y orientación para familias y profesionales de niños sordos.", url: "https://mihijosordo.org/" },
  { tipo: "webs", disc: ["motorica"], nombre: "CEAPAT",
    texto: "Centro estatal de referencia en productos de apoyo y accesibilidad.", url: "https://ceapat.imserso.es" },
  { tipo: "webs", disc: ["tea", "down", "intelectual", "motorica", "auditiva", "visual", "conducta"], nombre: "INTEF – Recursos educativos",
    texto: "Recursos educativos abiertos del Ministerio de Educación.", url: "https://intef.es/recursos-educativos/" },
  { tipo: "webs", disc: ["tea", "down", "intelectual", "motorica", "auditiva", "visual", "conducta"], nombre: "Procomún (INTEF)",
    texto: "Repositorio de recursos educativos abiertos con buscador por etapa y tema.", url: "https://procomun.intef.es/" },
  { tipo: "webs", disc: ["tea", "intelectual"], nombre: "Proyecto Azahar",
    texto: "Apps gratuitas de comunicación, ocio y autonomía con pictogramas (Universidad de Valencia y Fundación Orange).", url: "https://www.proyectoazahar.org/azahar/" },
  { tipo: "webs", disc: ["visual"], nombre: "Fundación ONCE",
    texto: "Información sobre inclusión y accesibilidad de personas con discapacidad.", url: "https://www.fundaciononce.es/es" }
];


/* ---------------------------------------------------------------------
   3) FUNCIONES DEL MODELO (datos guardados en el móvil y búsquedas)
   --------------------------------------------------------------------- */
const Modelo = {

  /* Busca una discapacidad por su id ("tea", "down"...) */
  discapacidad(id) {
    return DISCAPACIDADES.find(d => d.id === id);
  },

  /* ---------- FAVORITOS (localStorage) ----------
     Cada favorito es un objeto { id, titulo, texto, url, disc }.
     Se guarda el objeto entero para que se vea aunque se edite el array. */
  leerFavoritos() {
    try { return JSON.parse(localStorage.getItem("inclusiendo-favoritos")) || []; }
    catch (e) { return []; }
  },
  guardarFavoritos(lista) {
    try { localStorage.setItem("inclusiendo-favoritos", JSON.stringify(lista)); } catch (e) {}
  },
  esFavorito(id) {
    return this.leerFavoritos().some(f => f.id === id);
  },
  /* Añade o quita un favorito. Devuelve true si ha quedado marcado. */
  alternarFavorito(item) {
    let lista = this.leerFavoritos();
    if (lista.some(f => f.id === item.id)) {
      lista = lista.filter(f => f.id !== item.id);
      this.guardarFavoritos(lista);
      return false;
    }
    lista.push(item);
    this.guardarFavoritos(lista);
    return true;
  },

  /* ---------- TEMA CLARO / OSCURO ---------- */
  leerTema() {
    try { return localStorage.getItem("inclusiendo-tema"); } catch (e) { return null; }
  },
  guardarTema(tema) {
    try { localStorage.setItem("inclusiendo-tema", tema); } catch (e) {}
  },

  /* ---------- BUSCADOR ----------
     Quita tildes y mayúsculas para que "pictográma" encuentre "pictograma". */
  normalizar(texto) {
    return (texto || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  },

  /* Crea un id único y estable a partir de un texto (para favoritos) */
  crearId(prefijo, texto) {
    let h = 0;
    for (const c of texto) h = (h * 31 + c.charCodeAt(0)) | 0;
    return prefijo + "-" + Math.abs(h).toString(36);
  },

  /* Junta en una sola lista todo lo que se puede buscar o marcar como favorito */
  todosLosElementos() {
    const lista = [];
    const listas = ["caracteristicas", "comunicacion", "materiales", "espacio", "tiempos"];

    DISCAPACIDADES.forEach(d => {
      listas.forEach(clave => {
        const seccion = SECCIONES.find(s => s.clave === clave);
        d[clave].forEach(texto => lista.push({
          id: this.crearId(d.id + "-" + clave, texto),
          titulo: seccion.icono + " " + seccion.titulo,
          texto, disc: d.id
        }));
      });
      lista.push({
        id: this.crearId(d.id + "-actividad", d.actividad.titulo),
        titulo: "🎨 Actividad: " + d.actividad.titulo,
        texto: d.actividad.objetivo + " " + d.actividad.pasos.join(" "),
        disc: d.id
      });
      d.apps.forEach(a => lista.push({
        id: this.crearId("app", a.nombre + a.url),
        titulo: "📱 " + a.nombre, texto: a.texto, url: a.url, disc: d.id
      }));
    });

    RECURSOS.forEach(r => {
      const tipo = TIPOS_RECURSO.find(t => t.clave === r.tipo);
      lista.push({
        id: this.crearId("rec", r.nombre + r.url),
        titulo: tipo.icono + " " + r.nombre, texto: r.texto, url: r.url, disc: r.disc[0]
      });
    });
    return lista;
  },

  /* Devuelve los elementos que contienen todas las palabras buscadas */
  buscar(consulta) {
    const palabras = this.normalizar(consulta).split(/\s+/).filter(p => p.length > 1);
    if (!palabras.length) return [];
    return this.todosLosElementos().filter(el => {
      const d = this.discapacidad(el.disc);
      const donde = this.normalizar(el.titulo + " " + el.texto + " " + (d ? d.nombre : ""));
      return palabras.every(p => donde.includes(p));
    });
  },

  /* ---------- ARASAAC (pictogramas) ----------
     Pide a la API los pictogramas de una palabra y devuelve sus ids. */
  async buscarPictogramas(palabra) {
    const url = "https://api.arasaac.org/v1/pictograms/es/search/" + encodeURIComponent(palabra);
    const respuesta = await fetch(url);
    if (respuesta.status === 404) return [];          // no hay resultados
    if (!respuesta.ok) throw new Error("Error " + respuesta.status);
    const datos = await respuesta.json();
    return datos.slice(0, 40).map(p => p._id);       // solo los 40 primeros
  },
  urlPictograma(id) {
    return "https://static.arasaac.org/pictograms/" + id + "/" + id + "_300.png";
  }
};
