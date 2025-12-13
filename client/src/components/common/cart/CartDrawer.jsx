import { useContext } from "react";
import { UIContext } from "../../../Providers/UIProvider";
import { OVERLAYS } from "../../../utils/constants/overlays";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartFooter from "./CartFooter";

export default function CartDrawer() {
  const { isOpen, close } = useContext(UIContext);
  const open = isOpen(OVERLAYS.CART);

  return (
    <aside
      className={`
        fixed top-0 right-0 z-50
        h-screen  sm:w-96
        bg-bgligth-main dark:bg-bgdark-tertiary
        shadow-2xl
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      aria-hidden={!open}
    >
      <CartHeader />
      <CartList />
      <CartFooter />
    </aside>
  );
}
