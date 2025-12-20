import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import ScrollToTop from "../../../routes/ScrollTop.jsx";
import CartDrawer from "../cart/CartDrawer";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../../UI/Loader.jsx";
import Chat from "../chat/ChatbotAssistant.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="min-h-screen bg-bgligth-main text-txtligth-primary dark:bg-bgdark-main dark:text-txtdark-primary overflow-hidden">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

        <CartDrawer />
        <Chat />
      </main>

      <Footer />
    </>
  );
}
