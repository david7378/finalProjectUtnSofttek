import React from "react";

const TypeOfMovie = ({ typemovie }) => {
  return (
    <>
      <h2 className="font-extrabold text-transparent my-6 text-4xl lg:text-6xl md:text-6xl uppercase text-center drop-shadow-lg bg-clip-text bg-gradient-to-r from-amber-300 to-amber-800">
        {typemovie}
      </h2>
    </>
  );
};

export default TypeOfMovie;
