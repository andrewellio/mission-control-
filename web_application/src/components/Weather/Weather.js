import React from 'react'
import { Link } from 'react-router-dom'

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts for offline usage.
 */

// run npm install browserify-fs 
function Weather() {

  function saveData() {
    var fs = require('browserify-fs');
    var jsonData = '{"wellington":[{"weather":"sunny"},{"wind-speed":"5m/s"}]}';

    // parse json
    var jsonParsed = JSON.parse(jsonData);

    var jsonString = JSON.stringify(jsonParsed);

    fs.writeFile('./weatherData.json', jsonString, done);

    function done(){
      console.log('data saved');
    }

    console.log(jsonString);

  }

  function loadData() {
    var fs = require('fs');
    var readData = fs.readFileSync('weatherData.json');//need a file name (json file)
    var data = JSON.parse(readData);

    console.log('data');

  }

  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Weather</h1>

        <button onClick={saveData}>
          Save Data
        </button>

        <p></p>

        <button onClick={loadData}>
          Load Data
        </button>

      </div>
    </div>
  );

}

export default Weather;
