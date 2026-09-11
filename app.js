<script>
const categorias = [
  { id: "todas", label: "Todas" },
  { id: "entera", label: "Entera" },
  { id: "semidesnatada", label: "Semi" },
  { id: "desnatada", label: "Desnatada" },
  { id: "sin_lactosa", label: "Sin lactosa" },
  { id: "especiales", label: "Especiales" },
  { id: "otras", label: "Otras" }
];

const productos = [
  {
    id: "eci-entera-uht-calcio",
    nombre: "Leche entera UHT con calcio",
    marca: "El Corte Ingles",
    categoria: "entera",
    ean: "8433329075978",
    confianza: "alta",
    descripcion: "Leche UHT entera de marca propia, formato clasico para consumo diario."
  },
  {
    id: "eci-semi-uht-calcio",
    nombre: "Leche semidesnatada UHT con calcio",
    marca: "El Corte Ingles",
    categoria: "semidesnatada",
    ean: "8433329075985",
    confianza: "alta",
    descripcion: "Opcion semidesnatada equilibrada, pensada para uso diario."
  },
  {
    id: "eci-desnatada-uht-calcio",
    nombre: "Leche desnatada UHT con calcio",
    marca: "El Corte Ingles",
    categoria: "desnatada",
    ean: "8433329075961",
    confianza: "alta",
    descripcion: "Leche UHT desnatada con perfil ligero y aporte de calcio."
  },
  {
    id: "eci-entera-uht-pack-azul",
    nombre: "Leche UHT entera",
    marca: "El Corte Ingles",
    categoria: "entera",
    ean: "8433329150040",
    confianza: "alta",
    descripcion: "Leche entera UHT en envase azul, con cuerpo y sabor clasico."
  },
  {
    id: "eci-semi-uht-pack-verde",
    nombre: "Leche UHT semidesnatada",
    marca: "El Corte Ingles",
    categoria: "semidesnatada",
    ean: "8433329150057",
    confianza: "alta",
    descripcion: "Formato UHT semidesnatado de marca propia."
  },
  {
    id: "eci-desnatada-uht-pack-rojo",
    nombre: "Leche UHT desnatada",
    marca: "El Corte Ingles",
    categoria: "desnatada",
    ean: "8433329150064",
    confianza: "media",
    descripcion: "Variante desnatada UHT en envase rojo."
  },
  {
    id: "pascual-entera",
    nombre: "Leche entera",
    marca: "Pascual",
    categoria: "entera",
    ean: "8410128010096",
    confianza: "alta",
    descripcion: "Leche entera Pascual, formato clasico de larga duracion."
  },
  {
    id: "pascual-semi",
    nombre: "Leche semidesnatada",
    marca: "Pascual",
    categoria: "semidesnatada",
    ean: "8410128010140",
    confianza: "alta",
    descripcion: "Leche semidesnatada Pascual para consumo habitual."
  },
  {
    id: "pascual-desnatada",
    nombre: "Leche desnatada",
    marca: "Pascual",
    categoria: "desnatada",
    ean: "8410128010065",
    confianza: "media",
    descripcion: "Leche desnatada Pascual con menor contenido graso."
  },
  {
    id: "asturiana-entera-carton",
    nombre: "Leche entera",
    marca: "Asturiana",
    categoria: "entera",
    ean: "8410297010200",
    confianza: "alta",
    descripcion: "Leche entera Central Lechera Asturiana en formato carton."
  },
  {
    id: "asturiana-semi-carton",
    nombre: "Leche semidesnatada",
    marca: "Asturiana",
    categoria: "semidesnatada",
    ean: "8410297012150",
    confianza: "alta",
    descripcion: "Leche semidesnatada Asturiana con equilibrio entre sabor y ligereza."
  },
  {
    id: "asturiana-desnatada-carton",
    nombre: "Leche desnatada",
    marca: "Asturiana",
    categoria: "desnatada",
    ean: "8410297012105",
    confianza: "alta",
    descripcion: "Leche desnatada Asturiana en envase rosa."
  },
  {
    id: "president-entera",
    nombre: "Leche entera",
    marca: "President",
    categoria: "entera",
    ean: "8410283127318",
    confianza: "media",
    descripcion: "Leche entera President con compromiso sostenible."
  },
  {
    id: "president-semi",
    nombre: "Leche semidesnatada",
    marca: "President",
    categoria: "semidesnatada",
    ean: "8410283134903",
    confianza: "alta",
    descripcion: "Leche semidesnatada President en envase azul."
  },
  {
    id: "president-desnatada",
    nombre: "Leche desnatada",
    marca: "President",
    categoria: "desnatada",
    ean: "8410283172493",
    confianza: "media",
    descripcion: "Leche desnatada President con menor grasa."
  },
  {
    id: "lauki-entera-80",
    nombre: "Leche entera 80%",
    marca: "Lauki",
    categoria: "entera",
    ean: "8417000110134",
    confianza: "media",
    descripcion: "Leche entera Lauki con etiqueta 80%."
  },
  {
    id: "lauki-semi-80",
    nombre: "Leche semi 80%",
    marca: "Lauki",
    categoria: "semidesnatada",
    ean: "8417000110196",
    confianza: "alta",
    descripcion: "Leche semidesnatada Lauki, formato 80%."
  },
  {
    id: "lauki-desnatada-80",
    nombre: "Leche desnatada 80%",
    marca: "Lauki",
    categoria: "desnatada",
    ean: "8417000110202",
    confianza: "alta",
    descripcion: "Variante desnatada Lauki visible en la hoja."
  },
  {
    id: "eci-entera-botella",
    nombre: "Leche entera UHT botella",
    marca: "El Corte Ingles",
    categoria: "entera",
    ean: "8433329075978",
    confianza: "media",
    descripcion: "Botella de leche entera UHT de marca propia."
  },
  {
    id: "eci-semi-botella",
    nombre: "Leche semidesnatada UHT botella",
    marca: "El Corte Ingles",
    categoria: "semidesnatada",
    ean: "8433329075985",
    confianza: "media",
    descripcion: "Botella semidesnatada UHT con etiqueta verde."
  },
  {
    id: "eci-desnatada-botella",
    nombre: "Leche desnatada UHT botella",
    marca: "El Corte Ingles",
    categoria: "desnatada",
    ean: "8433329075961",
    confianza: "media",
    descripcion: "Botella desnatada UHT de marca propia."
  },
  {
    id: "asturiana-entera-botella",
    nombre: "Leche entera botella",
    marca: "Asturiana",
    categoria: "entera",
    ean: "8410297010200",
    confianza: "alta",
    descripcion: "Botella de leche entera Asturiana."
  },
  {
    id: "asturiana-semi-botella",
    nombre: "Leche semidesnatada botella",
    marca: "Asturiana",
    categoria: "semidesnatada",
    ean: "8410297111150",
    confianza: "alta",
    descripcion: "Botella de leche semidesnatada Asturiana."
  },
  {
    id: "asturiana-desnatada-botella",
    nombre: "Leche desnatada botella",
    marca: "Asturiana",
    categoria: "desnatada",
    ean: "8410297111105",
    confianza: "media",
    descripcion: "Botella de leche desnatada Asturiana."
  },
  {
    id: "eci-sin-lactosa-entera",
    nombre: "Leche entera sin lactosa UHT",
    marca: "El Corte Ingles",
    categoria: "sin_lactosa",
    ean: "8433329075770",
    confianza: "alta",
    descripcion: "Leche entera sin lactosa de marca propia."
  },
  {
    id: "eci-sin-lactosa-semi",
    nombre: "Leche semidesnatada sin lactosa UHT",
    marca: "El Corte Ingles",
    categoria: "sin_lactosa",
    ean: "8433329075756",
    confianza: "alta",
    descripcion: "Leche semidesnatada sin lactosa en envase verde."
  },
  {
    id: "eci-sin-lactosa-desnatada",
    nombre: "Leche desnatada sin lactosa UHT",
    marca: "El Corte Ingles",
    categoria: "sin_lactosa",
    ean: "8433329075763",
    confianza: "alta",
    descripcion: "Leche desnatada sin lactosa en envase rojo."
  },
  {
    id: "kaiku-sin-lactosa-entera",
    nombre: "Leche entera sin lactosa",
    marca: "Kaiku",
    categoria: "sin_lactosa",
    ean: "8410981012237",
    confianza: "alta",
    descripcion: "Leche entera sin lactosa Kaiku."
  },
  {
    id: "kaiku-sin-lactosa-semi",
    nombre: "Leche semidesnatada sin lactosa",
    marca: "Kaiku",
    categoria: "sin_lactosa",
    ean: "8410981010103",
    confianza: "alta",
    descripcion: "Leche semidesnatada sin lactosa Kaiku."
  },
  {
    id: "kaiku-sin-lactosa-desnatada",
    nombre: "Leche desnatada sin lactosa",
    marca: "Kaiku",
    categoria: "sin_lactosa",
    ean: "8410981017232",
    confianza: "alta",
    descripcion: "Leche desnatada sin lactosa Kaiku."
  },
  {
    id: "pascual-sin-lactosa-entera",
    nombre: "Leche entera sin lactosa",
    marca: "Pascual",
    categoria: "sin_lactosa",
    ean: "8410128750145",
    confianza: "media",
    descripcion: "Leche entera sin lactosa Pascual."
  },
  {
    id: "pascual-sin-lactosa-semi",
    nombre: "Leche semidesnatada sin lactosa",
    marca: "Pascual",
    categoria: "sin_lactosa",
    ean: "8410128750916",
    confianza: "media",
    descripcion: "Leche semidesnatada sin lactosa Pascual."
  },
  {
    id: "pascual-sin-lactosa-desnatada",
    nombre: "Leche desnatada sin lactosa",
    marca: "Pascual",
    categoria: "sin_lactosa",
    ean: "8410128752002",
    confianza: "media",
    descripcion: "Leche desnatada sin lactosa Pascual."
  },
  {
    id: "asturiana-sin-lactosa-entera",
    nombre: "Leche entera sin lactosa",
    marca: "Asturiana",
    categoria: "sin_lactosa",
    ean: "8410297110665",
    confianza: "alta",
    descripcion: "Leche entera sin lactosa Asturiana, sin aditivos."
  },
  {
    id: "asturiana-sin-lactosa-semi",
    nombre: "Leche semidesnatada sin lactosa",
    marca: "Asturiana",
    categoria: "sin_lactosa",
    ean: "8410297113314",
    confianza: "alta",
    descripcion: "Leche semidesnatada sin lactosa Asturiana, sin aditivos."
  },
  {
    id: "asturiana-sin-lactosa-desnatada",
    nombre: "Leche desnatada sin lactosa",
    marca: "Asturiana",
    categoria: "sin_lactosa",
    ean: "8410297112300",
    confianza: "alta",
    descripcion: "Leche desnatada sin lactosa Asturiana, sin aditivos."
  },
  {
    id: "puleva-sin-lactosa-semi",
    nombre: "Leche semidesnatada sin lactosa",
    marca: "Puleva",
    categoria: "sin_lactosa",
    ean: "8411700001600",
    confianza: "alta",
    descripcion: "Leche semidesnatada sin lactosa Puleva."
  },
  {
    id: "puleva-sin-lactosa-desnatada",
    nombre: "Leche desnatada sin lactosa",
    marca: "Puleva",
    categoria: "sin_lactosa",
    ean: "8411700041224",
    confianza: "media",
    descripcion: "Leche desnatada sin lactosa Puleva."
  },
  {
    id: "eci-omega-3",
    nombre: "Leche Omega 3",
    marca: "El Corte Ingles",
    categoria: "especiales",
    ean: "8433329130752",
    confianza: "alta",
    descripcion: "Leche enriquecida con omega 3, clasificada como especial."
  },
  {
    id: "puleva-omega-3-original",
    nombre: "Omega 3 corazon sano",
    marca: "Puleva",
    categoria: "especiales",
    ean: "8411700011111",
    confianza: "media",
    descripcion: "Leche Puleva Omega 3 con formula orientada al cuidado cardiovascular."
  },
  {
    id: "puleva-omega-3-sin-lactosa",
    nombre: "Omega 3 sin lactosa",
    marca: "Puleva",
    categoria: "especiales",
    ean: "8411700002201",
    confianza: "alta",
    descripcion: "Variante Omega 3 sin lactosa de Puleva."
  },
  {
    id: "puleva-omega-3-nueces",
    nombre: "Omega 3 nueces",
    marca: "Puleva",
    categoria: "especiales",
    ean: "8411700001136",
    confianza: "media",
    descripcion: "Leche Omega 3 con nueces, dentro de la gama especial."
  },
  {
    id: "puleva-omega-3-avena",
    nombre: "Omega 3 avena",
    marca: "Puleva",
    categoria: "especiales",
    ean: "8411700001884",
    confianza: "alta",
    descripcion: "Leche Omega 3 con avena, clasificada como especial."
  }
];

const estado = {
  categoria: "todas",
  marca: "todas",
  busqueda: ""
};

const elementos = {
  grid: document.getElementById("catalog-grid"),
  tabs: document.getElementById("category-tabs"),
  marcas: document.getElementById("brand-filter"),
  busqueda: document.getElementById("search-input"),
  plantilla: document.getElementById("product-template"),
  total: document.getElementById("total-count"),
  validos: document.getElementById("valid-count"),
  revisar: document.getElementById("review-count")
};

document.addEventListener("DOMContentLoaded", iniciarCatalogo);

function iniciarCatalogo() {
  pintarResumen();
  pintarCategorias();
  pintarMarcas();
  enlazarEventos();
  renderizarCatalogo();
}

function pintarResumen() {
  const validos = productos.filter((producto) => esEANValido(producto.ean)).length;
  elementos.total.textContent = productos.length;
  elementos.validos.textContent = validos;
  elementos.revisar.textContent = productos.length - validos;
}

function pintarCategorias() {
  elementos.tabs.innerHTML = categorias.map((categoria) => {
    const total = categoria.id === "todas"
      ? productos.length
      : productos.filter((producto) => producto.categoria === categoria.id).length;

    return `
      <button class="tab-btn ${categoria.id === estado.categoria ? "active" : ""}" type="button" data-category="${categoria.id}">
        ${categoria.label} · ${total}
      </button>
    `;
  }).join("");
}

function pintarMarcas() {
  const marcas = ["todas", ...new Set(productos.map((producto) => producto.marca))].sort((a, b) => {
    if (a === "todas") return -1;
    if (b === "todas") return 1;
    return a.localeCompare(b, "es");
  });

  elementos.marcas.innerHTML = marcas.map((marca) => `
    <button class="brand-btn ${marca === estado.marca ? "active" : ""}" type="button" data-brand="${marca}">
      ${marca === "todas" ? "Todas las marcas" : marca}
    </button>
  `).join("");
}

function enlazarEventos() {
  elementos.tabs.addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-category]");
    if (!boton) return;

    estado.categoria = boton.dataset.category;
    activarBoton(elementos.tabs, boton, "tab-btn");
    renderizarCatalogo();
  });

  elementos.marcas.addEventListener("click", (evento) => {
    const boton = evento.target.closest("[data-brand]");
    if (!boton) return;

    estado.marca = boton.dataset.brand;
    activarBoton(elementos.marcas, boton, "brand-btn");
    renderizarCatalogo();
  });

  elementos.busqueda.addEventListener("input", (evento) => {
    estado.busqueda = normalizar(evento.target.value);
    renderizarCatalogo();
  });

  elementos.grid.addEventListener("click", async (evento) => {
    const boton = evento.target.closest(".copy-btn");
    if (!boton || !boton.dataset.ean) return;

    await copiarTexto(boton.dataset.ean);
    const textoOriginal = boton.textContent;
    boton.textContent = "Copiado";
    window.setTimeout(() => {
      boton.textContent = textoOriginal;
    }, 1200);
  });
}

function activarBoton(contenedor, botonActivo, clase) {
  contenedor.querySelectorAll(`.${clase}`).forEach((boton) => boton.classList.remove("active"));
  botonActivo.classList.add("active");
}

function renderizarCatalogo() {
  const productosFiltrados = filtrarProductos();
  elementos.grid.innerHTML = "";

  if (productosFiltrados.length === 0) {
    elementos.grid.innerHTML = "<p class='empty-state'>No hay productos que coincidan con ese filtro.</p>";
    return;
  }

  const porMarca = agruparPorMarca(productosFiltrados);

  porMarca.forEach(([marca, items]) => {
    const seccion = document.createElement("section");
    seccion.className = "brand-section";
    seccion.innerHTML = `
      <header class="brand-heading">
        <h2>${marca}</h2>
        <span>${items.length} producto${items.length === 1 ? "" : "s"}</span>
      </header>
      <div class="brand-products"></div>
    `;

    const contenedor = seccion.querySelector(".brand-products");
    items.forEach((producto) => contenedor.appendChild(crearTarjeta(producto)));
    elementos.grid.appendChild(seccion);
  });
}

function filtrarProductos() {
  return productos.filter((producto) => {
    const coincideCategoria = estado.categoria === "todas" || producto.categoria === estado.categoria;
    const coincideMarca = estado.marca === "todas" || producto.marca === estado.marca;
    const texto = normalizar(`${producto.nombre} ${producto.marca} ${producto.ean ?? ""} ${producto.categoria}`);
    const coincideBusqueda = texto.includes(estado.busqueda);

    return coincideCategoria && coincideMarca && coincideBusqueda;
  });
}

function agruparPorMarca(items) {
  const grupos = new Map();

  items.forEach((producto) => {
    if (!grupos.has(producto.marca)) grupos.set(producto.marca, []);
    grupos.get(producto.marca).push(producto);
  });

  return [...grupos.entries()].sort(([a], [b]) => a.localeCompare(b, "es"));
}

function crearTarjeta(producto) {
  const nodo = elementos.plantilla.content.firstElementChild.cloneNode(true);
  const categoria = categorias.find((item) => item.id === producto.categoria)?.label ?? producto.categoria;
  const eanValido = esEANValido(producto.ean);

  nodo.dataset.category = producto.categoria;
  nodo.querySelector(".mark-brand").textContent = producto.marca;
  nodo.querySelector(".mark-kind").textContent = categoria;
  nodo.querySelector(".badge").textContent = `${categoria} · ${producto.confianza}`;
  nodo.querySelector("h2").textContent = producto.nombre;
  nodo.querySelector("p").textContent = producto.descripcion;
  nodo.querySelector(".barcode-panel").innerHTML = eanValido
    ? generarEAN13SVG(producto.ean)
    : "<div class='barcode-pending'>EAN pendiente de revisar<br>Necesita una foto mas cercana del codigo.</div>";

  const codigo = nodo.querySelector("code");
  const boton = nodo.querySelector(".copy-btn");

  codigo.textContent = eanValido ? producto.ean : "EAN pendiente";
  boton.disabled = !eanValido;
  if (eanValido) boton.dataset.ean = producto.ean;

  return nodo;
}

function generarEAN13SVG(ean) {
  if (!esEANValido(ean)) return "";

  const L = ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"];
  const G = ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"];
  const R = ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"];
  const paridades = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
  const digitos = ean.split("").map(Number);
  const paridad = paridades[digitos[0]];

  let patron = "101";
  for (let i = 0; i < 6; i++) {
    patron += paridad[i] === "L" ? L[digitos[i + 1]] : G[digitos[i + 1]];
  }
  patron += "01010";
  for (let i = 7; i < 13; i++) {
    patron += R[digitos[i]];
  }
  patron += "101";

  const modulo = 2;
  const altoBarra = 72;
  const extraGuia = 12;
  const margen = 24;
  const ancho = margen * 2 + patron.length * modulo;
  const alto = 118;
  const guias = new Set([0, 1, 2, 45, 46, 47, 48, 49, 92, 93, 94]);

  let rects = "";
  let i = 0;
  while (i < patron.length) {
    if (patron[i] === "1") {
      const inicio = i;
      const esGuia = guias.has(i);
      while (i < patron.length && patron[i] === "1" && guias.has(i) === esGuia) i++;
      rects += `<rect x="${margen + inicio * modulo}" y="10" width="${(i - inicio) * modulo}" height="${esGuia ? altoBarra + extraGuia : altoBarra}" />`;
    } else {
      i++;
    }
  }

  return `
    <svg class="barcode-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="Codigo EAN ${ean}">
      <rect width="100%" height="100%" fill="#ffffff"></rect>
      <g fill="#000000" shape-rendering="crispEdges">${rects}</g>
      <text x="14" y="108" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle">${ean[0]}</text>
      <text x="72" y="108" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="1">${ean.slice(1, 7)}</text>
      <text x="166" y="108" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="1">${ean.slice(7)}</text>
    </svg>
  `;
}

function esEANValido(ean) {
  if (!/^\d{13}$/.test(ean ?? "")) return false;

  const digitos = ean.split("").map(Number);
  const suma = digitos.slice(0, 12).reduce((total, digito, indice) => {
    return total + digito * (indice % 2 === 0 ? 1 : 3);
  }, 0);
  const control = (10 - (suma % 10)) % 10;

  return control === digitos[12];
}

function normalizar(texto) {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

async function copiarTexto(texto) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(texto);
    return;
  }

  const campo = document.createElement("textarea");
  campo.value = texto;
  campo.setAttribute("readonly", "");
  campo.style.position = "fixed";
  campo.style.opacity = "0";
  document.body.appendChild(campo);
  campo.select();
  document.execCommand("copy");
  campo.remove();
}
</script>