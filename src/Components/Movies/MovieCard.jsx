import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

const MovieCard = ({ movies, setModal, setIdMovie, type }) => {
  const { setType } = useContext(MovieContext);
  const { poster_path, title, vote_average, id, name } = movies;
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  // Abrimos modal al hacer click en alguna card de peliculas o series, para luego traer info de tal item.
  const handleOnClick = () => {
    setModal(true);
    setIdMovie(id);
    setType(type);
  };

  return (
    <>
      <div
        onClick={() => handleOnClick()}
        className="w-10/12 sm:w-[22rem] md:w-[22rem] lg:w-[22rem] xl:w-[24rem] mx-auto max-w-auto sm:max-w-md md:max-w-md sm:ml-6 md:ml-6 lg:ml-6
          lg:max-w-xs xl:max-w-xs bg-stone-700 hover:bg-pink-900 hover:bg-opacity-70 rounded-xl transition-all ease-in-out p-0 m-4 text-amber-500 shadow-xl
          flex flex-col cursor-pointer text-lg hover:scale-100 sm:hover:scale-100 md:hover:scale-100 lg:hover:scale-105 xl:hover:scale-x-105"
      >
        {poster_path ? (
          <img
            className="w-full self-center rounded-xl h-[450px] sm:h-[450px] md:h-[450px] lg:h-[476px]  "
            src={`${imageUrl}${poster_path}`}
            alt={title}
          />
        ) : (
          <div className="w-full bg-zinc-900 self-center rounded-lg h-[450px] sm:h-[450px] md:h-[450px] lg:h-[476px] " />
        )}

        <div className="flex flex-col mb-1justify-between items-center text-center ">
          <h1 className="my-1 font-medium ">{title || name}</h1>
          <p className="my-1 font-normal">⭐{vote_average}/10</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
