export const CONVERSIONES = {
  energia: {
    base: "J",
    unidades: {
      J: {
        nombre: "Julio",
        factor: 1,
      },
      kJ: {
        nombre: "Kilojulio",
        factor: 0.001, // 1 J = 0.001 kJ
      },
      cal: {
        nombre: "Caloría-gramo",
        factor: 0.239005736, // 1 J = 0.239 cal
      },
      kcal: {
        nombre: "Kilocaloría",
        factor: 0.000239005736, // 1 J = 0.000239 kcal
      },
      Wh: {
        nombre: "Vatio-hora",
        factor: 0.000277778, // 1 J = 0.0002778 Wh
      },
      kWh: {
        nombre: "Kilovatio-hora",
        factor: 2.77778e-7, // 1 J = 2.78e-7 kWh
      },
      eV: {
        nombre: "Electronvoltio",
        factor: 6.241509e18, // 1 J = 6.24e18 eV
      },
      BTU: {
        nombre: "Unidad térmica británica",
        factor: 0.000947817, // 1 J = 0.0009478 BTU
      },
      ft_lb: {
        nombre: "Pie-libra fuerza",
        factor: 0.737562, // 1 J = 0.73756 ft·lb
      },
      therm: {
        nombre: "Termia estadounidense",
        factor: 9.47817e-9, // 1 J = 9.48e-9 therm
      },
    },
  },
  frecuencia: {
    base: "Hz",
    unidades: {
      Hz: {
        nombre: "Hercio",
        factor: 1,
      },
      kHz: {
        nombre: "Kilohercio",
        factor: 0.001, // 1 Hz = 0.001 kHz
      },
      MHz: {
        nombre: "Megahercio",
        factor: 1e-6, // 1 Hz = 1e-6 MHz
      },
      GHz: {
        nombre: "Gigahercio",
        factor: 1e-9, // 1 Hz = 1e-9 GHz
      },
    },
  },
  longitud: {
    base: "m",
    unidades: {
      km: {
        nombre: "Kilómetro",
        factor: 0.001, // 1 m = 0.001 km
      },
      m: {
        nombre: "Metro",
        factor: 1, // base
      },
      cm: {
        nombre: "Centímetro",
        factor: 100, // 1 m = 100 cm
      },
      mm: {
        nombre: "Milímetro",
        factor: 1000, // 1 m = 1000 mm
      },
      µm: {
        nombre: "Micrómetro",
        factor: 1e6, // 1 m = 1,000,000 µm
      },
      nm: {
        nombre: "Nanómetro",
        factor: 1e9, // 1 m = 1,000,000,000 nm
      },
      mi: {
        nombre: "Milla",
        factor: 0.000621371, // 1 m = 0.000621371 mi
      },
      yd: {
        nombre: "Yarda",
        factor: 1.0936133, // 1 m = 1.093613 yd
      },
      ft: {
        nombre: "Pie",
        factor: 3.2808399, // 1 m = 3.28084 ft
      },
      in: {
        nombre: "Pulgada",
        factor: 39.3700787, // 1 m = 39.37 in
      },
      nmi: {
        nombre: "Milla náutica",
        factor: 0.000539957, // 1 m = 0.000539957 nmi
      },
    },
  },
  masa: {
    base: "kg",
    unidades: {
      t: {
        nombre: "Tonelada",
        factor: 0.001, // 1 t = 1000 kg
      },
      kg: {
        nombre: "Kilogramo",
        factor: 1, // base
      },
      g: {
        nombre: "Gramo",
        factor: 1000, // 1 kg = 1000 g
      },
      mg: {
        nombre: "Miligramo",
        factor: 1e6, // 1 kg = 1,000,000 mg
      },
      µg: {
        nombre: "Microgramo",
        factor: 1e9, // 1 kg = 1,000,000,000 µg
      },
      long_ton: {
        nombre: "Tonelada larga",
        factor: 0.000984207, // 1 long ton = 1016.0469088 kg
      },
      short_ton: {
        nombre: "Tonelada corta",
        factor: 0.00110231, // 1 short ton = 907.18474 kg
      },
      st: {
        nombre: "Stone",
        factor: 0.157473, // 1 stone = 6.35029318 kg
      },
      lb: {
        nombre: "Libra",
        factor: 2.20462, // 1 kg = 2.20462 lb
      },
      oz: {
        nombre: "Onza",
        factor: 35.274, // 1 kg = 35.274 oz
      },
    },
  },
  volumen: {
    base: "m3",
    unidades: {
      m3: { nombre: "Metro cúbico", factor: 1 },
      L: { nombre: "Litro", factor: 0.001 },
      mL: { nombre: "Mililitro", factor: 0.000001 },
      ft3: { nombre: "Pie cúbico", factor: 0.0283168 },
      in3: { nombre: "Pulgada cúbica", factor: 0.0000163871 },
      galUSA: { nombre: "Galón estadounidense", factor: 0.00378541 },
      qtUSA: { nombre: "Cuarto estadounidense", factor: 0.000946353 },
      ptUSA: { nombre: "Pinta estadounidense", factor: 0.000473176 },
      cupUSA: { nombre: "Taza americana oficial", factor: 0.00024 },
      flOzUSA: { nombre: "Onza líquida estadounidense", factor: 0.0000295735 },
      tbspUSA: { nombre: "Cucharada estadounidense", factor: 0.0000147868 },
      tspUSA: { nombre: "Cucharadita estadounidense", factor: 0.00000492892 },
      galGB: { nombre: "Galón británico", factor: 0.00454609 },
      qtGB: { nombre: "Cuarto imperial", factor: 0.00113652 },
      ptGB: { nombre: "Pinta imperial", factor: 0.000568261 },
      cupGB: { nombre: "Taza imperial", factor: 0.000284131 },
      flOzGB: { nombre: "Onza líquida imperial", factor: 0.0000284131 },
      tbspGB: { nombre: "Cucharada imperial", factor: 0.0000177582 },
      tspGB: { nombre: "Cucharadita imperial", factor: 0.00000591939 },
      bbl: { nombre: "Barril de petróleo", factor: 0.1589873 },
    },
  },
  presion: {
    base: "Pa",
    unidades: {
      Pa: {
        nombre: "Pascal",
        factor: 1,
      },
      atm: {
        nombre: "Atmósfera",
        factor: 0.0000098692,
      },
      bar: {
        nombre: "Bar",
        factor: 0.00001,
      },
      psi: {
        nombre: "Libra por pulgada cuadrada (psi)",
        factor: 0.0001450377,
      },
      torr: {
        nombre: "Torr",
        factor: 0.00750062,
      },
    },
  },
  tamanioDatos: {
    base: "bit",
    unidades: {
      bit: { nombre: "Pedacitos de", factor: 1 },
      B: { nombre: "Byte", factor: 8 },
      Kbit: { nombre: "Kilobit", factor: 1e3 },
      kB: { nombre: "Kilobyte", factor: 8 * 1e3 },
      KiB: { nombre: "Kibibyte", factor: 8 * 1024 },
      Mbit: { nombre: "Megabit", factor: 1e6 },
      MB: { nombre: "Megabyte", factor: 8 * 1e6 },
      MiB: { nombre: "Mebibyte", factor: 8 * 1024 ** 2 },
      Gbit: { nombre: "Gigabit", factor: 1e9 },
      GB: { nombre: "Gigabyte", factor: 8 * 1e9 },
      GiB: { nombre: "Gibibyte", factor: 8 * 1024 ** 3 },
      Tbit: { nombre: "Terabit", factor: 1e12 },
      TB: { nombre: "Terabyte", factor: 8 * 1e12 },
      TiB: { nombre: "Tebibyte", factor: 8 * 1024 ** 4 },
      Pbit: { nombre: "Petabit", factor: 1e15 },
      PB: { nombre: "Petabyte", factor: 8 * 1e15 },
      PiB: { nombre: "Pebibyte", factor: 8 * 1024 ** 5 },
      Ebit: { nombre: "Exabit", factor: 1e18 },
      EB: { nombre: "Exabyte", factor: 8 * 1e18 },
      EiB: { nombre: "Exbibyte", factor: 8 * 1024 ** 6 },
      Zbit: { nombre: "Zettabit", factor: 1e21 },
      ZB: { nombre: "Zettabyte", factor: 8 * 1e21 },
      ZiB: { nombre: "Zebibyte", factor: 8 * 1024 ** 7 },
      Ybit: { nombre: "Yottabit", factor: 1e24 },
      YB: { nombre: "Yottabyte", factor: 8 * 1e24 },
      YiB: { nombre: "Yobibyte", factor: 8 * 1024 ** 8 },
    },
  },
  temperatura: {
    base: "C",
    unidades: {
      C: {
        nombre: "Celsius",
        from: (v) => v,
        to: (v) => v,
      },
      F: {
        nombre: "Fahrenheit",
        from: (v) => (v - 32) / 1.8, // convertir a Celsius
        to: (v) => v * 1.8 + 32, // convertir desde Celsius
      },
      K: {
        nombre: "Kelvin",
        from: (v) => v - 273.15, // convertir a Celsius
        to: (v) => v + 273.15, // convertir desde Celsius
      },
    },
  },
  tiempo: {
    base: "s", // segundos como base
    unidades: {
      ns: {
        nombre: "Nanosegundo",
        factor: 1e-9, // 1 ns = 1e-9 s
      },
      µs: {
        nombre: "Microsegundo",
        factor: 1e-6, // 1 µs = 1e-6 s
      },
      ms: {
        nombre: "Milisegundo",
        factor: 1e-3, // 1 ms = 1e-3 s
      },
      s: {
        nombre: "Segundo",
        factor: 1, // base
      },
      min: {
        nombre: "Minuto",
        factor: 60, // 1 min = 60 s
      },
      h: {
        nombre: "Hora",
        factor: 3600, // 1 h = 3600 s
      },
      d: {
        nombre: "Día",
        factor: 86400, // 1 d = 86400 s
      },
      mes: {
        nombre: "Mes (30 días aprox.)",
        factor: 2592000, // 30 * 86400
      },
      a: {
        nombre: "Año (365 días)",
        factor: 31536000, // 365 * 86400
      },
      dec: {
        nombre: "Década",
        factor: 315360000, // 10 * año
      },
      sig: {
        nombre: "Siglo",
        factor: 3153600000, // 100 * año
      },
    },
  },
  velocidad: {
    base: "m/s", // metro por segundo como unidad base
    unidades: {
      mph: {
        nombre: "Milla por hora",
        factor: 0.44704, // 1 mph = 0.44704 m/s
      },
      "ft/s": {
        nombre: "Pie por segundo",
        factor: 0.3048, // 1 ft/s = 0.3048 m/s
      },
      "m/s": {
        nombre: "Metro por segundo",
        factor: 1, // base
      },
      "km/h": {
        nombre: "Kilómetro por hora",
        factor: 0.277778, // 1 km/h = 0.277778 m/s
      },
      kt: {
        nombre: "Nudo",
        factor: 0.514444, // 1 nudo = 0.514444 m/s
      },
    },
  },
  anguloPlano: {
    base: "rad", // radián como unidad base
    unidades: {
      deg: {
        nombre: "Grado",
        factor: 57.2957795, // 1 rad = 57.2957795 grados
      },
      gon: {
        nombre: "Grado centesimal",
        factor: 63.6619772, // 1 rad = 63.6619772 grados centesimales
      },
      mrad: {
        nombre: "Milirradián",
        factor: 1000, // 1 rad = 1000 mrad
      },
      arcmin: {
        nombre: "Minuto de arco",
        factor: 3437.74677, // 1 rad = 3437.74677 minutos de arco
      },
      rad: {
        nombre: "Radián",
        factor: 1, // base
      },
      arcsec: {
        nombre: "Segundo de arco",
        factor: 206264.806, // 1 rad = 206264.806 segundos de arco
      },
    },
  },
  area: {
    base: "m²", // metro cuadrado como unidad base
    unidades: {
      "km²": {
        nombre: "Kilómetro cuadrado",
        factor: 1_000_000, // 1 km² = 1,000,000 m²
      },
      "m²": {
        nombre: "Metro cuadrado",
        factor: 1, // base
      },
      "mi²": {
        nombre: "Milla cuadrada",
        factor: 2_589_988.11, // 1 mi² = 2,589,988.11 m²
      },
      "yd²": {
        nombre: "Yarda cuadrada",
        factor: 0.836127, // 1 yd² = 0.836127 m²
      },
      "ft²": {
        nombre: "Pie cuadrado",
        factor: 0.092903, // 1 ft² = 0.092903 m²
      },
      "in²": {
        nombre: "Pulgada cuadrada",
        factor: 0.00064516, // 1 in² = 0.00064516 m²
      },
      ha: {
        nombre: "Hectárea",
        factor: 10_000, // 1 ha = 10,000 m²
      },
      ac: {
        nombre: "Acre",
        factor: 4_046.85642, // 1 ac = 4,046.85642 m²
      },
    },
  },
};
