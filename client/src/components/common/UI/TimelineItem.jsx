export default function TimelineItem({ icon, year, title, isLast = false }) {
  // TODO: Corrigir los colores de los titulos y el espaciado si hay mas iconos
  return (
    <div
      className={`flex items-start gap-4 sm:gap-6 py-6 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      <div className="text-accent shrink-0 flex items-center justify-center rounded-full bg-accent/10 p-3">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col">
        <p className="text-white text-lg font-bold">{year}</p>
        <p className="text-gray-300 text-base font-medium leading-normal">
          {title}
        </p>
      </div>
    </div>
  );
}
