import CTASection from "../components/UI/CTASection";
import ContentBox from "../components/UI/ContentBox";
import Hero from "../components/UI/Hero";
import ImageTextSection from "../components/UI/ImageTextSection";
import SectionHeader from "../components/UI/SectionHeader";
import ValueCard from "../components/feature/about/ValueCard";
import { openWhatsApp } from "../feature/chat/whatsappAction";
import cardValues from "../utils/constants/about/cardValues";
import { BRANCH_PHONES } from "../utils/constants/branchPhones";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero
          srcImg={"/bg_about.jpg"}
          title="Forjando el Futuro del Embalaje"
          description="Desde nuestra fundación, hemos estado comprometidos con la calidad y la innovación en cada envase que fabricamos y distribuimos."
          type="secondary"
          showButton={false}
        />
      </div>
      {/* ¿Quiénes somos? */}
      <ImageTextSection
        imageSrc="about_quienes_somos.jpeg"
        imageAlt="Banner con productos de envases PET"
        title="¿Quiénes somos?"
        description={`Envases La Merced nació en el año 2021 como una empresa dedicada a la distribución de envases PET, con un objetivo claro: acercar productos de calidad directamente desde fábrica a nuestros clientes, de forma accesible, práctica y confiable.

        Gracias a nuestras alianzas directas con fabricantes, ofrecemos envases PET con altos estándares de calidad, precios competitivos y una atención cercana y personalizada, enfocada en brindar soluciones reales a las necesidades de cada negocio.`}
        imagePosition="left"
      />

      {/* ¿Qué hacemos? */}
      <ContentBox>
        <div className="flex flex-col gap-12">
          <SectionHeader
            title="¿Qué hacemos?"
            description="Distribuimos soluciones prácticas en envases PET para negocios de todos los tamaños."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Qué hacemos */}
            <div className="flex flex-col gap-6 p-6 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
              <h4 className="text-lg font-semibold text-txtligth-primary dark:text-txtdark-primary">
                ¿Qué hacemos?
              </h4>

              <p className="text-txtligth-secondary dark:text-txtdark-secondary leading-relaxed">
                En Envases La Merced distribuimos envases PET para distintos
                usos comerciales e industriales, brindando soluciones eficientes
                a empresas y emprendedores que buscan calidad, disponibilidad y
                un servicio confiable.
              </p>

              <ul className="space-y-3">
                {[
                  "Ahorro en costos de traslado",
                  "Reducción de tiempos de compra",
                  "Calidad constante en cada producto",
                  "Atención personalizada según sus necesidades",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-txtligth-secondary dark:text-txtdark-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Presencia */}
            <div className="flex flex-col gap-6 p-6 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
              <h4 className="text-lg font-semibold text-txtligth-primary dark:text-txtdark-primary">
                Nuestra presencia
              </h4>

              <p className="text-txtligth-secondary dark:text-txtdark-secondary leading-relaxed">
                Contamos con sucursales estratégicamente ubicadas para brindar
                un servicio ágil y cercano.
              </p>

              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Ciudad de México",
                  "Nezahualcóyotl",
                  "Puebla",
                  "Veracruz",
                  "Querétaro",
                ].map((city, index) => (
                  <li
                    key={index}
                    className="text-sm text-txtligth-secondary dark:text-txtdark-secondary"
                  >
                    • {city}
                  </li>
                ))}
              </ul>

              <p className="text-txtligth-secondary dark:text-txtdark-secondary leading-relaxed">
                Además, realizamos envíos a Guadalajara y a diversas zonas del
                país dentro del radio metropolitano de nuestras sucursales.
              </p>
            </div>
          </div>

          {/* Misión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-txtligth-primary dark:text-txtdark-primary text-2xl font-bold">
                Misión
              </h3>
              <p className="text-txtligth-secondary dark:text-txtdark-secondary leading-relaxed">
                Brindar soluciones en envases PET de calidad, acercando
                productos directamente desde fábrica a nuestros clientes
                mediante una red de sucursales estratégicamente ubicadas,
                ofreciendo precios accesibles, atención personalizada y un
                servicio eficiente que impulse el crecimiento de sus negocios.
              </p>
            </div>

            <div
              className="w-full bg-center bg-no-repeat aspect-4/3 bg-cover rounded-lg"
              style={{
                backgroundImage: "url('/fondo_home_envaces.png')",
              }}
              role="img"
              aria-label="Equipo de trabajo colaborando"
            />
          </div>

          {/* Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="w-full bg-center bg-no-repeat aspect-4/3 bg-cover rounded-lg order-last md:order-first"
              style={{
                backgroundImage: "url('/about-nostros-misión.png')",
              }}
              role="img"
              aria-label="Instalaciones modernas y sostenibles"
            />

            <div className="flex flex-col gap-4">
              <h3 className="text-txtligth-primary dark:text-txtdark-primary text-2xl font-bold">
                Visión
              </h3>
              <p className="text-txtligth-secondary dark:text-txtdark-secondary leading-relaxed">
                Ser una empresa referente en la distribución de envases PET a
                nivel nacional, reconocida por su cercanía con el cliente,
                confiabilidad, precios competitivos y capacidad de adaptación a
                las necesidades del mercado, expandiendo continuamente nuestra
                presencia para llegar a más zonas comerciales del país.
              </p>
            </div>
          </div>
        </div>
      </ContentBox>

      <div className="pb-20 sm:pb-24">
        <SectionHeader
          title="Nuestros Valores Fundamentales"
          description="Estos principios guían cada una de nuestras decisiones y acciones, asegurando que siempre actuemos con integridad y en el mejor interés de nuestros clientes."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardValues.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="pb-20 sm:pb-24">
        <CTASection
          onButtonClick={() =>
            openWhatsApp({
              phone: BRANCH_PHONES.CDMX.whatsapp,
              message: "Estoy interesado en sus productos.",
            })
          }
          variant="primary"
          title="¿Listo para encontrar la solución perfecta?"
          description="Nuestro equipo está preparado para asesorarle y ofrecerle el envase que mejor se adapte a sus necesidades. Hablemos de su proyecto."
          buttonText="Solicitar Cotización"
        />
      </div>
    </div>
  );
}
