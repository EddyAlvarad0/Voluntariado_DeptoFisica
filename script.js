const secciones = {
  "inicio": {
        titulo: "Bienvenido a la Página del Departamento de Física",
        subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
        contenido: `
            <div class="card-group">
                ${generarCard(
                    "PORTAL",
                    "Ingreso/Consulta al Portal de notas del Departamento de Física.",
                    "https://i.pinimg.com/736x/da/b7/d9/dab7d93126800301dbfa328ab41ff966.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
                ${generarCard(
                    "LABORATORIOS",
                    "Ingreso/Consulta al sitio oficial de los laboratorios de física.",
                    "https://i.pinimg.com/736x/34/fb/7b/34fb7b11750bb9bc0f8aa17d4d88ca9f.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
                ${generarCard(
                    "ASIGNACIÓN DE LABORATORIOS",
                    "Ingreso/Consulta al sitio oficial de asignación de laboratorios de física.",
                    "https://i.pinimg.com/736x/04/a3/9a/04a39a35c946f62cc927687d40fb4e7c.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
            </div>
            <div class="card-group mt-4">
                ${generarCard(
                    "MECANICA ANALITICA 1",
                    "Ingrese a la página en la cual se encuentran programas, tareas y notas, referente al curso.",
                    "https://i.pinimg.com/474x/49/0e/54/490e54db49f44cb737676e4b56ff8b6a.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
                ${generarCard(
                    "MECANICA ANALITICA 2",
                    "Ingrese a la página en la cual se encuentran programas, tareas y notas, referente al curso.",
                    "https://i.pinimg.com/736x/c0/52/ce/c052ce00b61cab2c90de175cecd76c7f.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
                ${generarCard(
                    "ANALISIS MECÁNICO",
                    "Ingrese a la página en la cual se encuentran programas, tareas y notas, referente al curso.",
                    "https://i.pinimg.com/736x/51/f2/09/51f209df2d319a6848cfc81ccbc0c4ba.jpg",
                    [{ texto: "Ingresar", url: "https://fisica.usac.edu.gt/fisica/" }]
                )}
            </div>
            <div class="card text-bg-dark mb-3 mt-4">
                <div class="card-body">
                    <h5 class="card-title">Pasos para la Matriculación en el Portal de Notas</h5>
                    <p class="card-text">Adjunto encontrarán los pasos para la matriculación de los cursos del Departamento de Física, incluyendo la modalidad Virtual.</p>
                    <a href="https://fisica.ingenieria.usac.edu.gt/Docs/1er2018/manual.pdf" class="btn btn-success">Manual</a>
                </div>
            </div>
        `
    },
    "fisica-basica": {
        titulo: "Física Básica",
        subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
        contenido: `
            ${generarCard(
                "Física Básica",
                "Explora los conceptos fundamentales de la física, movimiento, fuerza y energía.",
                "https://clasesytutores.com/wp-content/uploads/2021/07/FISICA.jpg",
                [
                    { texto: "Programa del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/PFB.pdf" },
                    { texto: "Formulario", url: "https://fisica.ingenieria.usac.edu.gt/Docs/2S2019/FFB.pdf" },
                    { texto: "Calendarización del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/CFB.pdf" },
                    { texto: "Tareas", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/TFB.pdf" }
                ],
                "700px", // Ancho deseado
                 "500px"  // Alto deseado
            )}
        `
    },
"fisica-1": {
  titulo: "Física 1",
  subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
  contenido: `
      ${generarCard(
          "Física 1",
          "Explora los conceptos fundamentales de la física, movimiento, fuerza y energía.",
          "https://png.pngtree.com/png-clipart/20230814/original/pngtree-hand-dropping-tennis-ball-for-gravity-experiment-finger-graphic-object-vector-picture-image_10676668.png",
          [
            { texto: "Programa del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/PFB.pdf" },
            { texto: "Formulario", url: "https://fisica.ingenieria.usac.edu.gt/Docs/2S2019/FFB.pdf" },
            { texto: "Calendarización del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/CFB.pdf" },
            { texto: "Tareas", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/TFB.pdf" }
          ],
          "700px", // Ancho deseado
          "500px"  // Alto deseado
      )}
  `
},

  "fisica-2": {
      titulo: "Física 2",
      subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
      contenido: `
          ${generarCard(
              "Física 2",
              "Explora los conceptos fundamentales de la física, movimiento, fuerza y energía.",
              //esta imagen se cambia a gusto
              "https://clasesytutores.com/wp-content/uploads/2021/07/FISICA.jpg",
              [
                  { texto: "Programa del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/PF2.pdf" },
                  { texto: "Formulario", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2019/FF2.pdf" },
                  { texto: "Calendarización del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/CF2.pdf" },
                  { texto: "Teoría de Líneas de Campo Eléctrico", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1er2017/LineasCampoE.pdf" },
                  { texto: "Tareas", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/TF2.pdf" }
              ],
              "700px", // Ancho deseado
              "500px"  // Alto deseado
          )}
      `
  },
  "fisica-3": {
      titulo: "Física 3",
      subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
      contenido: `
          ${generarCard(
              "Física 3",
              "Explora los conceptos fundamentales de la física, movimiento, fuerza y energía.",
              "https://brarscribbles.com/wp-content/uploads/2021/02/87D1F267-F397-4E90-9094-43B70838DAF5.jpeg",
              [
                // a cambiar tambien
                { texto: "Programa del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/PF2.pdf" },
                { texto: "Formulario", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2019/FF2.pdf" },
                { texto: "Calendarización del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/CF2.pdf" },
                { texto: "Teoría de Líneas de Campo Eléctrico", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1er2017/LineasCampoE.pdf" },
                { texto: "Tareas", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/TF2.pdf" }
              ],
              "700px", // Ancho deseado
              "500px"  // Alto deseado
          )}
      `
  },
  "fisica-4": {
      titulo: "Física 4",
      subtitulo: "Facultad de Ingeniería - Escuela de Ciencias",
      contenido: `
          ${generarCard(
              "Física 4",
              "Explora los conceptos fundamentales de la física, movimiento, fuerza y energía.",
              "https://lh3.googleusercontent.com/blogger_img/APIUysibG8_wmntox2_1TmZxRu9ktzmY-SxjePa0C4naseYnkbPutkRmqdZeMlhb2mCpfLnc4OxAnPtFa5I=s1600",
              [
                // a cambiar tambien
                { texto: "Programa del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/PF2.pdf" },
                { texto: "Formulario", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2019/FF2.pdf" },
                { texto: "Calendarización del Curso", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/CF2.pdf" },
                { texto: "Teoría de Líneas de Campo Eléctrico", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1er2017/LineasCampoE.pdf" },
                { texto: "Tareas", url: "https://fisica.ingenieria.usac.edu.gt/Docs/1S2020/TF2.pdf" }
              ],
              "700px", // Ancho deseado
              "500px"  // Alto deseado
          )}
      `
  },
};

function generarCard(titulo, texto, imagen, enlaces, imagenWidth = "100%", imagenHeight = "auto") {
    return `
        <div class="card">
            <div class="card-img-container" style="display: flex; justify-content: center; align-items: center;">
                <img src="${imagen}" class="card-img-top custom-img" alt="${titulo}" style="width: ${imagenWidth}; height: ${imagenHeight}; object-fit: contain;">
            </div>
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${texto}</p>
                ${enlaces.map(enlace => `
                    <a href="${enlace.url}" class="btn btn-primary" target="_blank">${enlace.texto}</a>
                `).join('')}
            </div>
        </div>
    `;
  }  
  

function generarEnlaces(enlaces) {
  return enlaces.map(enlace => `
      <a class="icon-link icon-link-hover link-success" href="${enlace.url}" target="_blank">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"></use></svg>
          ${enlace.texto}
      </a>
  `).join('<br>');
}



function cargarPagina(seccion) {
  const contenido = document.getElementById("contenido");

  if (secciones[seccion]) {
      const { titulo, subtitulo, contenido: html } = secciones[seccion];
      contenido.innerHTML = `
          <h1>${titulo}</h1>
          <h3>${subtitulo}</h3>
          ${html}
      `;
  } else {
      contenido.innerHTML = "<h1>Error</h1><p>Sección no encontrada.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => cargarPagina("inicio"));









