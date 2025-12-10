import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bgligth-main text-txtligth-primary dark:bg-bgdark-main dark:text-txtdark-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
