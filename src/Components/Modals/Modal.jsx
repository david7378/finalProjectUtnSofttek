import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieControls from "./MovieControls";

const Modal = ({ isDisabled, watchedDisabled, notify }) => {
  const {
    setModal,
    dataMovie,
    setWatchList,
    watchList,
    type,
    watchedList,
    setWatchedList,
  } = useContext(MovieContext);

  const {
    backdrop_path,
    title,
    name,
    overview,
    genres,
    release_date,
    vote_average,
    id,
  } = dataMovie;
  // URL donde toma las imagenes la api de movies.
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed z-50 w-full md:inset-0 md:h-screen overflow-y-scroll xl:overflow-y-hidden h-screen flex justify-center items-center bg-stone-900 bg-opacity-90 "
      >
        <div className="relative  p-2 py-4 sm:p-4 md:p-4 lg:p-4 xl:p-0 h-screen w-full max-w-2xl overflow-y-auto md:h-auto opacity-100">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start px-2 sm:px-4 md:px-4 lg:px-4 xl:px-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 text-stone-300 font-semibold uppercase">
                {title}
                {name}
              </h3>

              <button
                type="button"
                className="text-gray-400 bg-transparent align-middle  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mt-0.5 sm:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => {
                  setModal(false);
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 md:p-6 lg:p-6 xl:p-6 space-y-2 smspace-y-3: md:space-y-3 lg:space-y-3 xl:space-y-3 ">
              <img
                src={`${imageUrl}${backdrop_path}`}
                className="h-full w-full mx-auto flex justify-center shadow-2xl  "
                alt={title}
              />

              <h3 className="text-stone-300  font-semibold">
                Release date:{" "}
                <span className="text-stone-400 text-base">{release_date}</span>{" "}
              </h3>

              <ul className="flex gap-1 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1 text-stone-300 font-semibold">
                Genre:
                {genres?.map((genre) => (
                  <li
                    className="text-stone-400 mt-[0.35rem] sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 text-xs sm:text-xs md:text-base lg:text-base xl:text-base"
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
              <h3 className="text-stone-300 font-semibold">Description:</h3>
              <p className=" leading-relaxed text-stone-400  text-sm sm:text-xs md:text-base lg:text-base xl:text-base">
                {overview}
              </p>
              <p className="my-1 text-stone-300 font-semibold">
                Validation:{" "}
                <span className="text-amber-500">⭐{vote_average}/10 </span>{" "}
              </p>
              <div className="border-t mt-1 border-gray-200 dark:border-gray-600">
                <MovieControls
                  setModal={setModal}
                  dataMovie={dataMovie}
                  watchList={watchList}
                  isDisabled={isDisabled}
                  type={type}
                  watchedDisabled={watchedDisabled}
                  id={id}
                  setWatchList={setWatchList}
                  watchedList={watchedList}
                  setWatchedList={setWatchedList}
                  notify={notify}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
