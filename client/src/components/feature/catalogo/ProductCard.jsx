import Button from "../../UI/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function ProductCard({ product, onQuote }) {
  return (
    <article className="group bg-bgligth-main dark:bg-bgdark-secondary border border-gray-300/50 dark:border-bgdark-secondary/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagen */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.img.src}
          alt={product.img.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1">
        {/* Título */}
        <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-1">
          {product.title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Acción */}
        <div className="mt-auto">
          <Button
            icon={<AddRoundedIcon />}
            size="sm"
            type="secondary"
            onClick={() => onQuote(product)}
            aria-label={`Cotizar ${product.title}`}
            className="w-full"
          >
            Cotizar
          </Button>
        </div>
      </div>
    </article>
  );
}
