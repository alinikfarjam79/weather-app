"use client";
import { getProperties } from "@/utils/helperFun";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import ForecastDayItem from "@/components/ForecastDayItem";
import AllForecast from "@/components/AllForecast";
import Loading from "@/components/Loading";
import Highlights from "@/components/Highlights";

function Main() {
  const [search, setSearch] = useState("tehran");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const api = {
    base: "https://api.openweathermap.org/data/2.5",
    key: "c357843bebc4182b05500baa57c644c9",
  };

  useEffect(() => {
    async function httpRequest() {
      //get data from  axios(`${api.base}/forecast?q=${search}&cnt=9&appid=${api.key}`) with await
      try {
        setLoading(false);
        const result = await axios(
          `${api.base}/forecast?q=${search}&units=metric&cnt=9&appid=${api.key}`
        );
        const data = await getProperties(result.data);
        console.log(data);
        setWeatherData(data);
        setLoading(true);
      } catch (e) {
        setSearch("tehran");
        setLoading(false);
      }
    }

    httpRequest();
  }, [search]);
  console.log(weatherData);

  return (
    <div
      className={`w-full min-h-[120vh] flex items-center flex-col justify-center py-12 ${
        isDark ? "bg-gray-700" : "bg-sky-200"
      } `}
    >
      <div className="w-[95%] relative min-h-[100vh] bg-white rounded-2xl overflow-hidden flex-col lg:flex lg:flex-row ">
        <button
          onClick={() => setIsDark((pre) => !pre)}
          className="group dark:bg-gray-600 border absolute top-4 right-4 border-gray-300 hover:border-gray-400 p-0.5 dark:border-gray-600 dark:hover:border-gray-500 rounded-full transition-all mr-5"
        >
          {isDark ? (
            <figure>
              <img
                className="w-8 dark:bg-gray-600 rounded-full"
                src={`icons/01d.svg`}
                alt="sun"
                title="Light Mode"
              />
            </figure>
          ) : (
            <figure>
              <img
                className="w-8"
                src={`icons/01n.svg`}
                alt="moon"
                title="Dark Mode"
              />
            </figure>
          )}
        </button>
        {/* sidebar */}
        <Sidebar
          search={search}
          setSearch={setSearch}
          weatherData={weatherData}
          loading={loading}
          isDark={isDark}
        />
        <div
          className={`w-full min-h-52 ${
            isDark ? "bg-[rgb(31,41,55)]" : "bg-[#f0f9ff]"
          }  lg:w-[70%] xl:w-[75%] p-7`}
        >
          {/* 24 hours section */}
          {weatherData ? (
            <AllForecast
              weatherData={weatherData}
              loading={loading}
              isDark={isDark}
            />
          ) : (
            // <Loading />
            <p>Loading.....</p>
          )}
          {/* Todays highlights */}
          <Highlights
            weatherData={weatherData}
            loading={loading}
            isDark={isDark}
          />
        </div>
      </div>
      <p className="mt-2 text-xl">
        Created by{" "}
        <a
          href="https://github.com/alinikfarjam79"
          target="_blank"
          className="text-blue-600"
        >
          Ali Nikfarjam
        </a>
      </p>
    </div>
  );
}
export default Main;
