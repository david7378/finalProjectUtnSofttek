import React, { useContext, Suspense } from "react";
import { MovieContext } from "../../Context/MovieContext";
import NoFound from "../Alerts/NoFound";
import SingleSkeletonMovie from "./SingleSkeletonMovie";

import TypeOfMovie from "./TypeOfMovie";

// Lazy Components
const MovieCard = React.lazy(() => import("./MovieCard"));
const Pagination = React.lazy(() => import("./Pagination"));

const Movies = () => {
  const { query, movieResults, searchMovies, isMovie, setModal, setIdMovie } =
    useContext(MovieContext);

  return (
    <>
      {/* Si hay 0 paginas correspondiente a la busqueda y la consulta es distinto de vacio, sale aviso no encontrado. */}
      {(searchMovies.total_pages === 0) & (query !== "") ? (
        <NoFound msg={"Sorry! We could not find any title related..."} />
      ) : (
        // Si el selector esta en Movies, muestra titulo peliculas, sino en tv shows
        <div className="container mx-auto">
          {isMovie == "movie" ? (
            <TypeOfMovie typemovie={"Top Movies"} />
          ) : (
            <TypeOfMovie typemovie={"Top Tv Shows"} />
          )}

          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-2 md:gap-0 lg:gap-0 xl:gap-12">
            <>
              {
                //Si el campo de busqueda esta vacio trae el listado de top peliculas/tvshow (default),
                //sino trae listado de peliculas/tvshow relacionado a query (campo de busqueda)
                !query
                  ? movieResults.total_results > 0 &&
                    movieResults.results.map((movies) => (
                      <Suspense
                        key={movies.id}
                        fallback={<SingleSkeletonMovie />}
                      >
                        <MovieCard
                          movies={movies}
                          setModal={setModal}
                          setIdMovie={setIdMovie}
                          type={"resultlist"}
                        />
                      </Suspense>
                    ))
                  : searchMovies.total_results > 0 &&
                    searchMovies.results.map((movie) => (
                      <Suspense
                        key={movie.id}
                        fallback={<SingleSkeletonMovie />}
                      >
                        <MovieCard
                          movies={movie}
                          setModal={setModal}
                          setIdMovie={setIdMovie}
                          type={"resultlist"}
                        />
                      </Suspense>
                    ))
              }
            </>
          </section>

          {/* Pagination  */}
          <Suspense fallback={<div>Cargando!...</div>}>
            <Pagination />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Movies;
