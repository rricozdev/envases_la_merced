import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  // Inicializa desde localStorage o preferencia del sistema
  /**
   * TODO: HACER ALGO SIMILIAR PERO EN EL HEADER PARA CAMBIAR DE MODOS DESDE ALLA
   * const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => setIsDark((prev) => !prev);
  // document.documentElement.classList.toggle("dark", isDark)
   */
  // ;

  return (
    <>
      {/* Header aquí */}
      <main className="min-h-screen ">
        <Outlet />
      </main>
      {/* Footer aquí */}
    </>
  );
}
