export default function TimelineItem({
  icon: Icon,
  year,
  title,
  isLast = false,
}) {
  return (
    <div
      className={`flex items-start gap-4 sm:gap-6 py-6 ${
        !isLast
          ? "border-b  border-txtligth-primary/30 dark:border-white/10"
          : ""
      }`}
    >
      <div className="text-accent shrink-0 flex items-center justify-center rounded-full bg-brand-accent/10 p-3">
        <Icon />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-txtligth-primary dark:text-txtdark-primary text-lg font-bold">
          {year}
        </p>
        <p className="text-txtligth-secondary dark:text-gray-300  text-base font-medium leading-normal">
          {title}
        </p>
      </div>
    </div>
  );
}
