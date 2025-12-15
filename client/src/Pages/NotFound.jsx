import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bgligth-tertiary dark:bg-bgdark-tertiary flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl bg-bgligth-main dark:bg-bgdark-secondary py-5 px-16 rounded-lg text-center">
        <h1 class="text-9xl md:text-9xl font-black leading-none tracking-tighter text-brand-accent-hover">
          404
        </h1>

        <div class="flex flex-col items-center gap-2">
          <h2 class="text-txtligth-primary   dark:text-txtdark-primary text-4xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
            Oops! Página No Encontrada.
          </h2>

          <p class="text-txtligth-primary/70 dark:text-txtdark-primary/90 text-base leading-normal max-w-md">
            Lo sentimos, la página que buscas no existe. Es posible que se haya
            movido, eliminado o que nunca haya existido.
          </p>
        </div>

        <Button type="primary">
          <Link to="/">Volver al Inicio</Link>
        </Button>

        <div class="flex flex-wrap gap-4 justify-center mt-2">
          <Link
            class=" text-txtligth-primary dark:text-white/80 hover:text-brand-accent-hover transition-colors text-sm font-medium"
            to="/catalogo"
          >
            Nuestros Productos
          </Link>

          <span
            aria-hidden="true"
            class="text-txtligth-primary dark:text-white/30"
          >
            |
          </span>

          <Link
            class=" text-txtligth-primary dark:text-white/80 hover:text-brand-accent-hover transition-colors text-sm font-medium"
            to="/contacto"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
