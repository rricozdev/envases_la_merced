export default function ContentBox({ children, className = "" }) {
  return (
    <div className="pb-20 sm:pb-28">
      <div
        className={`bg-bgligth-secondary dark:bg-bgdark-secondary rounded-xl px-4 sm:px-10 py-10 sm:py-16 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
