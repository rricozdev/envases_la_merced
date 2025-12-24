import cardsInfo from "../../../utils/constants/home/cardsInfo";
import CardHome from "./CardHome";

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
            Nos dedicamos a surtir envases y tapas de plástico para el día a día
            del negocio. Desde al tianguis hasta las fabricas, apoyamos a
            comerciantes y productores con buen precio, buen trato y producto
            disponible siempre cerca de ti.
          </p>
        </header>

        {/* Tarjetas de información */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {cardsInfo.map((card) => (
            <CardHome card={card} size={card.size} color={card.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
