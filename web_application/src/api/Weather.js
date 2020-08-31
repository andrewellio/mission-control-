import React, { createContext, useContext } from "react";
import download from "downloadjs";
import fs from "fs";

const WeatherContext = createContext([]);
export const useWeather = () => useContext(WeatherContext);

export default function WeatherProvider({ children }) {
  async function get(lat, long) {
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=9dbce15b12f75333f8f274f51793d0ff&mode=json&units=metric`; //mode=html should be used for dashboard;
    var response = await fetch(API);
    const json = await response.json();
    return json;
  }

  async function save(json) {
    const jsonString = JSON.stringify(json);
    download(jsonString, "WeatherData.json", "text/json");
  }

  function load() {
    const readData = fs.readFileSync("weatherData.json"); //need a file name (json file)
    const data = JSON.parse(readData);
    return data;
  }

  return (
    <WeatherContext.Provider value={[get, save, load]}>
      {children}
    </WeatherContext.Provider>
  );
}
