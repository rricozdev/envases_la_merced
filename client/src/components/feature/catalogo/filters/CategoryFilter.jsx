import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "../../../UI/form/Checkbox";

export default function CategoryFilter({ title, options, selected, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-white/10 pb-4">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left cursor-pointer"
      >
        <h3 className="font-semibold text-text-light dark:text-text-dark">
          {title}
        </h3>

        {open ? (
          <KeyboardArrowUpIcon className="text-gray-500" />
        ) : (
          <KeyboardArrowDownIcon className="text-gray-500" />
        )}
      </button>

      {/* Content */}
      <div
        className={`
          mt-4 space-y-3 overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {options.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
          />
        ))}
      </div>
    </div>
  );
}
