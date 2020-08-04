import React from 'react'
import { Link } from 'react-router-dom'
import './Weather.css'

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts for offline usage.
 */

// run npm install browserify-fs 
function Weather() {

  function getJson(){
    document.getElementById("weatherdata").style.border = "thin dotted white";
  
    var lat = document.getElementById("latId").value;
    var lon = document.getElementById("lonId").value;
  
    var URL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=9dbce15b12f75333f8f274f51793d0ff&mode=json&units=metric" //mode=html should be used for dashboard
    
    var Httpreq = new XMLHttpRequest(); 
  
    Httpreq.open("GET",URL,false);
    Httpreq.send(null);
  
    var json = JSON.parse(Httpreq.responseText);
    
  
    document.getElementById("weatherdata").innerHTML = "Current weather for: *" + json.name + 
    "<br>Humidity: "+ json.main.humidity + "%" +
    "<br>Wind Speed: "+ json.wind.speed + " m/s" +
    "<br>Wind Direction: "+ (json.wind.deg*(Math.PI/180)) + " radians" +
    "<br>Temperature: "+ json.main.temp + "°C" + //Beware of this symbol, may cause problems when packaging
    "<br>Air Pressure: "+ json.main.pressure + " hPa" +
    "<br><br><br>*Approximate Location"; 
  }
  

  function saveData() {
    var download = require('downloadjs');

    var URL = "https://api.openweathermap.org/data/2.5/weather?lat=-41&lon=174&APPID=9dbce15b12f75333f8f274f51793d0ff&mode=json&units=metric" //mode=html should be used for dashboard

    var Httpreq = new XMLHttpRequest(); 

    Httpreq.open("GET",URL,false);
    Httpreq.send(null);
  
    var jsonData = JSON.parse(Httpreq.responseText);
    var jsonString = JSON.stringify(jsonData);

    download(jsonString, "WeatherData.json", "text/json");
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

        <document>
          <p id="weatherdata">Please enter the required fields below</p>
          
          <label for="space"> </label><br></br>
          
          <label for="latValue">Latitude:</label><br></br>
          <input type="int" placeholder="e.g. -41.2769" id="latId"></input><br></br>

          <label for="space"> </label><br></br>
          
          <label for="longValue">Longitude:</label><br></br>
          <input type="int" placeholder="e.g. 174.7731" id="lonId"></input>
          
        </document>
        &nbsp;
        <button type="button" id="weatherButton" onClick={getJson}>Get Weather Data</button>


        <button class="button" onClick={saveData}>
          Save Data
        </button>

        <button class="button" onClick={loadData}>
          Load Data
        </button>

      </div>
    </div>
  );

}

export default Weather;
