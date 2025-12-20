import { useContext, useEffect, useMemo, useState } from "react";
import FilterSidebar from "../components/feature/catalogo/FilterSidebar";
import ProductGrid from "../components/feature/catalogo/ProductGrid";
import Pagination from "../components/UI/Pagination";
import SectionHeader from "../components/UI/SectionHeader";
import { CartContext } from "../Providers/CartProvider";
import { CatalogoProductos } from "../utils/constants/products/listProducts";

const ITEMS_PER_PAGE = 12;

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    categorias: [],
    colores: [],
    etiquetas: [],
    roscas: [],
    volumen: 5000,
  });

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handleFilterChange = (type, value) => {
    setCurrentPage(1);

    setFilters((prev) => {
      const current = prev[type];

      if (Array.isArray(current)) {
        return {
          ...prev,
          [type]: current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value],
        };
      }

      return { ...prev, [type]: value };
    });
  };

  const handleClearAll = () => {
    setCurrentPage(1);
    setFilters({
      categorias: [],
      colores: [],
      etiquetas: [],
      roscas: [],
      volumen: 5000,
    });
  };

  /* ================== FILTRADO REAL ================== */
  const filteredProducts = useMemo(() => {
    return CatalogoProductos.productos.filter((product) => {
      if (
        filters.categorias.length &&
        !filters.categorias.some((c) => product.categorias.includes(c))
      )
        return false;

      if (filters.colores.length && !filters.colores.includes(product.color))
        return false;

      if (
        filters.roscas.length &&
        !filters.roscas.includes(product.rosca.diametro)
      )
        return false;

      if (
        filters.etiquetas.length &&
        !filters.etiquetas.some((e) => product.etiquetas.includes(e))
      )
        return false;

      if (filters.volumen && product.volumen > filters.volumen) return false;

      return true;
    });
  }, [filters]);

  /* ================== PAGINACIÓN ================== */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <>
      <section className="bg-bgligth-tertiary dark:bg-bgdark-tertiary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Nuestro Catálogo de Productos"
            description="Encuentre el envase perfecto para sus necesidades."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />

            <div className="w-full lg:w-3/4">
              <ProductGrid products={paginatedProducts} onQuote={addToCart} />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
