import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeather } from "../api/Weather";
import "./Weather.css";
import data from "../data/WeatherData.json";
import { BrowserRouter } from "react-router-dom";

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts className offline usage.
 */

const Weather = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });
  const [results, setResults] = useState(null);
  const [get, save] = useWeather();

  const getJson = async () => {
    const json = await get(coordinates.lat, coordinates.long);
    setResults(json);
  };

  const saveData = async () => {
    save(results);
  };

  const loadData = async () => {
    //load();
    //console.log("This is load!")
    //results="hi"
    setResults(data);
  };

  const setLatitude = event => {
    const newLat = event.target.value;
    const newCoordinates = { lat: newLat, long: coordinates.long };
    setCoordinates(newCoordinates);
  };

  const setLongitude = event => {
    const newLong = event.target.value;
    const newCoordinates = { lat: coordinates.lat, long: newLong };
    setCoordinates(newCoordinates);
  };

  return (
    <>
      <BrowserRouter>
        <Link className="Instructions-back" to="/">
          <i className="material-icons">navigate_before</i>
        </Link>
      </BrowserRouter>
      <div className="Landing-body">
        <h1>Weather</h1>
        {results === null ? (
          <p id="weatherdata">Please enter the required fields below</p>
        ) : (
          <Result json={results} />
        )}
        <label className="space"> </label>
        <br />
        <label className="latValue">Latitude:</label>
        <br />
        <input
          type="int"
          placeholder="e.g. -41.2769"
          id="latId"
          value={coordinates.lat}
          onChange={setLatitude}
        />
        <br />
        <label className="space"> </label>
        <br />
        <label className="longValue">Longitude:</label>
        <br />
        <input
          type="int"
          placeholder="e.g. 174.7731"
          id="lonId"
          value={coordinates.long}
          onChange={setLongitude}
        />
        &nbsp;
        <button className="button" id="getData" onClick={getJson}>
          Get Data
        </button>
        <button className="button" id="saveData" onClick={saveData}>
          Save Data
        </button>
        <button className="button" id="loadData" onClick={loadData}>
          Load Data
        </button>
        <input type="file" accept=".json" />
      </div>
    </>
  );
};

const Result = ({ json }) => {
  return (
    <div style={{ border: "thin dotted white" }}>
      <table>
        <tr>
          <th>Current weather className: </th>
          <td>{json.name}</td>
        </tr>
        <tr>
          <th>Humidity:</th>
          <td>{json.main.humidity}</td>
        </tr>
        <tr>
          <th>Wind Speed:</th>
          <td>{json.wind.speed} m/s</td>
        </tr>
        <tr>
          <th>Wind Direction: </th>
          <td>{json.wind.deg * (Math.PI / 180)} radians</td>
        </tr>
        <tr>
          <th>Temperature: </th>
          <td>{json.main.temp} radians</td>
        </tr>
        <tr>
          <th>Air Pressure: </th>
          <td>{json.main.pressure} radians</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
