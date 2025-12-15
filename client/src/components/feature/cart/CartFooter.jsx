import { useContext } from "react";
import { CartContext } from "../../../Providers/CartProvider";
import Button from "../../UI/Button";

export default function CartFooter() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <footer className="border-t p-4 bg-bgligth-main dark:bg-bgdark-tertiary">
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
          <Button size="sm" variant="outline">
            Solicitar cotización
          </Button>
        </div>
      </div>
    </footer>
  );
}
