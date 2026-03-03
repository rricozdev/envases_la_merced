import cardsInfo from "../../../utils/constants/home/cardsInfo";
import CardHome from "./CardHome";

export default function Info() {
  return (
    <section className="py-16 sm:py-24 bg-bgligth-secondary dark:bg-bgdark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Por qué elegirnos
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-txtligth-primary dark:text-txtdark-primary">
            Todo lo que tu negocio necesita en envases PET,{" "}
            <span className="text-brand-accent">en un solo proveedor</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary">
            Fabricación propia, distribución nacional y asesoría técnica
            especializada, para que nunca tengas que buscar en otro lado.
          </p>
        </header>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cardsInfo.map((card) => (
            <CardHome
              key={card.id}
              card={card}
              size={card.size}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
