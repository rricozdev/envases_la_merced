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
    primary: "bg-brand-primary ",
    accent: "bg-brand-accent",
  };

  return (
    <section
      className={` ${variants[variant]} rounded-xl text-center py-12 px-6 sm:py-16 sm:px-8 ${className}`}
    >
      <h2 className="text-white text-3xl font-bold  mb-3">{title}</h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-8">{description}</p>
      <Button
        type={variant === "primary" ? "primary" : "secondary"}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </section>
  );
}
