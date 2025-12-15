import CTASection from "../components/UI/CTASection";
import ContentBox from "../components/UI/ContentBox";
import Hero from "../components/UI/Hero";
import ImageTextSection from "../components/UI/ImageTextSection";
import SectionHeader from "../components/UI/SectionHeader";
import TimelineItem from "../components/feature/about/TimelineItem";
import ValueCard from "../components/feature/about/ValueCard";
import cardValues from "../utils/constants/about/cardValues";
import milestones from "../utils/constants/about/milestones";

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

      {/* Nuestros Inicios */}
      <ImageTextSection
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA3KsgqLlNuZejLdEDcPZ2mc_0KKxLbluwcQOvwvH9frMX6htuosHhy_d5KHMdXmROQ4j_cnwjq_f30_DvpRZYCkVXkIicmJM6iRjTYReXd750FDov6V4hl_QBSmQGXAzvibE_vqb6hBztJtRdNwTBYaIGyzRUIQjvQ7oR7HF0GzU1Nn8uoRhXIB31LkJHt6KVAXz9jN57LlFKYiFVZRq2UeCpvIouVXTcRHMesiSCWuoW4OO6iSp1R4F0DhfpFqp2GCeiX7wqBURA"
        imageAlt="Vintage black and white photo of the original company factory"
        title="Nuestros Inicios"
        description="Fundada con una visión clara de revolucionar la industria del embalaje, Envases La Merced comenzó como una pequeña operación familiar. Nuestra dedicación a la artesanía, la atención al detalle y un inquebrantable compromiso con nuestros clientes sentaron las bases de lo que somos hoy: un líder confiable en soluciones de embalaje."
        imagePosition="left"
      />

      {/* Misión y Visión */}
      <ContentBox>
        <div className="flex flex-col gap-12">
          <SectionHeader
            title="Comprometidos con la Excelencia"
            description="Nuestra trayectoria se basa en una sólida fundación de misión y visión, guiando cada paso que damos hacia el futuro de la industria del embalaje."
          />

          {/* Misión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-txtligth-primary dark:text-txtdark-primary text-2xl font-bold leading-normal">
                Nuestra Misión
              </h3>
              <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base font-normal leading-relaxed">
                Proveer soluciones de embalaje innovadoras y de alta calidad que
                superen las expectativas de nuestros clientes, contribuyendo a
                su éxito y protegiendo sus productos.
              </p>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-4/3 bg-cover rounded-lg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC2vRsLz2Y0ub-6IxjJMWA4isse6GmhX5dEGukBSCvdXx3j1sEY1VMCe7mWcVvV-mt8-T9BfuVLLB-7m4MhdAJmDj9lyOqSACmeMPMW0e6X9zSTukMB1p9oSMjneW0SXibbvHHD7U4yPoSnc4FCOfkct02oEdO8kmfHQf4uQBYyCwH7xtzv8ACVnp3pTwvsWrZiBfId1yuVQ7ll0eq8lbKZyBJCYOSQfhOWvPxbo1cryz4eysBkx0CQvrrK3q6rVIV7HzAefr_ViA')",
              }}
              role="img"
              aria-label="Team of engineers collaborating over a blueprint"
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
              aria-label="A modern, sustainable factory exterior with solar panels"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-txtligth-primary dark:text-txtdark-primary text-2xl font-bold leading-normal">
                Nuestra Visión
              </h3>
              <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base font-normal leading-relaxed">
                Ser líderes reconocidos en el mercado nacional e internacional,
                destacando por nuestra tecnología de punta, prácticas
                sostenibles y un compromiso inquebrantable con el cliente.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-txtligth-primary dark:text-txtdark-primary text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">
                Hitos Clave en Nuestra Trayectoria
              </h2>
              <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base font-normal leading-relaxed mt-2">
                Cada hito marca un capítulo en nuestra historia de crecimiento,
                innovación y compromiso con la excelencia.
              </p>
            </div>
            <div className="flex flex-col">
              {milestones.map((milestone, index) => (
                <TimelineItem
                  key={index}
                  icon={milestone.icon}
                  year={milestone.year}
                  title={milestone.title}
                  isLast={index === milestones.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
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
