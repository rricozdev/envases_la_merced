import CategoryFilter from "./UI/CategoryFilter";
import IndustryFilter from "./UI/IndustryFilter";
import MaterialFilter from "./UI/MaterialFilter";
import VolumenFilter from "./UI/VolumenFilter";
import Button from "../UI/Button";

// Componente de Sidebar con todos los filtros
export default function FilterSidebar({ filters, onFilterChange, onClearAll }) {
  return (
    <aside
      className="w-full lg:w-1/4"
      role="complementary"
      aria-label="Filtros de productos"
    >
      <div className="sticky top-28 space-y-8">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary dark:text-white">
            Filtros
          </h2>
          <Button
            type="secondary"
            size="sm"
            variant="outline"
            onClick={onClearAll}
            className="dark:text-txtdark-primary"
            aria-label="Limpiar todos los filtros"
          >
            Limpiar todo
          </Button>
        </header>

        <div className="space-y-6">
          <CategoryFilter
            categories={[
              "Envases de Plástico",
              "Botellas de Vidrio",
              "Latas de Metal",
              "Tapas y Accesorios",
              "Envases Flexibles",
            ]}
            selectedCategories={filters.categories}
            onToggle={(cat) => onFilterChange("categories", cat)}
          />

          <MaterialFilter
            materials={["PET", "HDPE", "Vidrio", "Aluminio"]}
            selectedMaterials={filters.materials}
            onToggle={(mat) => onFilterChange("materials", mat)}
          />

          <VolumenFilter
            volume={filters.volume}
            onChange={(vol) => onFilterChange("volume", vol)}
          />

          <IndustryFilter
            industry={filters.industry}
            onChange={(ind) => onFilterChange("industry", ind)}
          />
        </div>
      </div>
    </aside>
  );
}
