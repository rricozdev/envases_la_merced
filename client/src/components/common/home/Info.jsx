import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const cardsInfo = [
  {
    id: 1,
    title: "Venta de envases",
    description:
      "Ofrecemos una amplia gama de envases, diseñados para satisfacer las necesidades específicas de su industria",
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    title: "Producción",
    description:
      "Fabricamos envases con los más altos estándares de calidad y materiales duraderos.",
    icon: PrecisionManufacturingIcon,
  },
  {
    id: 3,
    title: "Distribución",
    description:
      "Contamos con una red logística eficiente para entregar sus productos a tiempo y en perfecto estado.",
    icon: LocalShippingIcon,
  },
  {
    id: 4,
    title: "Asesoría técnica",
    description:
      "Nuestro equipo de expertos le brinda la mejor asesoría para su proyecto de envasado",
    icon: SupportAgentIcon,
  },
];

export default function Info() {
  return (
    <section className="py-20 sm:py-28 bg-bgligth-secondary dark:bg-bgdark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-center text-txtligth-primary dark:text-txtdark-primary sm:text-4xl">
            Qué hacemos
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-txtligth-secondary dark:text-txtdark-secondary">
            Ofrecemos un servicio integral que cubre todas sus necesidades de
            envasado, desde la concepción hasta la entrega.
          </p>
        </header>

        {/* Tarjetas de información */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsInfo.map((card) => (
            <article
              key={card.id}
              className="flex flex-col gap-5 text-center items-center bg-bgligth-main dark:bg-bgdark-main p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center size-16 bg-brand-accent/10 text-brand-accent rounded-full">
                <card.icon className="size-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-txtligth-primary dark:text-txtdark-primary text-xl font-bold">
                  {card.title}
                </h3>
                <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
