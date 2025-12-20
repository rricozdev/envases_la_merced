const CategoriaProducto = Object.freeze({
  AGUA: "Agua y bebidas",
  AMENIDADES: "Amenidades",
  COSMETICO: "Cosméticos",
  ESPECIEROS: "Especieros",
  FARMACIA: "Farmacéutico",
  GARRAFAS: "Garrafas",
  LIMPIEZA: "Limpieza",
  PROMOCIONALES: "Promocionales",
  TARROS: "Tarros y vitroleros",
  COMPLEMENTOS: "Tapas y complementos",
});

const EtiquetaProducto = Object.freeze({
  STOCK: "Stock",
  PEDIDO: "Pedido",
  MULTICOLOR: "Multi color",
  PERSONALIZADO: "Color bajo pedido",
});

const RoscaEstandar = Object.freeze({
  GPI_400: 400,
  GPI_410: 410,
  GPI_415: 415,
});

const CodigoRosca = Object.freeze({
  ROSCA_18: "18",
  ROSCA_28: "28",
  ROSCA_45: "45",
  ROSCA_20: "20",
  ROSCA_24: "24",
  ROSCA_38: "38",
  ROSCA_63: "63",
  ROSCA_110: "110",
});

const ColorProducto = Object.freeze({
  CRISTAL: "Cristal",
  HUMO: "Humo",
  AMBAR: "Ámbar",
  COLORES: "Colores",
  BLANCO: "Blanco",
  AZUL: "Azul",
  AMARILLO: "Amarillo",
  NATURAL: "Natural",
});

const CatalogoProductos = Object.freeze({
  productos: Object.freeze([
    // * AGUAS Y JUGOS
    {
      id: "sinfin-250-cristal",
      nombre: "Sinfín",
      volumen: 250,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 253,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/img-r28-sinfin--250.jpg",
        alt: "sinfin-250-cristal",
      },
    },
    {
      id: "sinfin-500-cristal",
      nombre: "Sinfín",
      volumen: 500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 190,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/img-r28-sinfin-500.jpg",
        alt: "sinfin-500-cristal",
      },
    },
    {
      id: "sinfin-1000-cristal",
      nombre: "Sinfín",
      volumen: 1000,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 165,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/img-r28-sinfin-1000.jpg",
        alt: "sinfin-1000-cristal",
      },
    },
    {
      id: "sinfin-1500-cristal",
      nombre: "Sinfín",
      volumen: 1500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 130,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/img-r28-sinfin-1500.jpg",
        alt: "sinfin-1500-cristal",
      },
    },
    {
      id: "olas-rombo-500-cristal",
      nombre: "Olas / Rombo",
      volumen: 500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 190,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/olas_rombo_r-28.jpg",
        alt: "olas-rombo-500-cristal",
      },
    },
    {
      id: "jubileo-355-cristal",
      nombre: "Jubileo",
      volumen: 355,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/jubileo-r28-cristal.jpg",
        alt: "jubileo-355-cristal",
      },
    },

    // * COMPLEMENTOS - AGUA
    {
      id: "tapa-cintillo-rosca-28",
      nombre: "Tapa Cintillo",
      volumen: null,
      categorias: [CategoriaProducto.AGUA, CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 3500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/tapa_cintillo-r-28.jpg",
        alt: "tapa-cintillo-rosca-28",
      },
    },
    {
      id: "refresquera-rosca-28",
      nombre: "Refresquera",
      volumen: null,
      categorias: [CategoriaProducto.AGUA, CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 3500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/tapa-1.jpg",
        alt: "refresquera-rosca-28",
      },
    },

    // AMENIDADES
    {
      id: "licorera-1000-cristal",
      nombre: "Licorera",
      volumen: 1000,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 149,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/licorera-1000-500.jpg",
        alt: "licorera-1000-cristal",
      },
    },
    {
      id: "licorera-500-cristal",
      nombre: "Licorera",
      volumen: 500,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 198,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/licorera-1000-500.jpg",
        alt: "licorera-500-cristal",
      },
    },
    {
      id: "piñera-930-cristal",
      nombre: "Piñera",
      volumen: 930,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 91,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/piñera-930.jpg",
        alt: "piñera-930-cristal",
      },
    },

    // LIMPIEZA
    {
      id: "agroquimica-1000-cristal",
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/agronomica-cristal.jpg",
        alt: "agroquimica-1000-cristal",
      },
    },
    {
      id: "agroquimica-1000-humo",
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.HUMO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/agronomica-humo.jpg",
        alt: "agroquimica-1000-humo",
      },
    },
    {
      id: "agroquimica-1000-ambar",
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/agronomica-ambar.jpg",
        alt: "agroquimica-1000-ambar",
      },
    },
    {
      id: "lavatrastes-400-cristal",
      nombre: "Lavatrastes",
      volumen: 400,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 240,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/lavatrastes-400.jpg",
        alt: "lavatrastes-400-cristal",
      },
    },
    {
      id: "lavatrastes-900-cristal",
      nombre: "Lavatrastes",
      volumen: 900,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/lavatrastes-900.jpg",
        alt: "lavatrastes-900-cristal",
      },
    },
    {
      id: "lavatrastes-1300-cristal",
      nombre: "Lavatrastes",
      volumen: 1300,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 144,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/lavatrastes-1300.jpg",
        alt: "lavatrastes-1300-cristal",
      },
    },
    {
      id: "garrafa-4000-cristal",
      nombre: "Garrafa",
      volumen: 4000,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 35,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/garrafa-4000.jpg",
        alt: "garrafa-4000-cristal",
      },
    },
    {
      id: "garrafa-5000-cristal",
      nombre: "Garrafa",
      volumen: 5000,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 30,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/garrafa-5000.jpg",
        alt: "garrafa-5000-cristal",
      },
    },
    {
      id: "garrafa-10000-cristal",
      nombre: "Garrafa",
      volumen: 10000,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 30,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/garrafa-10000.jpg",
        alt: "garrafa-10000-cristal",
      },
    },
    {
      id: "gatillera-250-cristal",
      nombre: "Gatillera",
      volumen: 250,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 160,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/gatillera-250.jpg",
        alt: "gatillera-250-cristal",
      },
    },
    {
      id: "multiusos-2000-cristal",
      nombre: "Multiusos",
      volumen: 2000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 110,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/multiusos-2000.jpg",
        alt: "multiusos-2000-cristal",
      },
    },
    {
      id: "trigger-500-cristal",
      nombre: "Trigger",
      volumen: 500,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 924,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "trigger-500-cristal.jpg",
        alt: "trigger-500-cristal",
      },
    },
    {
      id: "trigger-500-blanco",
      nombre: "Trigger",
      volumen: 500,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 924,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "trigger-500-blanco.jpg",
        alt: "trigger-500-blanco",
      },
    },

    // * Boston cosmeticos
    {
      id: "boston-60-cristal",
      nombre: "Boston",
      volumen: 60,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 600,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "boston-60.jpg",
        alt: "boston-60-cristal",
      },
    },
    {
      id: "boston-250-cristal",
      nombre: "Boston",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "boston-250.jpg",
        alt: "boston-250-cristal",
      },
    },
    {
      id: "boston-250-2-cristal",
      nombre: "Boston",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/boston-250-r415.jpg",
        alt: "boston-250-2-cristal",
      },
    },
    {
      id: "boston-500-cristal",
      nombre: "Boston",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 200,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "boston-500.jpg",
        alt: "boston-500-cristal",
      },
    },
    {
      id: "boston-900-cristal",
      nombre: "Boston",
      volumen: 900,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 192,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "boston-900.jpg",
        alt: "boston-900-cristal",
      },
    },
    {
      id: "boston-1000-cristal",
      nombre: "Boston",
      volumen: 1000,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "boston-900.jpg",
        alt: "boston-1000-cristal",
      },
    },

    // Especieros
    {
      id: "especiero-alto-120-cristal",
      nombre: "Especiero Alto",
      volumen: 120,
      categorias: [CategoriaProducto.ESPECIEROS],
      rosca: {
        diametro: CodigoRosca.ROSCA_38,
        estandar: null,
      },
      piezasPorPaquete: 456,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "espciero-alto.jpg",
        alt: "especiero-alto-120-cristal",
      },
    },
    {
      id: "especiero-corto-120-cristal",
      nombre: "Especiero Corto",
      volumen: 120,
      categorias: [CategoriaProducto.ESPECIEROS],
      rosca: {
        diametro: CodigoRosca.ROSCA_38,
        estandar: null,
      },
      piezasPorPaquete: 429,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "espciero-corto.jpg",
        alt: "especiero-corto-120-cristal",
      },
    },

    // * Ovales
    {
      id: "oval-60-cristal",
      nombre: "Oval",
      volumen: 60,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: null,
      },
      piezasPorPaquete: 650,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "oval-60-125.jpg",
        alt: "oval-60-cristal",
      },
    },
    {
      id: "oval-125-cristal",
      nombre: "Oval",
      volumen: 125,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 312,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "oval-60-125.jpg",
        alt: "oval-125-cristal",
      },
    },
    {
      id: "oval-250-cristal",
      nombre: "Oval",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "oval-60-125.jpg",
        alt: "oval-250-cristal",
      },
    },
    {
      id: "silueta-125-cristal",
      nombre: "Silueta",
      volumen: 125,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 312,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "silueta-125.jpg",
        alt: "silueta-125-cristal",
      },
    },
    {
      id: "silueta-500-cristal",
      nombre: "Silueta",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "silueta-500.jpg",
        alt: "silueta-500-cristal",
      },
    },
    {
      id: "campanita-500-cristal",
      nombre: "Campanita",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 174,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "campanita-500.jpg",
        alt: "campanita-500-cristal",
      },
    },
    {
      id: "campana-50-cristal",
      nombre: "Campana",
      volumen: 50,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "campanita-60.jpg",
        alt: "campana-50-cristal",
      },
    },
    {
      id: "campana-500-cristal",
      nombre: "Campana",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 195,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "campana-500.jpg",
        alt: "campana-500-cristal",
      },
    },
    {
      id: "campana-250-cristal",
      nombre: "Campana",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "camapana-250.jpg",
        alt: "campana-250-cristal",
      },
    },

    // * Amenidades
    {
      id: "lapiz-25-cristal",
      nombre: "Lapiz",
      volumen: 25,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 1500,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "lapiz-25.jpg",
        alt: "lapiz-25-cristal",
      },
    },
    {
      id: "invertida-30-cristal",
      nombre: "Invertida",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "invertidad-30.jpg",
        alt: "invertida-30-cristal",
      },
    },
    {
      id: "institucional-30-cristal",
      nombre: "Institucional",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "institucional.jpg",
        alt: "institucional-30-cristal",
      },
    },
    {
      id: "cilindrica-30-cristal",
      nombre: "Cilindrica",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "cilindrica.jpg",
        alt: "cilindrica-30-cristal",
      },
    },
    {
      id: "cilindrica-40-cristal",
      nombre: "Cilindrica",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "cilindrica.jpg",
        alt: "cilindrica-40-cristal",
      },
    },
    {
      id: "cubo-40-cristal",
      nombre: "Cubo",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "cubo-40.jpg",
        alt: "cubo-40-cristal",
      },
    },
    {
      id: "farma-40-cristal",
      nombre: "Farma",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "farma-40.jpg",
        alt: "farma-40-cristal",
      },
    },
    {
      id: "Licorera-50-cristal",
      nombre: "Licorera",
      volumen: 50,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 800,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "licorera.jpg",
        alt: "Licorera-50-cristal",
      },
    },
    {
      id: "Oliva-45-cristal",
      nombre: "Oliva",
      volumen: 45,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "oliva-45.jpg",
        alt: "Oliva-45-cristal",
      },
    },
    {
      id: "Oval-60-cristal",
      nombre: "Oval",
      volumen: 60,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: null,
      },
      piezasPorPaquete: 650,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "oval-60-125.jpg",
        alt: "Oval-60-cristal",
      },
    },

    // =========================
    //  * FARMA 125 ML
    // =========================
    {
      id: "farma-125-cristal",
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-240-24.jpg",
        alt: "farma-125-cristal",
      },
    },
    {
      id: "farma-125-blanco",
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-125-blanco.jpg",
        alt: "farma-125-blanco",
      },
    },
    {
      id: "farma-125-ambar",
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-125-ambar.jpg",
        alt: "farma-125-ambar",
      },
    },

    // =========================
    // FARMA 240 ML
    // =========================
    {
      id: "farma-240-cristal",
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-240-24.jpg",
        alt: "farma-240-cristal",
      },
    },
    {
      id: "farma-240-blanco",
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-125-blanco.jpg",
        alt: "farma-240-blanco",
      },
    },
    {
      id: "farma-240-ambar",
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "farma-125-ambar.jpg",
        alt: "farma-240-ambar",
      },
    },

    // =========================
    // PASTILLERO 110 ML
    // =========================
    {
      id: "pastillero-110-cristal",
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-110.jpg",
        alt: "pastillero-110-cristal",
      },
    },
    {
      id: "pastillero-110-blanco",
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-110-blanco.jpg",
        alt: "pastillero-110-blanco",
      },
    },
    {
      id: "pastillero-110-ambar",
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-110-ambar.jpg",
        alt: "pastillero-110-ambar",
      },
    },
    {
      id: "pastillero-110-azul",
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-110-azul.jpg",
        alt: "pastillero-110-azul",
      },
    },
    {
      id: "pastillero-110-amarillo",
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-110-amarillo.jpg",
        alt: "pastillero-110-amarillo",
      },
    },

    // =========================
    // PASTILLERO 150 ML
    // =========================
    {
      id: "pastillero-150-cristal",
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-150-cristal.jpg",
        alt: "pastillero-150-cristal",
      },
    },
    {
      id: "pastillero-150-blanco",
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-150-blanco.jpg",
        alt: "pastillero-150-blanco",
      },
    },
    {
      id: "pastillero-150-ambar",
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-150-ambar.jpg",
        alt: "pastillero-150-ambar",
      },
    },
    {
      id: "pastillero-150-azul",
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-150-azul.jpg",
        alt: "pastillero-150-azul",
      },
    },
    {
      id: "pastillero-150-amarillo",
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-150-amarillo.jpg",
        alt: "pastillero-150-amarillo",
      },
    },

    // =========================
    // TAPAS FARMACÉUTICAS
    // =========================
    {
      id: "tapa-inviolable-r24",
      nombre: "Tapa Inviolable",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: null,
      },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa_inviolable.jpg",
        alt: "tapa-inviolable-r24",
      },
    },
    {
      id: "tapa-children-r38",
      nombre: "Tapa Childrens",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-children.jpg",
        alt: "tapa-children-r38",
      },
    },
    {
      id: "tapa-Ciega-r38",
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-ciega.jpg",
        alt: "tapa-Ciega-r38",
      },
    },

    // =========================
    // TARRO 250 ML
    // =========================
    {
      id: "tarro-250-cristal",
      nombre: "Tarro",
      volumen: 250,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 136,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_250.jpg",
        alt: "tarro-250-cristal",
      },
    },

    // =========================
    // TARRO 500 ML
    // =========================
    {
      id: "tarro-500-cristal",
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_500.jpg",
        alt: "tarro-500-cristal",
      },
    },

    // =========================
    // TARRO 1000 ML
    // =========================
    {
      id: "tarro-1000-cristal",
      nombre: "Tarro",
      volumen: 1000,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 104,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_1000_.jpg",
        alt: "tarro-1000-cristal",
      },
    },
    {
      id: "tarro-500-colores",
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "tarro_colores.jpg",
        alt: "tarro-1000-Colores",
      },
    },

    // =========================
    // TAPA TARRO
    // =========================
    {
      id: "tapa-tarro-r63",
      nombre: "Tapa Tarro",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "Tapa_Tarro_.jpg",
        alt: "tapa-tarro-r63",
      },
    },
    // =========================
    // VITROLERO CUADRADO
    // =========================
    {
      id: "vitrolero-cuadrado-2k",
      nombre: "Vitrolero Cuadrado",
      volumen: 2000, // 2 Kilos ≈ 2000 ml
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 40,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_cuadrado.jpg",
        alt: "vitrolero-cuadrado-2k",
      },
    },

    // =========================
    // VITROLERO 1 KILO
    // =========================
    {
      id: "vitrolero-1k",
      nombre: "Vitrolero",
      volumen: 1000,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 60,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "vitrilero_1000.jpg",
        alt: "vitrolero-1k",
      },
    },

    // =========================
    // VITROLERO 1/2 GALÓN
    // =========================
    {
      id: "vitrolero-medio-galon",
      nombre: "Vitrolero",
      volumen: 1900, // 1/2 galón ≈ 1.9 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 32,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_1_2_galon.jpg",
        alt: "vitrolero-medio-galon",
      },
    },

    // =========================
    // VITROLERO 1 GALÓN
    // =========================
    {
      id: "vitrolero-1-galon",
      nombre: "Vitrolero",
      volumen: 3800, // 1 galón ≈ 3.8 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 25,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_1_galon.jpg",
        alt: "vitrolero-1-galon",
      },
    },

    // =========================
    // TAPA VITROLEROS
    // =========================
    {
      id: "tapa-vitrolero-r110",
      nombre: "Tapa Vitrolero",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa_vitrilero.jpg",
        alt: "tapa-vitrolero-r110",
      },
    },
    // =========================
    // CILINDROS
    // =========================
    {
      id: "Cilindro-1000-cristal",
      nombre: "Cilindro",
      volumen: 1000,
      categorias: [CategoriaProducto.PROMOCIONALES],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 105,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "cilindro_colores.jpg",
        alt: "Cilindro-1000-colores",
      },
    },
    // =========================
    // COMPLEMENTOS
    // =========================
    {
      id: "Trigger-Economico-r-28",
      nombre: "Trigger Economico",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 480,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "trigger_economico.jpg",
        alt: "Trigger-Economico-r-28",
      },
    },
    {
      id: "Trigger-Industrial-r-28",
      nombre: "Trigger Industrial",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "trigger-industrial.jpg",
        alt: "Trigger-Industrial-r-28",
      },
    },

    {
      id: "Trigger-Cola-Pato-r-28",
      nombre: "Trigger Cola de Pato",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "Trigger-cola-de-pato.jpg",
        alt: "Trigger-Cola-Pato-r-28",
      },
    },
    {
      id: "Trigger-Mini-28",
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "mini-trigger-28.jpg",
        alt: "Trigger-Mini-28",
      },
    },

    {
      id: "Trigger-Mini-24",
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "mini-trigger-24.jpg",
        alt: "Trigger-Mini-24",
      },
    },
    {
      id: "Atomizador-Boston-18",
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizador-boston.jpg",
        alt: "Atomizador-Boston-18",
      },
    },
    {
      id: "Atomizador-Boston-20",
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_20, estandar: null },
      piezasPorPaquete: 2500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "atomizador-boston.jpg",
        alt: "Atomizador-Boston-20",
      },
    },
    {
      id: "Atomizador-Boston-24",
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizador-boston.jpg",
        alt: "Atomizador-Boston-24",
      },
    },
    {
      id: "Atomizador-Boston-28",
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizador-boston.jpg",
        alt: "Atomizador-Boston-28",
      },
    },

    {
      id: "Bomba-Dosificadora-28",
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "bomba-dosificadora.jpg",
        alt: "Bomba-Dosificadora-28",
      },
    },
    {
      id: "Bomba-Dosificadora-28-A",
      nombre: "Bomba Dosificadora Reforzada",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 600,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "bomba-dosificadora-reforzada.jpg",
        alt: "Bomba-Dosificadora-28-A",
      },
    },

    {
      id: "Bomba-Dosificadora-24-A",
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 2000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "bomba-dosificadora.jpg",
        alt: "Bomba-Dosificadora-24-A",
      },
    },
    {
      id: "Sport-r-28",
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS, CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 2300,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa-sport.jpg",
        alt: "Sport-r-28",
      },
    },
    {
      id: "Sport-r-63",
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 1500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa_sport.jpg",
        alt: "Sport-r-63",
      },
    },

    {
      id: "Sport-Tapa-Ciega-r-18",
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "tapa-ciega-p.jpg",
        alt: "Sport-Tapa-Ciega-r-18",
      },
    },
    {
      id: "doble-pared-r-18",
      nombre: "Doble Pared",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa-doble-pared.jpg",
        alt: "doble-pared-r-18",
      },
    },
    {
      id: "Flip-Top-r-18",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-1.jpg",
        alt: "Flip-Top-r-18",
      },
    },

    {
      id: "Flip-Top-r-20",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-2.jpg",
        alt: "Flip-Top-r-20",
      },
    },
    {
      id: "Flip-Top-r-24-410",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-3.jpg",
        alt: "Flip-Top-r-24-410",
      },
    },
    {
      id: "Flip-Top-r-24-415",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-2.jpg",
        alt: "Flip-Top-r-24-415",
      },
    },
    {
      id: "Flip-Top-r-28-410",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-2.jpg",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Flip-Top-r-28-410",
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "flip-flop-natural.jpg",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-24-415",
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-disk-top.jpg",
        alt: "Tapa-Disk-Top-r-24-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-20-410",
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "disk-top-sup.jpg",
        alt: "Tapa-Disk-Top-r-20-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-415",
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "disk-top-sup.jpg",
        alt: "Tapa-Disk-Top-r-28-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-410",
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-disk-top.jpg",
        alt: "Tapa-Disk-Top-r-28-410",
      },
    },
  ]),
});

export {
  CatalogoProductos,
  CategoriaProducto,
  CodigoRosca,
  ColorProducto,
  EtiquetaProducto,
};
