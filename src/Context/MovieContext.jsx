import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Hooks de estados - Se puede mejorar utilizando useReducer.
  const [movieResults, setMovieResults] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [disable, setDisable] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMovie, setIsMovie] = useState("movie");
  const [modal, setModal] = useState(false);
  const [idMovie, setIdMovie] = useState(0);
  const [dataMovie, setDataMovie] = useState([]);
  const [skeleton, setSkeleton] = useState(false);
  const [type, setType] = useState("any");
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );
  const [watchedList, setWatchedList] = useState(
    JSON.parse(localStorage.getItem("watchedlist") || "[]")
  );

  // Trae las peliculas o tvshow que estan en tendencias para mostrarlas en la pagina movies.
  const getTopRatedMovies = async () => {
    try {
      const api_key = "df6013470a9cca3565417a3c746d7b22";
      const trending = `https://api.themoviedb.org/3/trending/${isMovie}/week?api_key=${api_key}&page=${pageNo}`;
      const requestTrending = await axios.get(trending);
      setMovieResults(requestTrending.data);
      setSkeleton(false);
      setSearchMovies([]);
    } catch (error) {
      alert(error.message);
    }
  };

  // Trae las peliculas o tvshow con el nombre que buscas
  const getSearchTermMovies = async () => {
    try {
      const api_key = "df6013470a9cca3565417a3c746d7b22";

      const search = `https://api.themoviedb.org/3/search/${isMovie}?api_key=${api_key}&language=en-US&page=${pageNo}&include_adult=false&query=${query}}`;
      const requestSearch = await axios.get(search);
      setSearchMovies(requestSearch.data);
      const totalPages = requestSearch.data.total_pages;
      const page = requestSearch.data.page;
      totalPages === page || totalPages === 0
        ? setDisable(true)
        : setDisable(false);
      setMovieResults([]);
    } catch (error) {
      alert(error.message);
    }
  };
  // Trae informacion del item seleccionado (pelicula o serie)
  const getDataMovie = async () => {
    try {
      const api_key = "df6013470a9cca3565417a3c746d7b22";
      const search = `https://api.themoviedb.org/3/${isMovie}/${idMovie}?api_key=${api_key}&language=en-US`;
      const requestSearch = await axios.get(search);
      setDataMovie(requestSearch.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [pageNo, isMovie, query]);

  useEffect(() => {
    idMovie > 0 ? getDataMovie() : null;
  }, [idMovie]);

  useEffect(() => {
    query.length >= 3 && getSearchTermMovies();
  }, [query, pageNo, isMovie]);

  // Almacena en el localstorage items a la lista de mirar y/o a la lista de vistas.
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
  }, [watchList]);
  useEffect(() => {
    localStorage.setItem("watchedlist", JSON.stringify(watchedList));
  }, [watchedList]);

  // Vuelve atras una pagina
  const handlePagePrevious = () => {
    pageNo > 1 && setPageNo(pageNo - 1);
    window.scrollTo(0, 0);
  };
  //Adelanta una pagina
  const handlePageNext = () => {
    setSkeleton(true);
    setPageNo(pageNo + 1);
    window.scrollTo(0, 0);
    pageNo === movieResults.total_pages - 1
      ? setDisable(true)
      : setDisable(false);
  };

  return (
    <MovieContext.Provider
      value={{
        movieResults,
        query,
        setQuery,
        searchMovies,
        pageNo,
        setPageNo,
        handlePagePrevious,
        handlePageNext,
        disable,
        setDisable,
        setIsMovie,
        isMovie,
        setSearchMovies,
        setMovieResults,
        setModal,
        modal,
        setIdMovie,
        dataMovie,
        setWatchList,
        watchList,
        type,
        setType,
        watchedList,
        setWatchedList,
        skeleton,
        setSkeleton,
        isHome,
        setIsHome,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
