import { Link } from "react-router-dom";

const Footer = ({ setIsHome }) => {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="mr-4 md:mr-6 hover:underline"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsHome(true);
            }}
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movies Center
            </span>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                to="/"
                className="mr-4 md:mr-6 hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsHome(true);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="mr-4 md:mr-6 hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsHome(false);
                }}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className="hover:underline"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsHome(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            David Perdomo
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
