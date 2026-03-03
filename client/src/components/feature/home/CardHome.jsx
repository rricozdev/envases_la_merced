const SIZE_VARIANTS = {
  sm: {
    card: "md:p-6 md:gap-4",
    iconWrapper: "md:size-12",
    icon: "md:size-5",
    title: "md:text-sm",
    body: "md:text-sm",
  },
  md: {
    card: "md:p-7 md:gap-5",
    iconWrapper: "md:size-14",
    icon: "md:size-6",
    title: "md:text-base",
    body: "md:text-sm",
  },
  lg: {
    card: "md:p-9 md:gap-6",
    iconWrapper: "md:size-18",
    icon: "md:size-9",
    title: "md:text-lg",
    body: "md:text-base",
  },
};

// ==================
// Variantes de color
// ==================
const COLOR_VARIANTS = {
  primary: {
    card: "bg-bgligth-main dark:bg-bgdark-main border border-transparent hover:border-brand-accent/20",
    iconWrapper: "bg-brand-accent/10 text-brand-accent",
    title: "text-txtligth-primary dark:text-txtdark-primary",
    body: "text-txtligth-secondary dark:text-txtdark-secondary",
    detail: "text-brand-accent/70",
  },
  accent: {
    card: "bg-brand-accent text-white border border-transparent",
    iconWrapper: "bg-white/20 text-white",
    title: "text-white",
    body: "text-white/80",
    detail: "text-white/60",
  },
};

// ==================
// Componente
// ==================
export default function CardHome({ card, size = "md", color = "primary" }) {
  const sizeVariant = SIZE_VARIANTS[size];
  const colorVariant = COLOR_VARIANTS[color];

  return (
    <article
      className={`
        relative flex flex-col items-center text-center
        gap-4 p-6 rounded-2xl shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${colorVariant.card}
        ${sizeVariant.card}
      `}
    >
      {/* Ícono */}
      <div
        className={`
          flex items-center justify-center
          size-14 rounded-full shrink-0
          ${colorVariant.iconWrapper}
          ${sizeVariant.iconWrapper}
        `}
      >
        <card.icon className={`size-7 ${sizeVariant.icon}`} />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        <h3
          className={`
            font-bold text-base leading-snug
            ${colorVariant.title}
            ${sizeVariant.title}
          `}
        >
          {card.title}
        </h3>

        <p
          className={`
            text-sm leading-relaxed
            ${colorVariant.body}
            ${sizeVariant.body}
          `}
        >
          {card.description}
        </p>

        {/* Micro detalle opcional */}
        {card.detail && (
          <span
            className={`
              mt-1 text-xs font-medium
              ${colorVariant.detail}
            `}
          >
            {card.detail}
          </span>
        )}
      </div>
    </article>
  );
}
