import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../utils/navLinks.js";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bgligth-main/90 dark:bg-bgdark-main/90 backdrop-blur-lg border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 text-primary shrink-0">{/* SVG */}</div>
              <h1 className="text-txtligth-primary dark:text-txtdark-primary text-xl font-bold">
                Envases La Merced
              </h1>
            </Link>
          </div>

          {/* Navegación de escritorio */}
          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Menú principal"
          >
            <ul className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.submenu ? (
                    <>
                      <button className="flex items-center gap-1 text-txtligth-primary dark:text-txtdark-primary text-base font-medium hover:text-accent transition-colors">
                        <span>{link.name}</span>
                        <ExpandMoreRoundedIcon className="text-xl" />
                      </button>
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-bgligth-main dark:bg-bgdark-main border border-light-border dark:border-dark-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              className="block px-4 py-3 text-sm text-txtligth-primary dark:text-txtdark-primary hover:bg-bgligth-secondary dark:hover:bg-bgdark-secondary"
                              to={`sucursales/${item.path}`} // <- corregido typo "paht" a "path"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-txtligth-primary dark:text-txtdark-primary text-base font-medium hover:text-brand-accent-hover transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* contenedor de botones */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 text-white text-base font-bold transition-all"
            >
              {isDark ? (
                <WbSunnyRoundedIcon className="text-txtdark-primary hover:text-brand-accent-hover" />
              ) : (
                <DarkModeRoundedIcon className="text-txtligth-primary hover:text-brand-accent-hover" />
              )}
            </button>

            {/* Botón menú móvil/tablet */}
            <button
              className="lg:hidden cursor-pointer text-txtligth-primary dark:text-txtdark-primary"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <CloseRoundedIcon className="text-3xl" />
              ) : (
                <MenuRoundedIcon className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-bgligth-main dark:bg-bgdark-main border-t border-light-border dark:border-dark-border shadow-lg z-50">
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.submenu ? (
                    <details>
                      <summary className="flex justify-between items-center cursor-pointer text-txtligth-primary dark:text-txtdark-primary px-2 py-2 rounded hover:bg-bgligth-secondary dark:hover:bg-bgdark-secondary">
                        {link.name} <ExpandMoreRoundedIcon />
                      </summary>
                      <ul className="mt-2 ml-4 flex flex-col gap-2">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              to={`sucursales/${item.path}`}
                              className="block px-2 py-1 rounded text-txtligth-primary dark:text-txtdark-primary hover:bg-bgligth-secondary dark:hover:bg-bgdark-secondary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-2 py-2 rounded text-txtligth-primary dark:text-txtdark-primary hover:bg-bgligth-secondary dark:hover:bg-bgdark-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
