export function messageWhasapSchemaCartProduct(products) {
  let msg =
    "👋 *Hola,*%0A" +
    "Estoy interesado en cotizar los siguientes productos:%0A%0A";

  products.forEach((product, index) => {
    msg +=
      `*${index + 1}. ${product.nombre}*` +
      `${product.volumen ? ` · ${product.volumen} ml` : ""}%0A` +
      `▫️ *Cantidad:* ${product.quantity}%0A` +
      `${
        product.piezasPorPaquete
          ? `▫️ *PZS / Paq:* ${product.piezasPorPaquete}%0A`
          : ""
      }` +
      "%0A";
  });

  msg += "Quedo atento(a) a su respuesta. ¡Gracias! 🙌";

  return msg;
}
