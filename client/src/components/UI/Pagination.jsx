export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <nav
      className="mt-16 flex justify-center"
      aria-label="Paginación de productos"
    >
      <ul className="inline-flex items-center -space-x-px rounded-md text-sm">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer inline-flex items-center px-4 h-10 font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-bgdark-secondary dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            Anterior
          </button>
        </li>
        {[...Array(totalPages)].map((_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => onPageChange(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : undefined}
              className={`inline-flex items-center px-4 h-10 font-medium cursor-pointer ${
                currentPage === i + 1
                  ? "z-10 text-white bg-txtligth-primary border border-txtligth-primary/50 dark:bg-brand-primary dark:border-bgdark-tertiary/50"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-bgdark-secondary dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              aria-label={`Página ${i + 1}`}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="cursor-pointer inline-flex items-center px-4 h-10 font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-bgdark-secondary dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página siguiente"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}
