import { useContext, useState } from "react";
import { messageWhasapSchemaCartProduct } from "../../../feature/chat/messageWhasapSchema";
import { openWhatsApp } from "../../../feature/chat/whatsappAction";
import { CartContext } from "../../../Providers/CartProvider";
import { sucursalesData } from "../../../utils/constants/sucursales";
import Button from "../../UI/Button";

export default function CartFooter() {
  const { cart, clearCart } = useContext(CartContext);
  const [isOpen, setOpen] = useState(false);

  console.log(messageWhasapSchemaCartProduct(cart));

  return (
    <footer className="border-t p-4 bg-bgligth-main dark:bg-bgdark-tertiary relative">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-gray-500 dark:text-txtdark-brand-primary/90">
          {cart.length} producto{cart.length !== 1 && "s"}
        </span>

        <div className="flex gap-2">
          <Button
            size="sm"
            type="secondary"
            variant="outline"
            onClick={clearCart}
          >
            Limpiar
          </Button>

          <Button size="sm" variant="outline" onClick={() => setOpen(!isOpen)}>
            {isOpen ? "Pedir Cotización" : "Cerrar Sucursales"}
          </Button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute w-50 h-60 top-[-250px] bg-bgligth-secondary dark:bg-bgdark-main right-2 flex flex-col gap-2 p-4 rounded shadow-inner`}
          >
            <h3 className="text-xs text-txtligth-primary dark:text-txtdark-primary">
              Seleccione la sucursal de su interés.
            </h3>
            {sucursalesData.map(({ name, whatsapp }, i) => (
              <Button
                size="sm"
                type="secondary"
                fullWidth
                key={i}
                onClick={() =>
                  openWhatsApp({
                    phone: whatsapp,
                    message: messageWhasapSchemaCartProduct(cart),
                  })
                }
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
