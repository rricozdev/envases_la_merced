import {
  CategoriaProducto,
  CodigoRosca,
  ColorProducto,
  EtiquetaProducto,
} from "../../../utils/constants/products/listProducts";
import Button from "../../UI/Button";
import CategoryFilter from "./filters/CategoryFilter";
import VolumeFilter from "./filters/VolumenFilter";
import { motion } from "framer-motion";

export default function FilterSidebar({ filters, onFilterChange, onClearAll }) {
  return (
    <aside className="w-full lg:w-1/4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sticky top-24 space-y-8"
      >
        <div className="sticky top-24 space-y-8">
          <header className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Filtros</h2>
            <Button size="sm" variant="outline" onClick={onClearAll}>
              Limpiar
            </Button>
          </header>

          <CategoryFilter
            title="Categorías"
            options={Object.values(CategoriaProducto)}
            selected={filters.categorias}
            onToggle={(v) => onFilterChange("categorias", v)}
          />

          <CategoryFilter
            title="Colores"
            options={Object.values(ColorProducto)}
            selected={filters.colores}
            onToggle={(v) => onFilterChange("colores", v)}
          />

          <CategoryFilter
            title="Rosca"
            options={Object.values(CodigoRosca)}
            selected={filters.roscas}
            onToggle={(v) => onFilterChange("roscas", v)}
          />

          <CategoryFilter
            title="Etiquetas"
            options={Object.values(EtiquetaProducto)}
            selected={filters.etiquetas}
            onToggle={(v) => onFilterChange("etiquetas", v)}
          />

          <VolumeFilter
            volume={filters.volumen}
            onChange={(v) => onFilterChange("volumen", v)}
          />
        </div>
      </motion.div>
    </aside>
  );
}
