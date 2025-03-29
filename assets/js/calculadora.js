const pantalla = document.getElementById("pantalla");

function agregarNumero(num) {
  pantalla.value += num;
}

function agregarOperacion(op) {
  let valorActual = pantalla.value.trim();

  if (valorActual === "") return; // No permite iniciar con un operador

  let ultimoCaracter = valorActual.slice(-1);

  // Si el último carácter es un operador, lo reemplazamos en lugar de agregar otro
  if ("+-*/".includes(ultimoCaracter)) {
    pantalla.value = valorActual.slice(0, -1) + ` ${op} `;
  } else {
    pantalla.value += ` ${op} `;
  }
}

function calcularResultado() {
  try {
    let expresion = pantalla.value.trim();

    // Evitar que termine en un operador (ejemplo: "5 + ")
    if ("+-*/".includes(expresion.slice(-1))) {
      pantalla.classList.add("error");
      pantalla.value = "Error";
      return;
    }

    pantalla.value = eval(expresion.replace("÷", "/").replace("×", "*"));
    pantalla.classList.remove("error"); // Quitar estado de error
  } catch (error) {
    pantalla.classList.add("error");
    pantalla.value = "Error";
  }
}

function limpiarPantalla() {
  pantalla.value = "";
}

function borrarUltimo() {
  let valorActual = pantalla.value.trim();

  if (valorActual.endsWith(" ")) {
    pantalla.value = valorActual.slice(0, -3); // Borra operadores con espacio
  } else {
    pantalla.value = valorActual.slice(0, -1);
  }
}

function calcularPorcentaje() {
  let expresion = pantalla.value.trim();
  let partes = expresion.split(" ");

  if (partes.length < 2) return; // Si no hay una operación previa, no hacer nada

  let operador = partes[partes.length - 2]; // Último operador ingresado
  let numeroBase = parseFloat(partes[partes.length - 3]); // Número antes del operador
  let porcentaje = parseFloat(partes[partes.length - 1]); // Número del porcentaje

  if (!isNaN(numeroBase) && !isNaN(porcentaje)) {
    let porcentajeCalculado = (numeroBase * porcentaje) / 100;

    // Reemplazar el porcentaje ingresado por su valor calculado
    partes[partes.length - 1] = porcentajeCalculado;
    pantalla.value = partes.join(" ");
  }
}

document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || e.key === ".") {
    agregarNumero(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    agregarOperacion(e.key);
  } else if (e.key === "Enter") {
    calcularResultado();
  } else if (e.key === "Backspace") {
    borrarUltimo();
  } else if (e.key === "%") {
    calcularPorcentaje();
  }
});

function toggleModoOscuro() {
  document.body.classList.toggle("dark-mode");
  const esOscuro = document.body.classList.contains("dark-mode");
  localStorage.setItem("modoOscuro", esOscuro);
  document.getElementById("icono-tema").className = esOscuro
    ? "fas fa-sun"
    : "fas fa-moon";
}

window.onload = function () {
  const esOscuro = localStorage.getItem("modoOscuro") === "true";
  if (esOscuro) {
    document.body.classList.add("dark-mode");
    document.getElementById("icono-tema").className = "fas fa-sun";
  }
};
