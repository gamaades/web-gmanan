const RANGOS = {
  Masculino: [
    { min: 0, max: 18.5, clase: "bajo", etiqueta: "Bajo peso" },
    { min: 18.6, max: 24.9, clase: "normal", etiqueta: "Normal" },
    { min: 25, max: 29.9, clase: "sobrepeso", etiqueta: "Sobrepeso" },
    { min: 30, max: 34.9, clase: "obesidad1", etiqueta: "Obesidad clase I" },
    { min: 35, max: 39.9, clase: "obesidad2", etiqueta: "Obesidad clase II" },
    { min: 40, max: 50, clase: "obesidad3", etiqueta: "Obesidad clase III" },
  ],
  Femenino: [
    { min: 0, max: 18, clase: "bajo", etiqueta: "Bajo peso" },
    { min: 18.1, max: 23.9, clase: "normal", etiqueta: "Normal" },
    { min: 24, max: 28.9, clase: "sobrepeso", etiqueta: "Sobrepeso" },
    { min: 29, max: 34.9, clase: "obesidad1", etiqueta: "Obesidad clase I" },
    { min: 35, max: 39.9, clase: "obesidad2", etiqueta: "Obesidad clase II" },
    { min: 40, max: 50, clase: "obesidad3", etiqueta: "Obesidad clase III" },
  ],
};

function actualizarTabla(sexo) {
  const tablaBody = document.querySelector("#tablaIMC tbody");
  tablaBody.innerHTML = ""; // limpiar antes de renderizar

  RANGOS[sexo].forEach((r) => {
    const fila = document.createElement("tr");
    const tdClasificacion = document.createElement("td");
    tdClasificacion.textContent = r.etiqueta;

    const tdRango = document.createElement("td");
    tdRango.textContent =
      r.max >= 50
        ? `≥ ${r.min}` // último rango (Obesidad III)
        : `${r.min} - ${r.max}`;

    fila.appendChild(tdClasificacion);
    fila.appendChild(tdRango);
    tablaBody.appendChild(fila);
  });
}

// Cada vez que el usuario selecciona un sexo → se actualiza la tabla
document.getElementById("Sexo").addEventListener("change", function () {
  if (this.value) {
    actualizarTabla(this.value);
  }
});

function porcentajeIndicador(imc, sexo) {
  const rangos = RANGOS[sexo];
  const cap = Math.max(
    rangos[0].min,
    Math.min(imc, rangos[rangos.length - 1].max)
  );
  const anchoSegmento = 100 / rangos.length;

  let i = 0;
  for (; i < rangos.length; i++) {
    if (cap <= rangos[i].max) break;
  }
  const seg = rangos[i];
  const ratio = (cap - seg.min) / (seg.max - seg.min);
  return i * anchoSegmento + ratio * anchoSegmento;
}

document.getElementById("imcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("weight").value);
  const estatura = parseFloat(document.getElementById("height").value);
  const sexo = document.getElementById("Sexo").value;
  const resultadoDiv = document.getElementById("resultado");
  const indicador = document.querySelector(".indicador");

  if (peso > 20 && estatura >= 1 && estatura <= 2.5 && sexo) {
    const imc = peso / (estatura * estatura);
    const rangos = RANGOS[sexo];

    // Encontrar clasificación según sexo
    const rango = rangos.find((r) => imc <= r.max) || rangos[rangos.length - 1];

    resultadoDiv.innerHTML = `
      <div class="resultado-box">
        <p>Tu IMC es <strong>${imc.toFixed(2)}</strong>. 
        Clasificación (${sexo}): <strong>${rango.etiqueta}</strong>.</p>
      </div>`;

    // Mover indicador
    indicador.style.left = `${porcentajeIndicador(imc, sexo)}%`;

    // Resaltar el segmento activo
    document
      .querySelectorAll(".barra-imc > div")
      .forEach((d) => d.classList.remove("activo"));
    document
      .querySelector(`.barra-imc .${rango.clase}`)
      .classList.add("activo");
  } else {
    resultadoDiv.innerHTML =
      "<p>⚠️ Ingrese valores válidos (Peso mínimo 20kg, estatura entre 1m y 2.5m).</p>";
  }
});
