import image from "../../assets/images/ma1.webp";
import image2 from "../../assets/images/ma2.webp";
import image3 from "../../assets/images/ma3.webp";
import image4 from "../../assets/images/ma4.webp";

const StaticCardsMovies = () => {
  return (
    <>
      <h2 className="pt-3 mb-8 px-2 text-2xl font-semibold tracking-tighter text-center text-amber-500 lg:text-7xl md:text-6xl">
        The Most Anticipated Movies of 2022
      </h2>

      <p className="mx-auto text-xl text-center text-stone-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Currently, the 2022 and 2023 movie slate looks promising. One of these
        films is bound to make you consider (SAFELY) hitting the theaters.
      </p>
      <div className="pt-6 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-12 pb-12 border-b  border-stone-600 max-w-7xl  mx-auto fsac4 px-2 sm:px-3 md:px-3 lg:px-2 xl:px-0">
        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8 bg-rare rounded-lg hover:bg-slate-800 transition-colors ease-in-out">
          <img
            className="w-fit"
            width="500"
            height="300"
            src={image}
            alt="JohnWick"
          />
          <h3 className="pt-3 font-semibold text-lg text-slate-200">
            John Wick: Chapter 4 (2023)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8 bg-rare rounded-lg  hover:bg-slate-800 transition-colors ease-in-out">
          <img
            className="w-fit"
            width="500"
            height="300"
            src={image2}
            alt="JohnWick"
          />
          <h3 className="pt-3 font-semibold text-lg text-slate-200">
            Fast X (2023)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300  fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8 bg-rare rounded-lg  hover:bg-slate-800 transition-colors ease-in-out">
          <img
            className="w-fit"
            width="500"
            height="300"
            src={image3}
            alt="Mission Impossible"
          />
          <h3 className="pt-3 font-semibold text-lg text-slate-200">
            Mission: Impossible 7 (2023)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300  fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div className="p-2 sm:p-2 md:p-4 lg:p-6 xl:p-8 bg-rare rounded-lg hover:bg-slate-800 transition-colors ease-in-out">
          <img
            className="w-fit"
            width="500"
            height="300"
            src={image4}
            alt="Shazam"
          />
          <h3 className="pt-3 font-semibold text-lg text-slate-200">
            Shazam! Fury of the Gods (2022)
          </h3>
          <p className="pt-2 value-text text-md text-stone-300 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
    </>
  );
};

export default StaticCardsMovies;
