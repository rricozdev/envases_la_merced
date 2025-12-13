import { useContext } from "react";
import { UIContext } from "../../../Providers/UIProvider";
import { OVERLAYS } from "../../../utils/constants/overlays";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

export default function CartDrawer() {
  const { isOpen, close } = useContext(UIContext);
  const open = isOpen(OVERLAYS.CART);

  return (
    <div
      className={`fixed top-0 right-0 h-screen  bg-bgligth-main shadow-2xl dark:bg-bgdark-tertiary transition-transform duration-300 ease-in-out z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CartHeader />
      <CartList />
    </div>
  );
}
