import Button from "./Button";

export default function Hero({
  srcImg,
  title,
  description,
  type = "primary",
  showButton = true,
  buttonText = "Solicitar Cotización",
  buttonTextSecond = "Ver Productos",
  onButtonClickSecond,
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
          from-[rgba(23,44,72,0.6)] 
          to-[rgba(26,46,74,0.7)] 
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
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-2xl sm:text-3xl lg:text-4xl"
              }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-6 mx-auto text-gray-100
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
            <div className="flex gap-2 row-auto flex-nowrap">
              <Button
                className="mt-8"
                type="primary"
                variant="solid"
                size="lg"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
              <Button
                className="mt-8 text-white border-white hover:border-brand-primary hover:bg-brand-primary "
                type="secondary"
                variant="outline"
                size="lg"
                onClick={onButtonClickSecond}
              >
                {buttonTextSecond}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
