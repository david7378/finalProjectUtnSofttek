import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const StaticCardsTrailers = () => {
  return (
    <>
      <h2 className="py-6 sm:py-6 md:py-6 lg:py-6 xl:py-12 px-2 text-2xl font-semibold tracking-tighter text-center text-amber-500 lg:text-7xl md:text-6xl">
        The Most Anticipated Trailers of 2022
      </h2>

      <div className="container mx-auto border-b border-stone-600 pb-8 pt-2 px-2 sm:px-1 md:px-1 lg:px-1 xl:px-0 grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8  bg-rare rounded-lg  hover:bg-slate-800 transition-colors ease-in-out">
         {/* Componente que nos ayuda a mejorar el rendimiento insertamos un video de youtube. */}
          <LiteYouTubeEmbed
            id="56pvThSsoSE"
            title="John Wick: Chapter 4"
            webp={true}
          />

          <h3 className="pt-3 font-semibold text-lg  text-slate-200">
            John Wick: Chapter 4 (2023)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>

        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8  bg-rare rounded-lg  hover:bg-slate-800 transition-colors ease-in-out">
          <LiteYouTubeEmbed
            id="_lZy_VOdTUA"
            title="Mission: Impossible 7"
            webp={true}
          />

          <h3 className="pt-3 font-semibold text-lg text-slate-200">
            Mission: Impossible 7 (2023)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300  fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticCardsTrailers;
