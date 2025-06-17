const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`rounded px-4 py-2 text-xl font-semibold transition ${
            currentPage === i + 1
              ? "bg-blue-600 text-black"
              : "custom-hover border border-blue-600 bg-slate-950 text-gray-200 hover:bg-slate-800"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
};

export default Pagination;
