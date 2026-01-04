import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import { Link } from "react-router-dom";
import { navLinks, sucursales } from "../../../utils/constants/navLinks";

export default function Footer() {
  return (
    <footer className="bg-bgligth-footer text-txtdark-brand-primary dark:bg-bgdark-footer dark:text-txtdark-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-20  text-brand-accent shrink-0">
                <img
                  className="w-full h-full object-contain"
                  src="/logo_dark_mode.webp"
                  alt="Logo de Envases La Merced"
                />
              </div>
              <h2 className="text-xl font-bold">Envases La Merced</h2>
            </div>
            <p className="text-base text-gray-300">
              Comprometidos con la calidad y el servicio, somos su socio
              estratégico en soluciones de envasado.
            </p>
          </div>

          {/* Contacto */}
          <address className="flex flex-col items-center md:items-start space-y-4 not-italic">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <LocationOnRoundedIcon fontSize="small" />
                <span>
                  Azafrán 380, Granjas México Iztacalco, CP 08400 Ciudad de
                  México, CDMX
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <LocalPhoneRoundedIcon fontSize="small" />
                <span>+5215576576045</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MarkunreadRoundedIcon fontSize="small" />
                <span>grangas@envaseslamerced.mx</span>
              </li>
            </ul>
          </address>

          {/* Sucursales */}
          <section className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Sucursales</h3>
            <ul className="space-y-3 text-base text-gray-300 text-center md:text-left">
              {sucursales.map((sucursal) => (
                <li key={sucursal.name}>
                  <Link
                    className="hover:text-brand-accent-hover transition-colors"
                    to={`sucursales/${sucursal.path}`}
                    aria-label={`Ir a la sucursal ${sucursal.name}`}
                  >
                    {sucursal.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Enlaces útiles */}
          <nav
            className="flex flex-col items-center md:items-start space-y-4"
            aria-label="Enlaces útiles"
          >
            <h3 className="text-lg font-semibold text-white">Enlaces Útiles</h3>
            <ul className="space-y-3 text-base text-gray-300 text-center md:text-left">
              {navLinks
                .filter((link) => !link.submenu)
                .map((link) => (
                  <li key={link.name}>
                    <Link
                      className="hover:text-brand-accent-hover transition-colors"
                      to={link.href}
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left gap-4">
            <p className="text-sm text-gray-300">
              © 2026 Envases La Merced. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
