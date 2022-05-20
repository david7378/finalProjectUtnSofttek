import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

const SearchBar = () => {
  const {
    query,
    setQuery,
    setPageNo,
    setDisable,
    setIsMovie,
    isMovie,
    setSearchMovies,
    setMovieResults,
  } = useContext(MovieContext);
  // Carga la query con el dato del buscador.
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setPageNo(1);
    setDisable(false);
  };
  // Selecciona si busca por peliculas o por series, resetea el nro de pag, y limpia ambos estados de resultados de peliculas 
  // y de busqueda. Ademas limpia la query en el buscador
  const handleOnChangeSelect = (e) => {
    setIsMovie(e.target.value);
    setPageNo(1);
    setDisable(false);
    setMovieResults([]);
    setSearchMovies([]);
    setQuery("");
  };
  return (
    <>
      <div className="bg-slate-700 flex items-center ml-3 mr-4 h-10 shadow-sm focus-within:border focus-within:border-slate-400 rounded-full">
        <div className="inset-y-0 left-0 items-center pl-3 pointer-events-none outline-none focus:outline-none ">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e)}
          placeholder={
            isMovie == "movie"
              ? "Search your movie..."
              : "Search your tv show..."
          }
          className="w-40 sm:w-fit md:w-fit lg:w-fit xl:w-80 pl-2 placeholder:text-sm text-sm outline-none focus:outline-none bg-transparent "
        />
        <div className="rounded-xl flex items-center ">
          <select
            value={isMovie}
            onChange={(e) => handleOnChangeSelect(e)}
            className="select outline-none focus:outline-none bg-transparent flex items-center  border-l-slate-500 border-y-transparent border-r-transparent "
          >
            <option
              value="movie"
              className=" bg-slate-700 text-amber-300 text-sm"
            >
              Movies
            </option>
            <option value="tv" className="bg-slate-700 text-amber-300 text-sm">
              Tv Show
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
