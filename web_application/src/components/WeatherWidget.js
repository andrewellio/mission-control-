import React, { useEffect } from "react";
import "./WeatherWidget.css";
import { useRocket } from "../api/Rocket";

/**
 *  This is the Weather widget for the Dashboard.
 *  It renders the wind speed/direction and cloud coverage
 *  It uses weather conditions stored by the Weather page.
 */
const WeatherWidget = () => {
  const [rocket] = useRocket();

  useEffect(() => {}, [rocket]);

  return (
    <div className="Coverage">
      <embed
        src={`https://api.openweathermap.org/data/2.5/weather?lat=${rocket.position.lat}&lon=${rocket.position.long}&APPID=9dbce15b12f75333f8f274f51793d0ff&mode=html&units=metric`}
      />
    </div>
  );
};

export default WeatherWidget;
