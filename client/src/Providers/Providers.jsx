import { RouterProvider } from "react-router-dom";
import router from "../routes/routerConfig";
import { ThemeProvider } from "./ThemeProvider";
import { CartProvider } from "./CartProvider";
import { UIProvider } from "./UIProvider";

export default function Providers() {
  return (
    <ThemeProvider>
      <UIProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
