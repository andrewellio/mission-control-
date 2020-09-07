import React from "react";
import GaugeChart from "react-gauge-chart";
import "./WeatherWidget.css";
import { useRocket } from "../api/Rocket";

/**
 *  This is the Weather widget for the Dashboard.
 *  It renders the wind speed/direction and cloud coverage
 *  It uses weather conditions stored by the Weather page.
 */
const WeatherWidget = () => {
  const [rocket] = useRocket();
  return (
    <div className="Coverage">
      <embed
        src={`https://api.openweathermap.org/data/2.5/weather?lat=${rocket.position.lat}&lon=${rocket.position.long}&APPID=9dbce15b12f75333f8f274f51793d0ff&mode=html&units=metric`}
      ></embed>
    </div>
  );
};

export default WeatherWidget;
