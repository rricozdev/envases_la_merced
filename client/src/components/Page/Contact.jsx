import ContactForm from "../common/contact/ContactForm";
import ContactMethods from "../common/contact/ContactMethods";
import { sucursalesData } from "../../utils/sucursales";
import BranchList from "../common/contact/BranchList";
export default function Contact() {
  const sucursal = sucursalesData.find((sucursal) => (sucursal.name = "CDMX"));
  return (
    <div className="w-full h-full bg-bgligth-secondary dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-10 ">
        <header className="py-8">
          <h1 className="text-4xl font-black text-txtligth-primary dark:text-txtdark-primary">
            Póngase en contacto con nosotros
          </h1>
          <p className="mt-3 text-txtligth-secondary dark:text-txtdark-secondary">
            Complete el siguiente formulario o utilice uno de los métodos de
            contacto alternativos.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ContactForm />
          <div className="lg:col-span-2 flex flex-col gap-10">
            <ContactMethods />
            <div className="h-64 aspect-square rounded-xl overflow-hidden shadow-md dark:shadow-none">
              <iframe
                src={sucursal.mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <BranchList />
          </div>
        </div>
      </div>
    </div>
  );
}
