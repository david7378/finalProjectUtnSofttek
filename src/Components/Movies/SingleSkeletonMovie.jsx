import Loading from "../../assets/Gift/loading.gif";
const SingleSkeletonMovie = () => {
  return (
    <>
      <div className="animate-pulse w-[20rem] max-w-[100%] h-[560px] grid grid-cols-1 justify-end items-end   bg-slate-600 hover:bg-slate-500 rounded-xl p-2 m-4 text-stone-50  cursor-pointer text-xl hover:scale-110">
        <div className="flex justify-center items-center">
          <img
            src={Loading}
            alt="loading gif"
            className=" h-8 w-8 opacity-10"
          />
        </div>
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
    </>
  );
};

export default SingleSkeletonMovie;
