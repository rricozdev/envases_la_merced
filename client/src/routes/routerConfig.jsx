import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/feature/Layout/Layout.jsx";
import Loader from "../components/UI/Loader.jsx";
import SucursalPage from "../Pages/SucursalPage.jsx";

const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const Products = lazy(() => import("../Pages/Products"));
const NotFound = lazy(() => import("../Pages/NotFound"));

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
      {
        path: "/sucursales/:slug",
        element: <SucursalPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
