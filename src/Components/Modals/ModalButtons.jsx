const ModalButtons = ({
  textLeftButton,
  textRightButton,
  setModal,
  handleLeftButton,
  handleRightButton,
  isDisabled,
  watchedDisabled,
}) => {
  return (
    <>
      <button
        data-modal-toggle="defaultModal"
        type="button"
        className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm px-5 py-1 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleLeftButton}
        disabled={isDisabled}
      >
        {textLeftButton}
      </button>
      <button
        data-modal-toggle="defaultModal"
        type="button"
        className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm px-5 py-1 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleRightButton}
        disabled={watchedDisabled}
      >
        {textRightButton}
      </button>
      <button
        data-modal-toggle="defaultModal"
        type="button"
        className="text-gray-500 uppercase bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 
              rounded-lg border border-gray-200 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 
              dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        onClick={() => setModal(false)}
      >
        Close
      </button>
    </>
  );
};

export default ModalButtons;
