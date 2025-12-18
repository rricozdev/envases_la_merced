export default function VolumeFilter({
  volume,
  onChange,
  min = 50,
  max = 10000,
}) {
  return (
    <div>
      <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">
        Volumen (ml)
      </h3>
      <input
        type="range"
        min={min}
        max={max}
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
        aria-label="Selector de volumen"
      />
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
        <span>{min}ml</span>
        <span className="font-medium">{volume}ml</span>
        <span>{max}ml</span>
      </div>
    </div>
  );
}
