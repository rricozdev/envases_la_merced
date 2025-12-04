import { RouterProvider } from "react-router-dom";
import router from "../routes/routerConfig";
export default function Providers() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
