import videoBackground from "../../assets/videos/01.webm";

const VideoBackground = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen mb-3 overflow-hidden ">
        <div className="relative z-30 bg-opacity-20 ">
          <h1
            className="font-extrabold text-transparent text-center text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl drop-shadow-lg
             bg-clip-text bg-gradient-to-r from-white to-zinc-200"
          >
            Welcome to Movies Center
          </h1>
        </div>
        {/* Reproductor de video utilizado en el background de home. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-20 w-full min-w-max sm:min-w-full md:min-w-full lg:min-w-full min-h-full max-w-xl sm:max-w-none md:max-w-xl lg:max-w-0 xl:max-w-0 "
        >
          <source src={videoBackground} type="video/webm" />
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
