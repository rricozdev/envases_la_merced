import CTASection from "../components/UI/CTASection";
import ContentBox from "../components/UI/ContentBox";
import Hero from "../components/UI/Hero";
import ImageTextSection from "../components/UI/ImageTextSection";
import SectionHeader from "../components/UI/SectionHeader";
import ValueCard from "../components/feature/about/ValueCard";
import cardValues from "../utils/constants/about/cardValues";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero
          title="Nuestra Historia: Forjando el Futuro del Embalaje"
          description="Desde nuestra fundación, hemos estado comprometidos con la calidad y la innovación en cada envase que producimos."
          type="secondary"
          showButton={false}
        />
      </div>
      {/* ¿Quiénes somos? */}
      <ImageTextSection
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA3KsgqLlNuZejLdEDcPZ2mc_0KKxLbluwcQOvwvH9frMX6htuosHhy_d5KHMdXmROQ4j_cnwjq_f30_DvpRZYCkVXkIicmJM6iRjTYReXd750FDov6V4hl_QBSmQGXAzvibE_vqb6hBztJtRdNwTBYaIGyzRUIQjvQ7oR7HF0GzU1Nn8uoRhXIB31LkJHt6KVAXz9jN57LlFKYiFVZRq2UeCpvIouVXTcRHMesiSCWuoW4OO6iSp1R4F0DhfpFqp2GCeiX7wqBURA"
        imageAlt="Fotografía de instalaciones industriales"
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
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC2vRsLz2Y0ub-6IxjJMWA4isse6GmhX5dEGukBSCvdXx3j1sEY1VMCe7mWcVvV-mt8-T9BfuVLLB-7m4MhdAJmDj9lyOqSACmeMPMW0e6X9zSTukMB1p9oSMjneW0SXibbvHHD7U4yPoSnc4FCOfkct02oEdO8kmfHQf4uQBYyCwH7xtzv8ACVnp3pTwvsWrZiBfId1yuVQ7ll0eq8lbKZyBJCYOSQfhOWvPxbo1cryz4eysBkx0CQvrrK3q6rVIV7HzAefr_ViA')",
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
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpnIk5eWN31bp5VugbmkGC_dqv4jWjGSLsujLBfBYuHAYHY8UZQVoDWN8-H6cHr2hIOzbhyOjO7D2mj5ZHVjUU1GeoZ7EQXk2S8vnHsoHgN87SneTXOlntw9FOHizd727QCkOfXaFgvwK9YCKrfYRS8ycr-dSdftoJ4hiBg38TcFOmv0iRGyc6_Sj2oPsjPJkxCfzAAUR-Y0VFJJv1c4Kmp6JjixUDD3MQgki3h5X1tIwrGzEeqe36u3nC_U42u3Rcq-o5tMSaBps')",
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
          variant="primary"
          title="¿Listo para encontrar la solución perfecta?"
          description="Nuestro equipo está preparado para asesorarle y ofrecerle el envase que mejor se adapte a sus necesidades. Hablemos de su proyecto."
          buttonText="Solicitar Cotización"
        />
      </div>
    </div>
  );
}
