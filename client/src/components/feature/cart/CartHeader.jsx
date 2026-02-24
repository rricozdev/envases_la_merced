import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { UIContext } from "../../../Providers/UIProvider";
import { OVERLAYS } from "../../../utils/constants/overlays";
import Button from "../../UI/Button";

export default function CartHeader() {
  const { close } = useContext(UIContext);

  return (
    <header className="flex items-start justify-between gap-4 p-4 border-b">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Carrito de Cotización
        </h2>
        <p className="mt-2 text-sm text-text-light-body max-w-md">
          Revise los productos seleccionados antes de solicitar su cotización.
        </p>
      </div>

      <Button
        type="secondary"
        variant="outline"
        size="sm"
        iconOnly
        className=" shrink-0 dark:text-txtdark-primary text-txtligth-primary dark:border-txtdark-primary  dark:hover:bg-txtdark-primary  dark:hover:text-txtligth-primary"
        icon={<CloseIcon />}
        onClick={() => close(OVERLAYS.CART)}
      />
    </header>
  );
}
