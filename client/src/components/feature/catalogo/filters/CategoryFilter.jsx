import Checkbox from "../../../UI/form/Checkbox";

export default function CategoryFilter({
  categories,
  selectedCategories,
  onToggle,
}) {
  return (
    <div>
      <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">
        Categorías
      </h3>
      <div className="space-y-3" role="group" aria-label="Filtro de categorías">
        {categories.map((category) => (
          <Checkbox
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => onToggle(category)}
          />
        ))}
      </div>
    </div>
  );
}
