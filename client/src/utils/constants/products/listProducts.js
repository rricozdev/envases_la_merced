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

// Se agrega unidades de medida estándar utilizadas para volumen o capacidad de los productos
const UnidadesDeMedida = Object.freeze({
  LITRO: "lt",
  GALON: "gal",
  KILOGRAMO: "kgrs",
});

const CatalogoProductos = Object.freeze({
  productos: Object.freeze([
    // * AGUAS Y JUGOS
    {
      id: "sinfin-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/img-r28-sinfin--250.png",
        alt: "sinfin-250-cristal",
      },
    },
    {
      id: "sinfin-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/img-r28-sinfin-500.png",
        alt: "sinfin-500-cristal",
      },
    },
    {
      id: "sinfin-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/img-r28-sinfin-1000.png",
        alt: "sinfin-1000-cristal",
      },
    },
    {
      id: "sinfin-1500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/img-r28-sinfin-1500.png",
        alt: "sinfin-1500-cristal",
      },
    },
    {
      id: "olas-rombo-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/olas_rombo_r-28.png",
        alt: "olas-rombo-500-cristal",
      },
    },
    {
      id: "jubileo-355-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/jubileo-r28-cristal.png",
        alt: "jubileo-355-cristal",
      },
    },

    // * COMPLEMENTOS - AGUA
    {
      id: "tapa-cintillo-rosca-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/tapa_cintillo-r-28.png",
        alt: "tapa-cintillo-rosca-28",
      },
    },
    {
      id: "refresquera-rosca-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/tapa-1.png",
        alt: "refresquera-rosca-28",
      },
    },

    // AMENIDADES
    {
      id: "licorera-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/licorera-1000-500.png",
        alt: "licorera-1000-cristal",
      },
    },
    {
      id: "licorera-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/licorera-1000-500.png",
        alt: "licorera-500-cristal",
      },
    },
    {
      id: "piñera-930-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/piñera-930.png",
        alt: "piñera-930-cristal",
      },
    },

    // LIMPIEZA
    {
      id: "agroquimica-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/agronomica-cristal.png",
        alt: "agroquimica-1000-cristal",
      },
    },
    {
      id: "agroquimica-1000-humo",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/agronomica-humo.png",
        alt: "agroquimica-1000-humo",
      },
    },
    {
      id: "agroquimica-1000-ambar",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/agronomica-ambar.png",
        alt: "agroquimica-1000-ambar",
      },
    },
    {
      id: "lavatrastes-400-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/lavatrastes-400.png",
        alt: "lavatrastes-400-cristal",
      },
    },
    {
      id: "lavatrastes-900-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/lavatrastes-900.png",
        alt: "lavatrastes-900-cristal",
      },
    },
    {
      id: "lavatrastes-1300-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/lavatrastes-1300.png",
        alt: "lavatrastes-1300-cristal",
      },
    },
    {
      id: "garrafa-4000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/garrafa-4000.png",
        alt: "garrafa-4000-cristal",
      },
    },
    {
      id: "garrafa-5000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/garrafa-5000.png",
        alt: "garrafa-5000-cristal",
      },
    },
    {
      id: "garrafa-10000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/garrafa-10000.png",
        alt: "garrafa-10000-cristal",
      },
    },
    {
      id: "gatillera-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/gatillera-250.png",
        alt: "gatillera-250-cristal",
      },
    },
    {
      id: "multiusos-2000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/multiusos-2000.png",
        alt: "multiusos-2000-cristal",
      },
    },
    {
      id: "trigger-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "trigger-500-cristal.png",
        alt: "trigger-500-cristal",
      },
    },
    {
      id: "trigger-500-blanco",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "trigger-500-blanco.png",
        alt: "trigger-500-blanco",
      },
    },

    // * Boston cosmeticos
    {
      id: "boston-60-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "boston-60.png",
        alt: "boston-60-cristal",
      },
    },
    {
      id: "boston-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "boston-250-r415.png",
        alt: "boston-250-cristal",
      },
    },
    {
      id: "boston-250-2-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "/boston-250-r415.png",
        alt: "boston-250-2-cristal",
      },
    },
    {
      id: "boston-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "boston-500-sm.png",
        alt: "boston-500-cristal",
      },
    },
    {
      id: "boston-900-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "boston-900.png",
        alt: "boston-900-cristal",
      },
    },
    {
      id: "boston-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "boston-900.png",
        alt: "boston-1000-cristal",
      },
    },

    // Especieros
    {
      id: "especiero-alto-120-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "espciero-alto.png",
        alt: "especiero-alto-120-cristal",
      },
    },
    {
      id: "especiero-corto-120-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "espciero-corto.png",
        alt: "especiero-corto-120-cristal",
      },
    },

    // * Ovales
    {
      id: "oval-60-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "oval-60-125.png",
        alt: "oval-60-cristal",
      },
    },
    {
      id: "oval-125-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "oval-60-125.png",
        alt: "oval-125-cristal",
      },
    },
    {
      id: "oval-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "oval-60-125.png",
        alt: "oval-250-cristal",
      },
    },
    {
      id: "silueta-125-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "silueta-125.png",
        alt: "silueta-125-cristal",
      },
    },
    {
      id: "silueta-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "silueta-500.png",
        alt: "silueta-500-cristal",
      },
    },
    {
      id: "campanita-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "campanita-60.png",
        alt: "campanita-500-cristal",
      },
    },
    {
      id: "campana-50-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "campanita-500.png",
        alt: "campana-50-cristal",
      },
    },
    {
      id: "campana-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "campana-500.png",
        alt: "campana-500-cristal",
      },
    },
    {
      id: "campana-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "camapana-250.png",
        alt: "campana-250-cristal",
      },
    },

    // * Amenidades
    {
      id: "lapiz-25-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "lapiz-25.png",
        alt: "lapiz-25-cristal",
      },
    },
    {
      id: "invertida-30-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "invertidad-30.png",
        alt: "invertida-30-cristal",
      },
    },
    {
      id: "institucional-30-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "institucional.png",
        alt: "institucional-30-cristal",
      },
    },
    {
      id: "cilindrica-30-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "cilindrica.png",
        alt: "cilindrica-30-cristal",
      },
    },
    {
      id: "cilindrica-40-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "cilindrica.png",
        alt: "cilindrica-40-cristal",
      },
    },
    {
      id: "cubo-40-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "cubo-40.png",
        alt: "cubo-40-cristal",
      },
    },
    {
      id: "farma-40-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-40.png",
        alt: "farma-40-cristal",
      },
    },
    {
      id: "Oliva-45-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "oliva-45.png",
        alt: "Oliva-45-cristal",
      },
    },
    {
      id: "Oval-60-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "oval-60-125.png",
        alt: "Oval-60-cristal",
      },
    },

    // =========================
    //  * FARMA 125 ML
    // =========================
    {
      id: "farma-125-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-240-24.png",
        alt: "farma-125-cristal",
      },
    },
    {
      id: "farma-125-blanco",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-125-blanco.png",
        alt: "farma-125-blanco",
      },
    },
    {
      id: "farma-125-ambar",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-125-ambar.png",
        alt: "farma-125-ambar",
      },
    },

    // =========================
    // FARMA 240 ML
    // =========================
    {
      id: "farma-240-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-240-24.png",
        alt: "farma-240-cristal",
      },
    },
    {
      id: "farma-240-blanco",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-125-blanco.png",
        alt: "farma-240-blanco",
      },
    },
    {
      id: "farma-240-ambar",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "farma-125-ambar.png",
        alt: "farma-240-ambar",
      },
    },

    // =========================
    // PASTILLERO 110 ML
    // =========================
    {
      id: "pastillero-110-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-110.png",
        alt: "pastillero-110-cristal",
      },
    },
    {
      id: "pastillero-110-blanco",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-110-blanco.png",
        alt: "pastillero-110-blanco",
      },
    },
    {
      id: "pastillero-110-ambar",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-110-ambar.png",
        alt: "pastillero-110-ambar",
      },
    },
    {
      id: "pastillero-110-azul",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-110-azul.png",
        alt: "pastillero-110-azul",
      },
    },
    {
      id: "pastillero-110-amarillo",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-110-amarillo.png",
        alt: "pastillero-110-amarillo",
      },
    },

    // =========================
    // PASTILLERO 150 ML
    // =========================
    {
      id: "pastillero-150-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "pastillero-150-cristal.png",
        alt: "pastillero-150-cristal",
      },
    },
    {
      id: "pastillero-150-blanco",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-150-blanco.png",
        alt: "pastillero-150-blanco",
      },
    },
    {
      id: "pastillero-150-ambar",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "pastillero-150-ambar.png",
        alt: "pastillero-150-ambar",
      },
    },
    {
      id: "pastillero-150-azul",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-150-azul.png",
        alt: "pastillero-150-azul",
      },
    },
    {
      id: "pastillero-150-amarillo",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "pastillero-150-amarillo.png",
        alt: "pastillero-150-amarillo",
      },
    },

    // =========================
    // TAPAS FARMACÉUTICAS
    // =========================
    {
      id: "tapa-inviolable-r24",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "tapa_inviolable.png",
        alt: "tapa-inviolable-r24",
      },
    },
    {
      id: "tapa-children-r38",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Childrens",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-children.png",
        alt: "tapa-children-r38",
      },
    },
    {
      id: "tapa-Ciega-r38",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa-ciega.png",
        alt: "tapa-Ciega-r38",
      },
    },

    // =========================
    // TARRO 250 ML
    // =========================
    {
      id: "tarro-250-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 250,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 136,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_250.png",
        alt: "tarro-250-cristal",
      },
    },

    // =========================
    // TARRO 500 ML
    // =========================
    {
      id: "tarro-500-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_500.png",
        alt: "tarro-500-cristal",
      },
    },

    // =========================
    // TARRO 1000 ML
    // =========================
    {
      id: "tarro-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 1000,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 104,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tarro_1000_.png",
        alt: "tarro-1000-cristal",
      },
    },
    {
      id: "tarro-500-colores",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "tarro_colores.png",
        alt: "tarro-1000-Colores",
      },
    },

    // =========================
    // TAPA TARRO
    // =========================
    {
      id: "tapa-tarro-r63",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Tarro",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "Tapa_Tarro_.png",
        alt: "tapa-tarro-r63",
      },
    },
    // =========================
    // VITROLERO CUADRADO
    // =========================
    {
      id: "vitrolero-cuadrado-2k",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero Cuadrado",
      volumen: 2000, // 2 Kilos ≈ 2000 ml
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 40,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_cuadrado.png",
        alt: "vitrolero-cuadrado-2k",
      },
    },

    // =========================
    // VITROLERO 1 KILO
    // =========================
    {
      id: "vitrolero-1k",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 1000,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 60,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "vitrilero_1000.png",
        alt: "vitrolero-1k",
      },
    },

    // =========================
    // VITROLERO 1/2 GALÓN
    // =========================
    {
      id: "vitrolero-medio-galon",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 1900, // 1/2 galón ≈ 1.9 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 32,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_1_2_galon.png",
        alt: "vitrolero-medio-galon",
      },
    },

    // =========================
    // VITROLERO 1 GALÓN
    // =========================
    {
      id: "vitrolero-1-galon",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 3800, // 1 galón ≈ 3.8 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 25,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "vitrilero_1_galon.png",
        alt: "vitrolero-1-galon",
      },
    },

    // =========================
    // TAPA VITROLEROS
    // =========================
    {
      id: "tapa-vitrolero-r110",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Vitrolero",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "tapa_vitrilero.png",
        alt: "tapa-vitrolero-r110",
      },
    },
    // =========================
    // CILINDROS
    // =========================
    {
      id: "Cilindro-1000-cristal",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Cilindro",
      volumen: 1000,
      categorias: [CategoriaProducto.PROMOCIONALES],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 105,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "cilindro_colores.png",
        alt: "Cilindro-1000-colores",
      },
    },
    // =========================
    // COMPLEMENTOS
    // =========================
    {
      id: "Trigger-Economico-r-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Economico",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 480,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "trigger_economico.png",
        alt: "Trigger-Economico-r-28",
      },
    },
    {
      id: "Trigger-Industrial-r-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Industrial",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "trigger-industrial.png",
        alt: "Trigger-Industrial-r-28",
      },
    },

    {
      id: "Trigger-Cola-Pato-r-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Cola de Pato",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "Trigger-cola-de-pato.png",
        alt: "Trigger-Cola-Pato-r-28",
      },
    },
    {
      id: "Trigger-Mini-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "mini-trigger-28.png",
        alt: "Trigger-Mini-28",
      },
    },

    {
      id: "Trigger-Mini-24",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "mini-trigger-24.png",
        alt: "Trigger-Mini-24",
      },
    },
    {
      id: "Atomizador-Boston-18",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizaro_boston_1.png",
        alt: "Atomizador-Boston-18",
      },
    },
    {
      id: "Atomizador-Boston-20",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_20, estandar: null },
      piezasPorPaquete: 2500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "atomizaro_boston_1.png",
        alt: "Atomizador-Boston-20",
      },
    },
    {
      id: "Atomizador-Boston-24",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizaro_boston_1.png",
        alt: "Atomizador-Boston-24",
      },
    },
    {
      id: "Atomizador-Boston-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "atomizaro_boston_1.png",
        alt: "Atomizador-Boston-28",
      },
    },

    {
      id: "Bomba-Dosificadora-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "bomba-dosificadora.png",
        alt: "Bomba-Dosificadora-28",
      },
    },
    {
      id: "Bomba-Dosificadora-28-A",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora Reforzada",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 600,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "bomba-dosificadora-reforzada.png",
        alt: "Bomba-Dosificadora-28-A",
      },
    },

    {
      id: "Bomba-Dosificadora-24-A",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 2000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "bomba-dosificadora.png",
        alt: "Bomba-Dosificadora-24-A",
      },
    },
    {
      id: "Sport-r-28",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS, CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 2300,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa-sport.png",
        alt: "Sport-r-28",
      },
    },
    {
      id: "Sport-r-63",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 1500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa_sport.png",
        alt: "Sport-r-63",
      },
    },

    {
      id: "Sport-Tapa-Ciega-r-18",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "tapa-ciega-p.png",
        alt: "Sport-Tapa-Ciega-r-18",
      },
    },
    {
      id: "doble-pared-r-18",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
      nombre: "Doble Pared",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "tapa-doble-pared.png",
        alt: "doble-pared-r-18",
      },
    },
    {
      id: "Flip-Top-r-18",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-1.png",
        alt: "Flip-Top-r-18",
      },
    },

    {
      id: "Flip-Top-r-20",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-2.png",
        alt: "Flip-Top-r-20",
      },
    },
    {
      id: "Flip-Top-r-24-410",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-3.png",
        alt: "Flip-Top-r-24-410",
      },
    },
    {
      id: "Flip-Top-r-24-415",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-2.png",
        alt: "Flip-Top-r-24-415",
      },
    },
    {
      id: "Flip-Top-r-28-410",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-2.png",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Flip-Top-r-28-410-29",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "flip-flop-natural.png",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-24-415",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "tapa-disk-top.png",
        alt: "Tapa-Disk-Top-r-24-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-20-410",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "disk-top-sup.png",
        alt: "Tapa-Disk-Top-r-20-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-415",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "disk-top-sup.png",
        alt: "Tapa-Disk-Top-r-28-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-410",
      unidad: "", // utiliza el objeto, con la propiedad que corresponda
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
        src: "tapa-disk-top.png",
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
