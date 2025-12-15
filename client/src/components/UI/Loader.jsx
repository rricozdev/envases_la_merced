export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bgligth-main dark:bg-bgdark-main">
      {/* Círculo animado */}
      <div className="w-16 h-16 border-4 border-t-brand-accent border-brand-primary rounded-full animate-spin"></div>

      {/* Texto */}
      <p className="mt-6 text-lg text-txtligth-primary dark:text-txtdark-primary font-semibold animate-pulse">
        Cargando Envases La Merced...
      </p>
    </div>
  );
}
