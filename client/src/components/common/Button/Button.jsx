export default function Button({ type, onClick, children }) {
  const colors = {
    primary: "bg-brand-accent hover:bg-brand-accent-hover",
    secondary: "bg-brand-primary hover:opacity-90",
  };

  return (
    <button
      className={`${colors[type]} mt-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8  text-white text-lg font-bold  transition-all  active:scale-95 mx-auto`}
    >
      <span className="truncate"> {children}</span>
    </button>
  );
}
