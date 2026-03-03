import Button from "../UI/Button";

export default function CTASection({
  title,
  description,
  buttonText = "Solicitar Cotización",
  onButtonClick,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-brand-primary",
    accent: "bg-brand-accent",
  };

  return (
    <section
      aria-labelledby="cta-title"
      className={`
        ${variants[variant]}
        mx-auto
        my-12
        w-full
        max-w-6xl
        rounded-xl
        text-center
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-12
        ${className}
      `}
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="cta-title"
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          {title}
        </h2>

        <p className="text-white/80 text-base sm:text-lg mb-8">{description}</p>

        <Button
          type={variant === "primary" ? "primary" : "secondary"}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
