// ==================
// Variantes
// ==================

const SIZE_VARIANTS = {
  sm: {
    card: "md:p-6 md:gap-4 md:text-sm",
    iconWrapper: "md:size-14",
    icon: "md:size-6",
  },
  md: {
    card: "md:p-8 md:gap-5 md:text-base",
    iconWrapper: "md:size-16",
    icon: "md:size-8",
  },
  lg: {
    card: "md:p-10 md:gap-6 md:text-lg",
    iconWrapper: "md:size-20", // +20–25px vs sm
    icon: "md:size-10",
  },
};

const COLOR_VARIANTS = {
  primary: {
    card: "bg-bgligth-main dark:bg-bgdark-main",
    icon: "bg-brand-accent/10 text-brand-accent",
  },
  accent: {
    card: "bg-brand-accent/30 dark:bg-brand-accent/20",
    icon: "bg-bgligth-main/60 dark:bg-bgdark-main/30 text-brand-accent",
  },
};

// ==================
// Componente
// ==================

// Precio
// El mejor precio garantizado, compruebalo por ti mismo
// Este en medio  de los 5 mas grande o en otro color

export default function CardHome({ card, size = "md", color = "primary" }) {
  const sizeVariant = SIZE_VARIANTS[size];

  return (
    <article
      className={`
        flex flex-col
        items-center text-center
        gap-5 p-6
        rounded-xl shadow-lg
        transition-transform duration-300
        hover:-translate-y-1
        ${COLOR_VARIANTS[color].card}
        ${sizeVariant.card}
      `}
    >
      <div
        className={`
          flex items-center justify-center
          size-14
          rounded-full
          
          ${sizeVariant.iconWrapper}
          ${COLOR_VARIANTS[color].icon}
        `}
      >
        <card.icon
          className={`
            size-8
            ${sizeVariant.icon}
          `}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-txtligth-primary dark:text-txtdark-primary">
          {card.title}
        </h3>

        <p className="leading-relaxed text-txtligth-secondary dark:text-txtdark-secondary text-center">
          {card.description}
        </p>
      </div>
    </article>
  );
}
