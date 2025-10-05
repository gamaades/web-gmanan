import { CONVERSIONES } from "./conversiones.js";
const categoriaSelect = document.getElementById("categoria");
const unidadOrigen = document.getElementById("unidadOrigen");
const unidadDestino = document.getElementById("unidadDestino");
const valorInput = document.getElementById("valor");
const resultadoDiv = document.getElementById("resultado");
const convertir = document.getElementById("convertir");

function actualizarUnidades() {
  try {
    const categoria = categoriaSelect.value;
    if (categoria === "") return;

    const config = CONVERSIONES[categoria];
    if (!config || !config.unidades) return;

    unidadOrigen.innerHTML = "";
    unidadDestino.innerHTML = "";

    Object.entries(config.unidades).forEach(([clave, datos]) => {
      const nombreVisible = datos.nombre || clave;
      const option1 = new Option(nombreVisible, clave);
      const option2 = new Option(nombreVisible, clave);
      unidadOrigen.add(option1);
      unidadDestino.add(option2);
    });
    convertir.disabled = false;
    unidadDestino.selectedIndex = 1;
  } catch (error) {
    console.error("Error al actualizar unidades:", error);
  }
}

categoriaSelect.addEventListener("change", actualizarUnidades);

document.getElementById("convertir").addEventListener("click", () => {
  try {
    const categoria = categoriaSelect.value;
    const origen = unidadOrigen.value;
    const destino = unidadDestino.value;
    const valor = parseFloat(valorInput.value);

    if (isNaN(valor)) {
      resultadoDiv.textContent = "⚠️ Ingrese un valor válido.";
      return;
    }

    const conv = CONVERSIONES[categoria];
    let convertido;
    let nombreOrigen;
    let nombreDestino;

    switch (categoria) {
      case "temperatura":
        const valorC = conv.unidades[origen].from(valor);
        convertido = conv.unidades[destino].to(valorC);
        break;

      case "energia": {
        const baseValue = valor / conv.unidades[origen].factor;
        convertido = baseValue * conv.unidades[destino].factor;
        break;
      }

      case "frecuencia": {
        const baseValue = valor / conv.unidades[origen].factor;
        convertido = baseValue * conv.unidades[destino].factor;
        break;
      }

      case "longitud": {
        const baseValue = valor / conv.unidades[origen].factor;
        convertido = baseValue * conv.unidades[destino].factor;
        break;
      }

      case "masa": {
        const baseValue = valor / conv.unidades[origen].factor;
        convertido = baseValue * conv.unidades[destino].factor;
        break;
      }

      case "presion": {
        const baseValue = valor / conv.unidades[origen].factor;
        convertido = baseValue * conv.unidades[destino].factor;
        break;
      }

      case "tiempo": {
        convertido =
          valor *
          (conv.unidades[origen].factor / conv.unidades[destino].factor);
        break;
      }

      case "velocidad": {
        convertido =
          valor *
          (conv.unidades[origen].factor / conv.unidades[destino].factor);
        break;
      }

      case "volumen": {
        convertido =
          valor *
          (conv.unidades[origen].factor / conv.unidades[destino].factor);
        break;
      }

      case "anguloPlano": {
        const valorEnRad = valor / conv.unidades[origen].factor;
        convertido = valorEnRad * conv.unidades[destino].factor;
        break;
      }

      case "area": {
        convertido =
          valor *
          (conv.unidades[origen].factor / conv.unidades[destino].factor);
        break;
      }

      case "tamanioDatos": {
        const valorEnBits = valor * conv.unidades[origen].factor;
        convertido = valorEnBits / conv.unidades[destino].factor;
        break;
      }

      default:
        resultadoDiv.textContent = "❌ Categoría no soportada.";
        return;
    }

    nombreOrigen = conv.unidades[origen].nombre || origen;
    nombreDestino = conv.unidades[destino].nombre || destino;

    const mostrar = Number.isInteger(convertido)
      ? convertido.toString()
      : new Intl.NumberFormat("es-CL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: Math.abs(convertido) < 0.001 ? 10 : 6,
          useGrouping: false,
        }).format(convertido);

    resultadoDiv.textContent = `${valor} ${nombreOrigen} = ${mostrar} ${nombreDestino}`;
  } catch (error) {
    resultadoDiv.textContent = `❌ Error en la conversión: ${error.message}`;
    console.error("Error al convertir:", error);
  }
});

actualizarUnidades();
