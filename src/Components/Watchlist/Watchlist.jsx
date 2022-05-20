import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieCard from "../Movies/MovieCard";
import NoFound from "../Alerts/NoFound";
const Watchlist = () => {
  const { setModal, setIdMovie, watchList } = useContext(MovieContext);

  return (
    <>
      <div className="container mx-auto">
        {watchList.length > 0 ? (
          <h2 className="font-extrabold text-transparent my-6 text-2xl lg:text-6xl md:text-6xl uppercase text-center drop-shadow-lg bg-clip-text bg-gradient-to-r from-amber-300 to-amber-800">
            Watch List
          </h2>
        ) : (
          <NoFound
            msg={"The Watch List is empty, please add your favorite movie."}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-6 md:gap-0 lg:gap-0 xl:gap-4 pb-5">
          {watchList?.length > 0 &&
            watchList?.map((movies, index) => (
              <MovieCard
                key={index}
                movies={movies}
                setModal={setModal}
                setIdMovie={setIdMovie}
                type={"watchlist"}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Watchlist;
