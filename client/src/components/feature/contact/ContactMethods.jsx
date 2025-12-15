import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function ContactMethods() {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-xl font-bold">Otras formas de contacto</h3>

      <ul className="flex flex-col gap-6">
        <li>
          <a
            className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
            href="tel:+525512345678"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-txtligth-primary dark:text-brand-accent flex items-center justify-center">
              <LocalPhoneRoundedIcon />
            </div>
            <div>
              <p className="text-base font-semibold text-txtligth-primary dark:text-txtdark-primary group-hover:text-primary">
                Llámenos
              </p>
              <p>+52 55 1234 5678</p>
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
            href="tel:+525512345678"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-txtligth-primary dark:text-brand-accent flex items-center justify-center">
              <EmailRoundedIcon />
            </div>
            <div>
              <p className="text-base font-semibold text-txtligth-primary dark:text-txtdark-primary group-hover:text-primary">
                Escríbanos
              </p>
              <p>ventas@envaseslamerced.com</p>
            </div>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-4 text-txtligth-secondary dark:text-txtdark-secondary hover:text-brand-accent-hover transition-colors"
            href="tel:+525512345678"
          >
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 text-txtligth-primary dark:text-brand-accent flex items-center justify-center">
              <LocationOnRoundedIcon />
            </div>
            <div>
              <p className="text-base font-semibold text-txtligth-primary dark:text-txtdark-primary group-hover:text-primary">
                Oficina Central
              </p>
              <p> Av. Insurgentes Sur 123, CDMX, México</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
