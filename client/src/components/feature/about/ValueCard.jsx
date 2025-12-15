export default function ValueCard({
  icon: Icon,
  title,
  description,
  hover = true,
}) {
  return (
    <article
      className={`flex flex-col gap-5 items-center text-center rounded-xl bg-background-dark/50 border border-white/10 bg-bgligth-main dark:bg-bgdark-main p-8 shadow-lg transition-transform ${
        hover
          ? "hover:-translate-y-1 hover:border-brand-accent dark:hover:bg-bgdark-main/30 hover:bg-bgligth-main/30"
          : ""
      }`}
    >
      <div className="flex items-center justify-center size-16 bg-brand-accent/10 text-brand-accent rounded-full">
        {<Icon />}
      </div>
      <h3 className="text-txtligth-primary dark:text-txtdark-primary text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base  leading-relaxed">
        {description}
      </p>
    </article>
  );
}
