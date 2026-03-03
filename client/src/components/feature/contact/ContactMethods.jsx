import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import { BRANCH_PHONES } from "../../../utils/constants/branchPhones";
import { sucursalesData } from "../../../utils/constants/sucursales";

function ContactIcon({ children }) {
  return (
    <div className="w-12 h-12 shrink-0 rounded-full bg-brand-accent/20 flex items-center justify-center">
      {children}
    </div>
  );
}

export default function ContactMethods({ selectedBranch = "CDMX" }) {
  const branchKey = selectedBranch.toUpperCase();

  const branchPhones = BRANCH_PHONES[branchKey] || BRANCH_PHONES.CDMX;

  const branchSucursal =
    sucursalesData.find((s) => s.name.toUpperCase() === branchKey) ||
    sucursalesData.find((s) => s.name === "CDMX");

  return (
    <section
      aria-labelledby="contact-methods-title"
      className="flex flex-col gap-6"
    >
      <h3 id="contact-methods-title" className="text-xl font-bold">
        Otras formas de contacto
      </h3>

      <ul className="flex flex-col gap-6">
        {/* Teléfono */}
        <li>
          <a
            href={`tel:+${branchPhones.phones[0]}`}
            className="flex items-start gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
          >
            <ContactIcon>
              <LocalPhoneRoundedIcon className="text-2xl" />
            </ContactIcon>

            <div>
              <p className="font-semibold">Llámenos</p>
              <p>+{branchPhones.phones[0]}</p>
            </div>
          </a>
        </li>

        {/* Email */}
        <li>
          <a
            href={`mailto:${branchPhones.email[0]}`}
            className="flex items-start gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
          >
            <ContactIcon>
              <EmailRoundedIcon className="text-2xl" />
            </ContactIcon>

            <div>
              <p className="font-semibold">Escríbanos</p>
              <p>{branchPhones.email[0]}</p>
            </div>
          </a>
        </li>

        {/* Dirección */}
        <li>
          <div className="flex items-start gap-4 text-txtligth-secondary dark:text-txtdark-secondary">
            <ContactIcon>
              <LocationOnRoundedIcon className="text-2xl" />
            </ContactIcon>

            <div>
              <p className="font-semibold">Sucursal</p>
              <p>{branchSucursal.address}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
