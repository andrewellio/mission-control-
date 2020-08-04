import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWeather } from "../api/Weather";
import "./Weather.css";

/**
 *  This page can retrive the current weather conditions.
 *  We use the OpenWeatherMap API, which required an internet connection.
 *  The user can save and load weather forecasts for offline usage.
 */

// run npm install browserify-fs
const Weather = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });
  const [results, setResults] = useState(null);
  const [get, save, load] = useWeather();

  const getJson = async () => {
    const json = await get(coordinates.lat, coordinates.long);
    setResults(json);
  };

  const saveData = async () => {
    save(results);
  };

  const loadData = async () => {
    load();
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
      <Link className="Instructions-back" to="/">
        <i className="material-icons">navigate_before</i>
      </Link>
      <div className="Landing-body">
        <h1>Weather</h1>
        {results === null ? (
          <p id="weatherdata">Please enter the required fields below</p>
        ) : (
          <Result json={results} />
        )}
        <label for="space"> </label>
        <br />
        <label for="latValue">Latitude:</label>
        <br />
        <input
          type="int"
          placeholder="e.g. -41.2769"
          id="latId"
          value={coordinates.lat}
          onChange={setLatitude}
        />
        <br />
        <label for="space"> </label>
        <br />
        <label for="longValue">Longitude:</label>
        <br />
        <input
          type="int"
          placeholder="e.g. 174.7731"
          id="lonId"
          value={coordinates.long}
          onChange={setLongitude}
        />
        &nbsp;
        <button class="button" id="weatherButton" onClick={getJson}>
          Get Data
        </button>
        <button class="button" onClick={saveData}>
          Save Data
        </button>
        <button class="button" onClick={loadData}>
          Load Data
        </button>
      </div>
    </>
  );
};

const Result = ({ json }) => {
  return (
    <div style={{ border: "thin dotted white" }}>
      <table>
        <tr>
          <th>Current weather for: </th>
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
