import React from 'react'
import { Link } from 'react-router-dom'

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts for offline usage.
 */
const Weather = props => {
  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Weather</h1>
        <b>
           <Link to="/SaveData">Save Data</Link>
       </b>
      </div>
    </div>
  );
}

export default Weather;
