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
    search: "",
  });

  /* ================== SCROLL ================== */
  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [currentPage]);

  /* ================== RESET PAGINA AL FILTRAR ================== */
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (type, value) => {
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
    setFilters({
      categorias: [],
      colores: [],
      etiquetas: [],
      roscas: [],
      search: "",
    });
  };

  /* ================== FILTRADO ================== */
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

      if (filters.search) {
        const search = filters.search.toLowerCase().trim();
        if (
          !`${product.nombre.toLowerCase()} ${product.volumen}`.includes(search)
        )
          return false;
      }

      return true;
    });
  }, [filters]);

  /* ================== PAGINACIÓN SEGURA ================== */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    if (filteredProducts.length === 0) return [];

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

              {filteredProducts.length > 0 && totalPages > 1 && (
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
