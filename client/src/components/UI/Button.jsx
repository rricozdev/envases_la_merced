export default function Button({
  className = "",
  type = "primary",
  variant = "solid",
  size = "md",
  shape = "rounded",
  fullWidth = false,
  iconOnly = false,
  onClick,
  children,
  disabled = false,
  icon,
  iconPosition = "left",
  HtmlType = "button",
}) {
  const colors = {
    primary: {
      solid: "bg-brand-accent hover:bg-brand-accent-hover text-white",
      outline:
        "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
      ghost:
        "text-brand-accent hover:bg-brand-accent/10 dark:hover:bg-white-300/10 dark:hover:text-white/90",
    },
    secondary: {
      solid: "bg-brand-primary hover:opacity-90 text-white",
      outline:
        "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:text-white dark:border-white/80 dark:hover:border-brand-primary",
      ghost:
        "text-brand-primary hover:bg-brand-primary/10 dark:text-white dark:hover:bg-white/10 dark:hover:text-white/90",
    },
  };

  const sizes = {
    sm: iconOnly ? "h-10 w-10 text-sm" : "h-10 px-4 text-sm",
    md: iconOnly ? "h-14 w-14 text-lg" : "h-14 px-8 text-lg",
    lg: iconOnly ? "h-16 w-16 text-xl" : "h-16 px-10 text-xl",
  };

  const shapes = {
    rounded: "rounded-lg",
    square: "rounded-none",
    circle: "rounded-full",
  };

  const baseStyles =
    "flex items-center justify-center gap-2 cursor-pointer overflow-hidden font-bold transition-all active:scale-95";

  // Lógica de ancho
  let widthClass = "";
  if (fullWidth) {
    widthClass = "w-full";
  } else if (iconOnly) {
    widthClass = ""; // El ancho ya está definido en sizes
  } else {
    widthClass = "min-w-[84px] max-w-[480px] mx-auto";
  }

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      type={HtmlType}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${colors[type][variant]}
        ${sizes[size]}
        ${shapes[shape]}
        ${widthClass}
        ${disabledStyles}
        ${className}
      `}
      aria-label={
        iconOnly
          ? typeof children === "string"
            ? children
            : "Button"
          : undefined
      }
    >
      {iconOnly ? (
        icon || children
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span className="truncate">{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
}
