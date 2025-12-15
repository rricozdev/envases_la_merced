import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "../cart/CartDrawer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bgligth-main text-txtligth-primary dark:bg-bgdark-main dark:text-txtdark-primary overflow-hidden">
        <Outlet />
        <CartDrawer />
      </main>
      <Footer />
    </>
  );
}
