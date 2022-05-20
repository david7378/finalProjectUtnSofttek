import ModalButtons from "./ModalButtons";

const MovieControls = ({
  setModal,
  dataMovie,
  setWatchList,
  watchList,
  isDisabled,
  type,
  watchedDisabled,
  watchedList,
  setWatchedList,
  id,
  notify,
}) => {
  //Funciones que guarda y toma datos en el localstorage.
  const handleDropMovie = () => {
    const filterWatchList = watchList.filter((el) => el.id !== id);
    localStorage.setItem("watchlist", JSON.stringify([...filterWatchList]));
    setWatchList(JSON.parse(localStorage.getItem("watchlist")));
    setModal(false);
    notify("Dropped from the list...");
  };

  const handleDropWatchedMovie = () => {
    const filterWatchedList = watchedList.filter((el) => el.id !== id);
    localStorage.setItem("watchedlist", JSON.stringify([...filterWatchedList]));
    setWatchedList(JSON.parse(localStorage.getItem("watchedlist")));
    setModal(false);
    notify("Dropped from the list...");
  };

  const handleMoveWatchList = () => {
    const filterWatchedList = watchedList.filter((el) => el.id !== id);
    localStorage.setItem("watchedlist", JSON.stringify([...filterWatchedList]));
    setWatchedList(JSON.parse(localStorage.getItem("watchedlist")));
    setWatchList([...watchList, dataMovie]);
    notify("Moved to watch list...");
    setModal(false);
  };

  const handleAddWatch = () => {
    setWatchList([...watchList, dataMovie]);
    setModal(false);
    notify("Added to Watch List...");
  };

  const handleAddWatched = () => {
    const filterWatchList = watchList.filter((el) => el.id !== id);
    localStorage.setItem("watchlist", JSON.stringify([...filterWatchList]));
    setWatchList(JSON.parse(localStorage.getItem("watchlist")));
    setWatchedList([...watchedList, dataMovie]);
    setModal(false);
    notify("Added to Watched List...");
  };

  return (
    <>
      <div className="flex items-center mt-4 justify-start space-x-3 rounded-b">

        {/* los botones del modal dependeran del tipo de pagina que se este visitando. */}
        {type == "resultlist" && (
          <>
            <ModalButtons
              textLeftButton={"Add to Watch"}
              textRightButton={"Add to Watched"}
              setModal={setModal}
              handleLeftButton={() => handleAddWatch()}
              handleRightButton={() => handleAddWatched()}
              isDisabled={isDisabled}
              watchedDisabled={watchedDisabled}
            />
          </>
        )}

        {type == "watchlist" && (
          <>
            <ModalButtons
              textLeftButton={"Add to Watched"}
              textRightButton={"Delete from list"}
              watchedDisabled={watchedDisabled}
              handleLeftButton={() => handleAddWatched()}
              handleRightButton={() => handleDropMovie()}
              setModal={setModal}
            />
          </>
        )}
        {type == "watchedlist" && (
          <>
            <ModalButtons
              textLeftButton={"Add to Watch"}
              textRightButton={"Delete from list"}
              handleLeftButton={() => handleMoveWatchList()}
              handleRightButton={() => handleDropWatchedMovie()}
              setModal={setModal}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MovieControls;
