import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import PaginationControls from "./PaginationControls";
const Pagination = () => {
  const {
    pageNo,
    handlePagePrevious,
    handlePageNext,
    movieResults,
    searchMovies,
    disable,
  } = useContext(MovieContext);
  
  const totalPagesSearch = searchMovies.total_pages;
  const totalPagesMovies = movieResults.total_pages;

  return (
    <>
      <div className=" container h-24 mt-3 items-center">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {pageNo}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalPagesSearch || totalPagesMovies}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {searchMovies.total_results || movieResults.total_results}
            </span>{" "}
            Entries
          </span>

          <PaginationControls
            handlePagePrevious={handlePagePrevious}
            handlePageNext={handlePageNext}
            disable={disable}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
