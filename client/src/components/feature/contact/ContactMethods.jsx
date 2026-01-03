import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { BRANCH_PHONES } from "../../../utils/constants/branchPhones";
import { sucursalesData } from "../../../utils/constants/sucursales";

export default function ContactMethods({ selectedBranch = "CDMX" }) {
  const branchKey = selectedBranch.toUpperCase();

  const branchPhones = BRANCH_PHONES[branchKey] || BRANCH_PHONES.CDMX;
  const branchSucursal =
    sucursalesData.find((s) => s.name.toUpperCase() === branchKey) ||
    sucursalesData.find((s) => s.name === "CDMX");

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-xl font-bold">Otras formas de contacto</h3>

      <ul className="flex flex-col gap-6">
        {/* Teléfono */}
        <li>
          <a
            href={`tel:+${branchPhones.phones[0]}`}
            className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <LocalPhoneRoundedIcon />
            </div>
            <div>
              <p className="font-semibold">Llámenos</p>
              <p>+{branchPhones.phones[0]}</p>
            </div>
          </a>
        </li>

        {/* Email corporativo */}
        <li>
          <a
            href={`mailto:${branchPhones.email[0]}`}
            className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <EmailRoundedIcon />
            </div>
            <div>
              <p className="font-semibold">Escríbanos</p>
              <p>{branchPhones.email[0]}</p>
            </div>
          </a>
        </li>

        {/* Dirección */}
        <li>
          <div className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <LocationOnRoundedIcon />
            </div>
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
