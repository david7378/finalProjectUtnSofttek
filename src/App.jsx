import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext, Suspense } from "react";
import { MovieContext } from "./Context/MovieContext";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import NoFound from "./Components/Alerts/NoFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy Components
const Movies = React.lazy(() => import("./Components/Movies/Movies"));
const FormContact = React.lazy(() => import("./Components/Form/FormContact"));
const Watchlist = React.lazy(() => import("./Components/Watchlist/Watchlist"));
const Modal = React.lazy(() => import("./Components/Modals/Modal"));
const WatchedList = React.lazy(() =>
  import("./Components/WatchedList/WatchedList")
);
const Footer = React.lazy(() => import("./Components/Home/Footer"));

function App() {
  //Funcion que recibe un mensaje como argumento para mostrarlo en toastify
  const notify = (msg) => toast(msg);
  //Estados del contexto
  const {
    modal,
    dataMovie,
    watchList,
    watchedList,
    select,
    isHome,
    setIsHome,
  } = useContext(MovieContext);

  // Busca en la watchList si esta la pelicula que seleccionamos. Si esta devuelve true a storedWatchMovie
  let storedWatchMovie = watchList.find((o) => o.id === dataMovie.id);
  // Busca en la watchedList si esta la pelicula que seleccionamos. Si esta devuelve true a storedWatchedMovie
  let storedWatchedMovie = watchedList.find((o) => o.id === dataMovie.id);
  // Evaluamos si hay items en watchList y watchedList del localstorage para definir si los botones del modal seran deshabilitados o no.
  const isDisabled = storedWatchMovie
    ? true
    : storedWatchedMovie
    ? true
    : false;
  const watchedDisabled = storedWatchedMovie ? true : false;

  return (
    <>
      {/* Muestra modal si corresponde. */}
      {modal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            isDisabled={isDisabled}
            watchedDisabled={watchedDisabled}
            watchedList={watchedList}
            notify={notify}
          />
        </Suspense>
      )}
      {/* //Muestra mensaje segun corresponda. */}
      <ToastContainer
        position="top-right"
        autoClose={2900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* //Aqui comienza el sector de routeo. */}
      <BrowserRouter>
        <Navbar
          setIsHome={setIsHome}
          isHome={isHome}
          watchList={watchList}
          watchedList={watchedList}
        />

        <Routes>
          <Route path="/" element={<Home select={select} />} />

          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="form"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <FormContact notify={notify} />
              </Suspense>
            }
          />
          <Route
            path="watchlist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Watchlist />
              </Suspense>
            }
          />
          <Route
            path="watchedlist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <WatchedList />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={<NoFound msg={"Sorry! There's nothing here!"} />}
          />
        </Routes>

        <Suspense fallback={<div>Loading...</div>}>
          <Footer setIsHome={setIsHome} />
        </Suspense>
      </BrowserRouter>
      {/* Aqui termina el sector de routeo. */}
    </>
  );
}

export default App;
