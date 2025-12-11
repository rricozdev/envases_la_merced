import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/common/Layout/Layout.jsx";
import Loader from "../components/common/Shared/Loader.jsx";

const Home = lazy(() => import("../components/Page/Home"));
const About = lazy(() => import("../components/Page/About"));
const Contact = lazy(() => import("../components/Page/Contact"));
const Products = lazy(() => import("../components/Page/Products"));
const Cart = lazy(() => import("../components/Page/Cart"));
const Branches = lazy(() => import("../components/Page/Branches"));
const NotFound = lazy(() => import("../components/Page/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "sobre-nosotros", element: <About /> },
      { path: "contacto", element: <Contact /> },
      { path: "catalogo", element: <Products /> },
      { path: "carrito", element: <Cart /> },
      { path: "sucursales/:name", element: <Branches /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
