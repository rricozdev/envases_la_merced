import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";

import { useParams } from "react-router-dom";
import { sucursalesData } from "../utils/constants/sucursales";
import Button from "../components/UI/Button";

const SucursalPage = () => {
  const { slug } = useParams();
  const sucursal = sucursalesData.find((s) => s.path === slug);

  if (!sucursal) {
    return (
      <div className="p-10 text-center text-gray-500 dark:text-txtdark-secondary">
        Sucursal no encontrada
      </div>
    );
  }

  const iconColorClass = "text-brand-accent mt-0.5 shrink-0";

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-txtligth-primary dark:text-txtdark-primary">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-txtdark-secondary mb-6">
          Inicio / Sucursales / {sucursal.name}
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-black text-corporate-blue dark:text-txtdark-brand-primary mb-3">
          Sucursal {sucursal.name}
        </h1>
        <p className="text-gray-500 dark:text-txtdark-secondary mb-10">
          Encuentra nuestra ubicación, horarios y ponte en contacto con
          nosotros.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-10">
          {/* Mapa */}
          <div className="md:col-span-3">
            <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md dark:shadow-none">
              <iframe
                src={sucursal.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 bg-white dark:bg-bgdark-secondary p-6 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-transparent space-y-6">
            {/* Dirección */}
            <div className="flex items-start gap-3">
              <LocationOnRoundedIcon className={iconColorClass} />
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
              <AccessTimeFilledRoundedIcon className={iconColorClass} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Horario de Atención
                </h3>
                <p className="text-gray-600 dark:text-txtdark-secondary">
                  Lunes a Jueves: 8:00 AM - 5:00 PM <br />
                  Viernes: 8:00 AM - 3:30 PM <br />
                  Sábado y Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start gap-3">
              <CallRoundedIcon className={iconColorClass} />
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
              <WhatsAppIcon className={iconColorClass} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconColorClass} font-medium hover:underline`}
                >
                  {sucursal.whatsapp}
                </a>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-3">
              <FacebookRoundedIcon className={iconColorClass} />
              <div>
                <h3 className="text-lg font-bold text-corporate-blue dark:text-txtdark-brand-primary">
                  Facebook
                </h3>
                <a
                  href={sucursal.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconColorClass} hover:underline`}
                >
                  {sucursal.facebook}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white dark:bg-bgdark-tertiary p-6 rounded-xl shadow-md dark:shadow-none border border-gray-200 dark:border-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg text-corporate-blue dark:text-txtdark-brand-primary flex-1">
            ¿Listo para comenzar tu proyecto?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Agendar visita */}
            <Button
              type="primary"
              variant="solid"
              size="md"
              fullWidth
              icon={<EventAvailableRoundedIcon />}
              iconPosition="left"
              className="sm:w-auto"
              onClick={() =>
                window.open(
                  `https://wa.me/${sucursal.whatsapp.replace(
                    /\D/g,
                    ""
                  )}?text=${encodeURIComponent(
                    `Hola, quiero agendar una visita a la sucursal ${sucursal.name}.`
                  )}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Agendar visita
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucursalPage;
