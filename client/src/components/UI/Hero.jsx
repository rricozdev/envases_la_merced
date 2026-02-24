import Button from "./Button";

export default function Hero({
  srcImg,
  title,
  description,
  type = "primary",
  showButton = true,
  buttonText = "Solicitar Cotización",
  onButtonClick,
  alt = "imagen de fondo del hero",
}) {
  const heroTypes = {
    primary: "min-h-[calc(100vh-5rem)]",
    secondary: "min-h-[330px] py-12",
    compact: "min-h-[200px] py-8",
  };

  return (
    <section className={`relative overflow-hidden ${heroTypes[type]}`}>
      {/* Imagen de fondo */}
      <picture>
        <source srcSet={srcImg.mobile} media="(max-width: 768px)" />
        <source srcSet={srcImg.desktop} media="(min-width: 769px)" />
        <img
          src={srcImg}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-b 
          from-[rgba(30,58,95,0.5)] 
          to-[rgba(30,58,95,0.7)] 
          dark:from-[rgba(0,0,0,0.4)] 
          dark:to-[rgba(0,0,0,0.7)]
          ${type === "secondary" ? "rounded-2xl" : ""}
        `}
      />

      {/* Contenido */}
      <div
        className={`relative flex items-center justify-center px-4 ${heroTypes[type]}`}
      >
        <div
          className={`text-center flex items-center flex-col justify-center h-full px-4 ${
            type === "primary" ? "max-w-4xl" : "max-w-2xl"
          }`}
        >
          <h1
            className={`text-white font-black leading-tight tracking-tight 
              ${
                type === "primary"
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-6 mx-auto text-gray-200 
                ${
                  type === "primary"
                    ? "max-w-2xl text-lg sm:text-xl"
                    : "max-w-xl text-base sm:text-lg"
                }`}
            >
              {description}
            </p>
          )}

          {showButton && (
            <Button
              className="mt-8"
              type="primary"
              variant="solid"
              size="lg"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
