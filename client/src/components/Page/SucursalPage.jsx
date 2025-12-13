import { useParams } from "react-router-dom";
import { sucursalesData } from "../../utils/sucursales";

const SucursalPage = () => {
  const { slug } = useParams();
  const sucursal = sucursalesData.find((s) => s.path === slug);

  if (!sucursal)
    return (
      <div className="p-10 text-center text-gray-500 dark:text-txtdark-secondary">
        Sucursal no encontrada
      </div>
    );

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-txtligth-primary dark:text-txtdark-primary">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-txtdark-secondary mb-6">
          Inicio / Sucursales / {sucursal.name}
        </div>

        {/* Título y subtítulo */}
        <h1 className="text-4xl md:text-5xl font-black text-corporate-blue dark:text-txtdark-brand-primary mb-3">
          Sucursal {sucursal.name}
        </h1>
        <p className="text-gray-500 dark:text-txtdark-secondary mb-10">
          Encuentra nuestra ubicación, horarios y ponte en contacto con
          nosotros.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-5 gap-6 mb-10">
          {/* Mapa */}
          <div className="md:col-span-3">
            <div className="w-full h-[400px] md:h-[500px] rounded-xl shadow-md dark:shadow-none overflow-hidden">
              <iframe
                src={sucursal.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Información */}
          <div className="md:col-span-2 bg-white dark:bg-bgdark-secondary p-6 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-transparent space-y-6">
            {/* Dirección */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cta-green mt-1">
                location_on
              </span>
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Dirección
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  {sucursal.address}
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cta-green mt-1">
                schedule
              </span>
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Horario de Atención
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  Lunes a Jueves: 8:00 AM - 5:00 PM
                  <br />
                  Viernes: 8:00 AM - 3:30 PM
                  <br />
                  Sábado y Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cta-green mt-1">
                call
              </span>
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Contacto
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  {sucursal.phone.join(" / ")}
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-cta-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.49 2 2 6.49 2 12.04c0 2.11.55 4.08 1.5 5.78L2 22l4.37-1.38c1.7.95 3.67 1.5 5.77 1.5 5.55 0 10.04-4.49 10.04-10.04S17.59 2 12.04 2zm5.34 14.2c-.23.65-1.32 1.25-1.82 1.33-.47.08-1.04.12-2.37-.48-3.06-1.36-5-4.02-5.16-4.18-.16-.16-1.28-1.54-1.28-2.93s.69-2.07.94-2.35c.24-.27.53-.33.71-.33.18 0 .37 0 .53 0 .17 0 .4-.06.61.45.22.51.74 1.77.8 1.9.07.12.11.27.02.44-.08.18-.12.3-.25.46-.12.16-.26.36-.37.48-.12.12-.24.27-.1.53.14.25.62 1.02 1.33 1.65.92.86 1.7 1.14 2.07 1.27.3.1.48.08.66-.05.18-.13.74-.86.93-1.15.18-.29.36-.24.61-.14.24.1 1.5.7 1.76.83.27.13.44.2.5.31.07.1.07.58-.16 1.23z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta-green font-medium hover:underline"
                >
                  {sucursal.whatsapp}
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-cta-green mt-1 flex-shrink-0"
                viewBox="0 0 320 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.08c0-25.35 12.42-50.06 52.24-50.06H293V6.26S265.89 0 242.4 0C183.32 0 136.36 46.95 136.36 132.07V195.3H48v92.66h88.36V512h107.78V288z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Facebook
                </h3>
                <a
                  href={sucursal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta-green hover:underline"
                >
                  {sucursal.facebook}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white dark:bg-bgdark-tertiary p-6 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg text-corporate-blue dark:text-txtdark-brand-primary flex-1 text-left">
            ¿Listo para comenzar tu proyecto?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-hover)] text-white rounded-xl font-bold transition-colors text-center "
            >
              Llamar ahora
            </a>
            <a
              href="#cotizacion"
              className="w-full sm:w-auto px-6 py-3 bg-[#2C4864] hover:bg-[#243b52]     text-white rounded-xl font-bold transition-colors text-center "
            >
              Solicitar cotización desde esta sucursal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucursalPage;
