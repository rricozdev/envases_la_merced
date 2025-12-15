export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  description,
  imagePosition = "left", // "left" o "right"
  className = "",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`py-20 sm:py-28 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          className={`w-full aspect-4/3 rounded-xl bg-cover bg-center ${
            isImageLeft ? "order-last lg:order-first" : ""
          }`}
          style={{ backgroundImage: `url('${imageSrc}')` }}
          role="img"
          aria-label={imageAlt}
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-txtligth-primary dark:text-txtdark-primary tracking-light text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
