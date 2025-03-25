import Loading from "./Loading";

function Sidebar({ search, setSearch, weatherData, loading, isDark }) {
  return (
    <div
      className={`w-full  flex items-center justify-center pt-10 flex-col gap-6 lg:w-[30%]  lg:justify-start xl:w-[25%] ${
        isDark ? "bg-[#111827]" : "bg-white"
      } `}
    >
      {/* search box */}
      <div
        className={`w-60 h-10  flex justify-start items-center rounded-2xl border border-gray-400  ${
          (isDark ? "bg-[#374151]" : "bg-white",
          isDark ? "*:text-white" : "*:text-black")
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mr-1 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="search for places"
          className={`outline-0`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <>
          {/* city name */}
          <p className="text-3xl text-sky-500 w-48 text-center">
            {weatherData.location + ", " + weatherData.country}{" "}
          </p>

          <img
            src={`/icons/${weatherData.iconId}.svg`}
            alt=""
            className="w-50 mt-2"
          />
          {/* temprature */}
          <div
            className={`w-46 h-28 ${
              (isDark ? "bg-[#111827]" : "bg-white",
              isDark ? "border border-gray-500" : "border-0")
            }  rounded-4xl shadow-xl  flex justify-center items-center`}
          >
            <p className="relative">
              <span className="text-[60px] text-sky-600">
                {weatherData.temperature}
              </span>{" "}
              <span className="absolute top-[10px] text-2xl">° </span>
            </p>
          </div>
          {/* date */}
          <p className="text-3xl mt-2 text-sky-500">{weatherData.day}</p>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Sidebar;
