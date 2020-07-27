import React from 'react'
import { Link } from 'react-router-dom'
import './weather.css'

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts for offline usage.
 */


function Weather() {

  function saveData() {
    var jsonData = '{"wellington":[{"weather":"sunny"},{"wind-speed":"5m/s"}]}';

    // parse json
    var jsonParsed = JSON.parse(jsonData);

    var jsonString = JSON.stringify(jsonParsed);

    console.log(jsonString);

  }

  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Weather</h1>

        <button onClick={saveData}>
          Save
        </button>

      </div>
    </div>
  );

}

export default Weather;
