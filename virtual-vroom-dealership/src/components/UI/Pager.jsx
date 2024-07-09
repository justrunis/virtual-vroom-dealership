import { Button } from "@material-tailwind/react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const maxButtons = 5; // Number of buttons to display, including first and last

function PageButton({ children, className, ...props }) {
  return (
    <Button
      className={`btn flex justify-center items-center text-accent-content ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default function Pager({ totalPages, currentPage, setCurrentPage }) {
  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    className: "btn btn-primary bg-accent-400 px-2 min-h-0 h-[2rem]",
    onClick: () => setCurrentPage(index),
  });

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPagerButtons = () => {
    const maxVisibleButtons = maxButtons - 2; // Subtract 2 for first and last buttons
    let startPage, endPage;

    if (totalPages <= maxButtons) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const middle = Math.floor(maxVisibleButtons / 2);

      if (currentPage <= middle) {
        startPage = 1;
        endPage = maxVisibleButtons;
      } else if (currentPage + middle >= totalPages) {
        startPage = totalPages - maxVisibleButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - middle;
        endPage = currentPage + middle;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <div className="flex items-center gap-4">
      <button
        variant="text"
        className="btn btn-primary text-secondary-content px-2 min-h-0 h-[3rem] hover:bg-secondary"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <FaArrowAltCircleLeft className="h-4 w-4" /> Previous
      </button>
      <div className="flex items-center gap-2">
        {currentPage > Math.floor(maxButtons / 2) && (
          <>
            <PageButton {...getItemProps(1)}>1</PageButton>
            {currentPage > Math.floor(maxButtons / 2) + 1 && (
              <span className="text-base-content">...</span>
            )}
          </>
        )}
        {getPagerButtons().map((page) => (
          <PageButton
            key={page}
            {...getItemProps(page)}
            className={
              currentPage !== page
                ? "bg-primary hover:bg-secondary text-secondary-content"
                : "bg-accent hover:bg-secondary text-secondary-content"
            }
          >
            {page}
          </PageButton>
        ))}
        {currentPage < totalPages - Math.floor(maxButtons / 2) + 1 && (
          <>
            {currentPage < totalPages - Math.floor(maxButtons / 2) && (
              <span className="text-base-content">...</span>
            )}
            <PageButton {...getItemProps(totalPages)}>{totalPages}</PageButton>
          </>
        )}
      </div>
      <button
        variant="text"
        className="btn btn-primary text-secondary-content px-2 min-h-0 h-[3rem] hover:bg-secondary"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <FaArrowAltCircleRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}
