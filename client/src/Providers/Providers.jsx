import { RouterProvider } from "react-router-dom";
import router from "../routes/routerConfig";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
