import { useContext } from "react";
import { CartContext } from "../../../Providers/CartProvider";
import Button from "../UI/Button";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <li className="flex gap-4 py-6">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-dark-border dark:border-light-border">
        <img
          src={item.img.src}
          alt={item.img.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-txtligth-primary">
            {item.name}
          </h3>

          <Button
            icon={<DeleteRoundedIcon />}
            iconOnly
            type="secondary"
            variant="ghost"
            size="sm"
            className="shrink-0"
            onClick={() => removeFromCart(item.id)}
            aria-label="Eliminar producto"
          />
        </div>
        <p className="text-sm text-text-light-body">{item.smDescription}</p>
        <div className="flex items-center gap-2">
          <label
            htmlFor={`qty-${item.id}`}
            className="text-xs text-txtligth-brand-primary/80"
          >
            Cantidad
          </label>

          <input
            id={`qty-${item.id}`}
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="w-20 rounded-md border border-border-light bg-subtle-light text-text-light-heading shadow-sm focus:border-accent focus:ring-accent text-sm"
          />
        </div>
      </div>
    </li>
  );
}
