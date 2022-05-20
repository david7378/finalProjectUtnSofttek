import React, { useState, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";

// Lazy Components
const SearchBar = React.lazy(() => import("../Header/SearchBar"));

const Navbar = ({ isHome, setIsHome, watchList, watchedList }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation().pathname;

  return (
    <>
      <nav className={`z-40 w-full ${isHome ? "absolute top-0 " : " "} `}>
        <div
          className={`flex justify-between  ${
            isHome ? "bg-transparent " : "bg-zinc-900 "
          } `}
        >
          <div className="flex -mx-0 sm:mx-52 md:mx-52 lg:mx-56 xl:mx-auto justify-center align-middle items-center">
            <div>
              <div className="sm:hidden md:hidden lg:flex xl:flex hidden w-full items-center py-4 px-2">
                <Link
                  to="/"
                  className={`w-auto p-2 mr-4 font-semibold text-transparent text-lg drop-shadow-lg bg-clip-text bg-gradient-to-r from-amber-400 to-red-800 hover:text-stone-400 ${
                    isHome ? "hidden" : " "
                  }`}
                  onClick={() => setIsHome(true)}
                >
                  Home Page
                </Link>
              </div>
            </div>
            <div
              className={`flex justify-start items-start align-middle py-4 ${
                isHome ? "invisible" : null
              }`}
            >
              <Suspense fallback={<div>Loading carajo!</div>}>
                <SearchBar location={location} />
              </Suspense>
            </div>

            <div className=" sm:absolute  md:absolute lg:hidden absolute left-72 sm:left-0 md:left-0 lg:left-72 ml-10  top-[1.1rem] z-20">
              <button
                className="outline-none mobile-menu-button "
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
              >
                <svg
                  className=" w-8 h-8 text-stone-300  "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            {/* <!-- Menu desde celular--> */}
            {navbarOpen && (
              <div className="mobile-menu z-50 absolute w-full top-16 left-0 bg-zinc-900 bg-opacity-95 transition-all ease-in-out">
                <ul className="text-center">
                  <li>
                    <div className="block text-sm px-2 py-4 text-white bg-stone-900 font-semibold">
                      <Link
                        to="/"
                        className="cursor-pointer text-gray-300 hover:text-white font-semibold  tr04"
                        onClick={() => {
                          setIsHome(true);
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        Home
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      <Link
                        to="movies"
                        className="cursor-pointer text-gray-300 hover:text-white font-semibold tr04 "
                        onClick={() => {
                          setIsHome(false);
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        Movies
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      <Link
                        to="watchlist"
                        className="cursor-pointer  text-gray-300 hover:text-amber-500 font-semibold tr04"
                        onClick={() => {
                          setIsHome(false);
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        Watch List
                        <div className="indicator pb-4">
                          <span className="indicator-item badge badge-secondary bg-opacity-60  ">
                            {watchList.length}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      <Link
                        to="watchedlist"
                        className="cursor-pointer  text-gray-300 hover:text-amber-500 font-semibold tr04"
                        onClick={() => {
                          setIsHome(false);
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        Watched List
                        <div className="indicator mb-4 ">
                          <span className="indicator-item badge badge-secondary bg-opacity-60 ">
                            {watchedList.length}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                      <Link
                        to="form"
                        className="cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
                        onClick={() => {
                          setIsHome(false);
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        Contact
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {/* <!-- Items de navegacion principal --> */}
            <div className="hidden sm:hidden md:hidden lg:flex items-center space-x-3 ml-4">
              <div className="py-4 px-3 text-gray-500 font-semibold transition duration-300">
                <Link
                  to="movies"
                  className="cursor-pointer text-gray-300 hover:text-amber-500 font-semibold tr04 "
                  onClick={() => {
                    setIsHome(false);
                  }}
                >
                  Movies
                </Link>
              </div>

              <div className="py-4 px-3 w-fit text-gray-500 font-semiboldtransition duration-300">
                <Link
                  to="watchlist"
                  className="cursor-pointer  text-gray-300 hover:text-amber-500 font-semibold tr04"
                  onClick={() => {
                    setIsHome(false);
                  }}
                >
                  Watch List
                  <div className="indicator pb-4">
                    <span className="indicator-item badge badge-secondary bg-opacity-60  ">
                      {watchList.length}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="py-4 px-3 w-fit text-gray-500 font-semiboldtransition duration-300">
                <Link
                  to="watchedlist"
                  className="cursor-pointer  text-gray-300 hover:text-amber-500 font-semibold tr04"
                  onClick={() => {
                    setIsHome(false);
                  }}
                >
                  Watched List
                  <div className="indicator mb-4 ">
                    <span className="indicator-item badge badge-secondary bg-opacity-60 ">
                      {watchedList.length}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="py-4 px-3 w-fit text-gray-500 font-semiboldtransition duration-300">
                <Link
                  to="form"
                  className="cursor-pointer  text-gray-300 hover:text-amber-500 font-semibold tr04"
                  onClick={() => {
                    setIsHome(false);
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
