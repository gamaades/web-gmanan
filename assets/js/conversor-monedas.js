const selectOrigen = document.getElementById("monedaOrigen");
const selectDestino = document.getElementById("monedaDestino");
const inputCantidad = document.getElementById("cantidad");
const btnConvertir = document.getElementById("convertir");
const divResultado = document.getElementById("resultado");

// const API_URL =
//   "https://data.fixer.io/api/latest?access_key=f2f12247a11e924f7e709495c3569680";

const API_KEY = "f2f12247a11e924f7e709495c3569680";
const API_RATES = `https://data.fixer.io/api/latest?access_key=${API_KEY}`;
const API_SYMBOLS = `https://data.fixer.io/api/symbols?access_key=${API_KEY}`;

let tasas = {};
let nombresMonedas = {};

async function cargarMonedas() {
  try {
    // 1️⃣ Cargamos los nombres (símbolos)
    const resSymbols = await fetch(API_SYMBOLS);
    const dataSymbols = await resSymbols.json();
    if (!dataSymbols.success) {
      divResultado.textContent =
        "Error al obtener símbolos: " + dataSymbols.error?.info;
      return;
    }
    nombresMonedas = dataSymbols.symbols;

    // 2️⃣ Cargamos las tasas
    const resRates = await fetch(API_RATES);
    const dataRates = await resRates.json();
    if (!dataRates.success) {
      divResultado.textContent =
        "Error al cargar tasas: " + dataRates.error?.info;
      return;
    }

    tasas = dataRates.rates;

    // 3️⃣ Rellenamos los select con símbolo + nombre
    const monedas = Object.keys(tasas).concat(dataRates.base);
    monedas.forEach((moneda) => {
      const nombre = nombresMonedas[moneda] || "Nombre no disponible";
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option2.value = moneda;
      option1.textContent = option2.textContent = `${moneda} - ${nombre}`;
      selectOrigen.appendChild(option1);
      selectDestino.appendChild(option2);
    });

    selectOrigen.value = "USD";
    selectDestino.value = "CLP";
  } catch (error) {
    divResultado.textContent = "Error de conexión con Fixer.io";
  }
}

function convertirMoneda() {
  const monto = parseFloat(inputCantidad.value);
  if (!monto || monto <= 0) {
    divResultado.textContent = "Ingrese un monto válido.";
    return;
  }

  const origen = selectOrigen.value;
  const destino = selectDestino.value;

  if (origen === destino) {
    divResultado.textContent = "Seleccione monedas diferentes.";
    return;
  }

  // ⚙️ Fixer.io gratuito usa siempre EUR como base
  const tasaOrigen = origen === "EUR" ? 1 : tasas[origen];
  const tasaDestino = destino === "EUR" ? 1 : tasas[destino];

  if (!tasaOrigen || !tasaDestino) {
    divResultado.textContent = "No se encontró la tasa de cambio.";
    return;
  }

  // Conversión manual EUR -> otras monedas
  const resultado = (monto / tasaOrigen) * tasaDestino;

  divResultado.textContent = `${monto.toFixed(
    2
  )} ${origen} = ${resultado.toFixed(2)} ${destino}`;
}

btnConvertir.addEventListener("click", convertirMoneda);
cargarMonedas();
