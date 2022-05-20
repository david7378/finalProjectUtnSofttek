import React, { Suspense } from "react";

import VideoBackground from "./VideoBackground";

// Lazy Components
const StaticCards = React.lazy(() => import("./StaticCardsMovies"));
const StaticCardsTrailers = React.lazy(() => import("./StaticCardsTrailers"));
const Subscribe = React.lazy(() => import("./Subscribe"));

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font w-auto px-0 sm:w-w-auto md:w-auto lg:w-auto ">
        {/* Video de fondo */}
        <VideoBackground />

        {/* Lists of Cards */}
        <Suspense fallback={<div>Cargando..</div>}>
          <StaticCards />
        </Suspense>

        {/* List of Trailers */}
        <Suspense fallback={<div>Cargando..</div>}>
          <StaticCardsTrailers />
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<div>Cargando..</div>}>
          <Subscribe />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
