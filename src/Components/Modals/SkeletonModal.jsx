import Loading from "../../assets/Gift/loading.gif";

const SkeletonModal = () => {
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-stone-900  bg-opacity-90 "
      >
        <div className=" relative p-4 w-full max-w-2xl h-full md:h-auto opacity-100">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start  rounded-t border-b dark:border-gray-600">
              <div className="">
                <div className=" w-[10rem] max-w-[100%] h-[30px] grid grid-cols-2 justify-end items-end   bg-slate-600 hover:bg-slate-500 rounded-xl p-2 m-4 text-stone-50  cursor-pointer text-xl hover:scale-110">
                  <div className="flex justify-center items-center"></div>
                  <div className="rounded-full bg-slate-700 w-10"></div>
                  <div className=" space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-pulse p-0 pt-6 space-y-4">
              <div className="bg-slate-600 h-[333px] w-[592px] mx-auto flex justify-center items-center shadow-2xl  ">
                <img
                  src={Loading}
                  alt="loading gif"
                  className="h-10 w-10 opacity-30"
                />
              </div>
              <div className="p-2 space-y-4">
                <div className=" w-1/2 max-w-[100%] h-[200px] grid grid-cols-1 justify-between items-center  bg-slate-600 hover:bg-slate-500 rounded-xl p-2 m-4 text-stone-50  cursor-pointer text-xl hover:scale-110">
                  <div className="flex justify-center items-center"></div>
                  <div className="mb-8">
                    <div className="rounded-full bg-slate-700 w-10"></div>
                    <div className=" space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b border-t
              border-gray-200 dark:border-gray-600"
                >
                  <div className=" w-[12rem] max-w-[100%] h-[30px] grid grid-cols-1 justify-end items-end   bg-slate-600 hover:bg-slate-500 rounded-xl p-2 m-4 text-stone-50  cursor-pointer text-xl hover:scale-110">
                    <div className="flex justify-center items-center"></div>
                    <div className="rounded-full bg-slate-700 w-10"></div>
                    <div className=" space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonModal;
