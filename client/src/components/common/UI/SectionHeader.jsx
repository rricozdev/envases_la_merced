export default function SectionHeader({
  title,
  description,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        centered ? "text-center items-center" : ""
      } ${className}`}
    >
      <h2 className="text-txtligth-primary dark:text-txtdark-primary tracking-light text-3xl font-bold leading-tight sm:text-4xl max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-txtligth-secondary dark:text-txtdark-secondary text-base font-normal leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
