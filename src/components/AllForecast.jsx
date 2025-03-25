import React from "react";
import ForecastDayItem from "./ForecastDayItem";
import { convertDate } from "@/utils/helperFun";
import Loading from "./Loading";

function AllForecast({ weatherData, loading, isDark }) {
  return loading ? (
    <div className="w-full min-h-[300px] ">
      <p className="text-3xl text-sky-500  mt-6 ml-4">24 Hours</p>
      <div
        className={`flex p-2 justify-start md:justify-center mt-8   xl:flex-nowrap  flex-wrap gap-1.5 gap-y-2.5 *:rounded-2xl  ${
          isDark ? "*:bg-[#111827]" : "*:bg-white"
        }  *:w-[49%] *:h-54 *:md:w-[215px] *:lg:w-[218px] *:md:h-56 *:lg:h-46`}
      >
        {weatherData.list?.map((item, index) => {
          return (
            <ForecastDayItem
              key={index}
              temp={Math.round(item.main.temp)}
              icon={item.weather[0].icon}
              day={convertDate(item.dt, "short")?.weakDay}
              hour={item.dt_txt.split(" ")[1].split(":").splice(0, 2).join(":")}
              isDark={isDark}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default AllForecast;
