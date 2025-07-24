import { PaginationProps } from './types';

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center space-x-2 py-6">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${currentPage === page ? 'bg-black text-white' : 'bg-white'} rounded border border-gray-300`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'} rounded border border-gray-300`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;