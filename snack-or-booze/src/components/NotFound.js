import fourOfour from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={fourOfour}
        alt="404"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col">
          <p className="text-sky-950 font-bold text-7xl text-center mb-10">
            Whoops, Page Not Found!
          </p>
          <p className="text-sky-950 font-bold text-7xl text-center ">
            404 Error
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
