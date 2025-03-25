import Loading from "./Loading";

function Highlights({ weatherData, loading, isDark }) {
  return loading ? (
    <div className="w-full min-h-[350px] ">
      <p className="text-3xl text-sky-500  mt-6 ml-4">Today's Highlights</p>
      <div
        className={`flex flex-wrap mt-4 gap-3 lg:gap-2.5 *:xl:w-[24%] lg:mt-8 ${
          isDark ? "*:bg-[#111827]" : "*:bg-white"
        } ${isDark ? "*:text-white" : "*:text-[#111827]"}`}
      >
        <div className="w-full md:w-[48%] h-64  rounded-2xl p-4">
          <p className="text-gray-400 text-xl">Tempratures</p>
          <div className="flex flex-col gap-5 ml-2 mt-5">
            <div className="flex items-center gap-5">
              <img
                src="/icons/thermometer-warmer.svg"
                className="w-22"
                alt=""
              />
              <p className="text-xl">Max: {weatherData.tempMax}°</p>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="/icons/thermometer-colder.svg"
                className="w-22"
                alt=""
              />
              <p className="text-xl">Min: {weatherData.tempMin}°</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[48%]  h-64  rounded-2xl p-4">
          <p className="text-gray-400 text-xl">Humidity</p>
          <div className="flex flex-row gap-5 justify-between mt-12">
            <div className="flex items-center gap-5">
              <p className="text-6xl text-sky-500">{weatherData.humidity}%</p>
            </div>
            <div className="flex items-center gap-5">
              <img src="/icons/humidity.svg" className="w-26" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[48%]  h-64  rounded-2xl p-4">
          <p className="text-gray-400 text-xl">Sunrise & Sunset</p>
          <div className="flex flex-col gap-5 ml-3 mt-7">
            <div className="flex items-center gap-5">
              <img src="/icons/sunrise.svg" className="w-20" alt="" />
              <p className="text-2xl">{weatherData.sunrise}</p>
            </div>
            <div className="flex items-center gap-5">
              <img src="/icons/sunset.svg" className="w-20" alt="" />
              <p className="text-2xl">{weatherData.sunset}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[48%]  h-64  rounded-2xl p-4">
          <p className="text-gray-400 text-xl">Wind Status</p>
          <div className="flex flex-row gap-5 justify-between mt-12">
            <div className="flex items-center gap-1 ">
              <span className="text-4xl text-sky-500">
                {weatherData.windSpeed}
              </span>
              <span>Km/h</span>
            </div>
            <div className="flex items-center ">
              <img src="/icons/windsock.svg" className="w-24" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Highlights;
