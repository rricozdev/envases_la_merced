import { RouterProvider } from "react-router-dom";
import router from "../routes/routerConfig";
import { ThemeProvider } from "./ThemeProvider";
import { CartProvider } from "./CartProvider";
import { UIProvider } from "./UIProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers() {
  return (
    <ThemeProvider>
      <UIProvider>
        <CartProvider>
          <RouterProvider router={router} />
          {/* Toasts globales */}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
            toastClassName={() =>
              "bg-white text-gray-800 text-sm rounded-lg shadow-lg px-4 py-3"
            }
            progressClassName="bg-brand-accent"
          />
        </CartProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
