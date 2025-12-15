import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onQuote }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuote={onQuote} />
      ))}
    </div>
  );
}
