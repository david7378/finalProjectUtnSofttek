import { RiAlertFill } from "react-icons/ri";

const NoFound = ({ msg }) => {
  return (
    <>
      <div className="w-10/12 pb-40 sm:pb-40 md:pb-40 lg:pb-0 sm:w-6/12 md:w-6/12 lg:w-6/12 align-middle  flex justify-center items-center mx-auto rounded-lg border-l-[6px] border-transparent h-[754px]">
        <span className="flex justify-center mr-2 sm:mr-4 md:mr-4 lg:mr-4 items-center text-6xl text-amber-600">
          <RiAlertFill />
        </span>

        <h2 className="font-base text-transparent my-32 text-lg lg:text-4xl md:text-2xl uppercase text-center drop-shadow-lg bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">
          {msg}{" "}
        </h2>
      </div>
    </>
  );
};

export default NoFound;
