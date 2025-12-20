import { useContext, useState } from "react";
import { CartContext } from "../../../Providers/CartProvider";
import Button from "../../UI/Button";

const CITIES = ["CDMX", "Puebla", "Veracruz", "Neza", "Querétaro"];

export default function CartFooter() {
  const { cart, clearCart } = useContext(CartContext);
  const [isOpen, setOpen] = useState(false);
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

          {/* //todo: agregar el enlace a la cotización  */}
          <Button size="sm" variant="outline" onClick={() => setOpen(!isOpen)}>
            {isOpen ? "Pedir Cotización" : "Cerrar Sucursales"}
          </Button>
          <div
            className={`${
              isOpen ? "hidden" : "block"
            } absolute w-50 h-60 top-[-250px] bg-bgligth-secondary dark:bg-bgdark-main right-2 flex flex-col gap-2 p-4 rounded shadow-inner`}
          >
            <h3 className="text-xs text-txtligth-primary dark:text-txtdark-primary">
              Seleccione la sucursal de su interes
            </h3>
            {CITIES.map((city, i) => (
              <Button size="sm" type="secondary" fullWidth key={i}>
                {city}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
