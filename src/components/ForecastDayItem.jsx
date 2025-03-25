import React from "react";

function ForecastDayItem({ day, hour, icon, temp, isDark }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3`}>
      <div className="flex flex-col items-center">
        <p
          className={`text-xl font-medium ${
            isDark ? "text-white" : "text-black"
          } `}
        >
          {day}
        </p>
        <p className="text-gray-400">{hour}</p>
      </div>
      <img src={`/icons/${icon}.svg`} alt="" className="w-16" />
      <p className="text-xl text-gray-500">{temp}°</p>
    </div>
  );
}

export default ForecastDayItem;
