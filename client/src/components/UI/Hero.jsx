import Button from "./Button";

export default function Hero({
  srcImg,
  title,
  description,
  type = "primary",
  showButton = true,
  buttonText = "Solicitar Cotización",
  onButtonClick,
}) {
  const heroTypes = {
    primary: "min-h-[calc(100vh-5rem)]",
    secondary: "min-h-[450px] py-12",
    compact: "min-h-[200px] py-8",
  };

  return (
    <section className="relative">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${srcImg}')` }}
      />

      {/* Overlay de gradiente */}
      <div
        className={`absolute inset-0 bg-linear-to-b from-[rgba(30,58,95,0.5)] to-[rgba(30,58,95,0.7)] dark:from-[rgba(0,0,0,0.4)] dark:to-[rgba(0,0,0,0.7)] ${
          type === "secondary" ? "my-5 rounded-2xl" : ""
        }`}
      />

      {/* Contenido */}
      <div
        className={`relative z-10 ${heroTypes[type]} flex flex-col items-center justify-center p-4`}
      >
        <div
          className={`text-center px-4 ${
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
