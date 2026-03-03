export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  description,
  imagePosition = "left",
  className = "",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`py-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div
            className={`${isImageLeft ? "lg:order-first" : "lg:order-last"}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className="w-full aspect-4/3 object-cover rounded-xl"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-4">
            <h2 className="text-txtligth-primary dark:text-txtdark-primary tracking-light text-3xl sm:text-4xl font-bold leading-tight">
              {title}
            </h2>

            <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
