import Button from "../../UI/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function ProductCard({ product, onQuote }) {
  return (
    <article className="bg-bgligth-main dark:bg-bgdark-secondary border border-gray-300/50 dark:border-bgdark-secondary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.alt}
        className="w-full h-47 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col grow justify-center items-center">
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4 grow">
          {product.description}
        </p>

        {/*Todo: Remplazar por la clase button ahora*/}

        <Button
          icon={<AddRoundedIcon />}
          size="sm"
          type="secondary"
          onClick={() => onQuote(product)}
          children={`Cotizar ${product.title}`}
          aria-label={`Cotizar ${product.title}`}
        >
          Cotizar
        </Button>
      </div>
    </article>
  );
}
