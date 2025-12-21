export function messageWhasapSchemaCartProduct(products) {
  let msg = "*Hola*," + "Estoy interesado en cotizar los siguientes productos:";

  products.forEach((product, index) => {
    msg += `*${index + 1}. ${product.nombre}*
      ${product.volumen ? ` · ${product.volumen} ml` : ""}
       - *Cantidad:* ${product.quantity}
      ${
        product.piezasPorPaquete
          ? `- *PZS / Paq:* ${product.piezasPorPaquete}`
          : ""
      }
      `;
  });

  msg += "Quedo atento(a) a su respuesta. ¡Gracias!";

  return msg;
}
