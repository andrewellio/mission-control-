import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {CSVLink, CSVDownload} from 'react-csv'

/**
 *  This page lets the user run Monte Carlo Simulation.
 *  This communicates with an external software using CSV.
 * 
 * $ npm i -s csv-writer
 */

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'out.csv',
 const header = [ 
    {id: 'latId', title: 'lanuchLatitude'},
    {id: 'lonId', title: 'lanuchLongitude'},
    {id: 'launchAngId', title: 'lanuchAngle'},
    {id: 'launchAngStdId', title: 'lanuchAngleStdDev'},
    {id: 'rodLenId', title: 'launchRodLength'},
    {id: 'launchDirId', title: 'lanuchDirection'},
    {id: 'launchDirStdId', title: 'lanuchDirectionStdDev'},
    {id: 'windSpeedId', title: 'windSpeed'},
    {id: 'windSpeedStdId', title: 'windSpeedStdDev'},
    {id: 'windDirId', title: 'windDirection'},
    {id: 'windDirStdId', title: 'windDirectionStdDev'},
    {id: 'launchTempId', title: 'launchTemperature'},
    {id: 'launchTempStdId', title: 'temperatureStdDev'},
    {id: 'altitudeId', title: 'launchAltitude'},
    {id: 'pressureId', title: 'launchPressure'},
    {id: 'pressureStdId', title: 'launchPressureStdDev'},
    {id: 'turbIntensityId', title: 'windTurbulenceIntensity'},
    {id: 'motorPerfMeanId', title: 'motorPerformanceMean'},
    {id: 'motorPerfStdId', title: 'motorPerformanceStdDev'},
    {id: 'numSimsId', title: 'numSims'},
    {id: 'timeOpenParachuteId', title: 'timeToOpenParachuteStdDev'}
 
  ];

//  csvWriter
//   .writeRecords(data)
//   .catch(error => (console.log("Error: ", error)))
//   .then(()=> console.log('The CSV file was written successfully'));

//<CSVDownload data={data} headers={header}>Download Me</CSVDownload>



function Simulation() {
  //General Values
  const[latitudeValue, setLatitude] = useState('');
  const[longitudeValue, setLongitude] = useState('');
  const[launchAngleValue, setLaunchAngle] = useState('');
  const[launchAngleStdDev, setLaunchAngleStdDev] = useState('');
  const[launchRodLengthValue, setLaunchRodLength] = useState('');
  const[launchDirectionValue, setLaunchDirection] = useState('');
  const[launchDirectionStdDev, setLaunchDirectionStdDev] = useState('');

  //Atmospheric Values
  const[windSpeedValue, setWindSpeed] = useState('');
  const[windSpeedStdDev, setWindSpeedStdDev] = useState('');
  const[windDirectionValue, setWindDirection] = useState('');
  const[windDirectionStdDev, setWindDirectionStdDev] = useState('');
  const[launchTempValue, setLaunchTemp] = useState('');
  const[launchTempStdDev, setLaunchTempStdDev] = useState('');
  const[launchAltitudeValue, setLaunchAltitude] = useState('');
  const[launchPressureValue, setLaunchPressure] = useState('');
  const[launchPressureStdDev, setLaunchPressureStdDev] = useState('');
  const[turbulenceIntensityValue, setTurbulenceIntensity] = useState('');

  //Other Values
  const[motorPerformanceMeanValue, setMotorPerformanceMean] = useState('');
  const[motorPerformanceMeanStdDev, setMotorPerformanceMeanStdDev] = useState('');
  const[numberOfSimulationsValue, setNumberOfSimulations] = useState('');
  const[timeToOpenParachuteStdDev, setTimeToOpenParachuteStdDev] = useState('');

  const data = [
    {//examples by id, '' for strings or num
      launchLatitude: latitudeValue,
      launchLongitude: longitudeValue,
      windSpeed: windSpeedValue,
      windSpeedStdDev: windSpeedStdDev,
      launchAngle: launchAngleValue,
      launchAngleStdDev: launchAngleStdDev,
      launchDirection: launchDirectionValue,
      launchDirectionStdDev: launchDirectionStdDev,
      launchTemperature: launchTempValue,
      temperatureStdDev: launchTempStdDev,
      launchAltitude: launchAltitudeValue,
      launchPressure: launchPressureValue,
      pressureStdDev: launchPressureStdDev,
      launchRodLength: launchRodLengthValue,
      windTurbulenceIntensity: turbulenceIntensityValue,
      motorPerformanceMean: motorPerformanceMeanValue,
      motorPerformanceStdDev: motorPerformanceMeanStdDev,
      numSims: numberOfSimulationsValue,
      timeToOpenParachuteStdDev: timeToOpenParachuteStdDev,
      windDirectionStdDev: windDirectionStdDev,
      windDirection: windDirectionValue,
    }
  ];

  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">

        <h1>Simulation</h1>
        <p>Please note that some values like standard deviation (std) 
          and values which are challanging to measure (e.g. wind turbulance) are optional. 
          As such, they should use their default values.</p>
        <h2>General Values</h2>

        <label for="latValue">Latitude:</label>
        <input //lanuchLatitude is CSV name
          type="int"
          placeholder="e.g. -41.2769"
          id="latId"
          onChange={event => setLatitude(event.target.value)}
          />

        <br />
          
        <label for="longValue">Longitude:</label>
        <input //lanuchLongitude
          type="int"
          placeholder="e.g. 174.7731"
          id="lonId"
          onChange={event => setLongitude(event.target.value)}
        />
        <br />

        <label for="launchAngleValue">Launch Angle:</label>
        <input //lanuchAngle
          type="int"
          placeholder="e.g. 10.5 (degrees)"
          id="launchAngId"
          //value={coordinates.long}
          onChange={event => setLaunchAngle(event.target.value)}
        />
        <br />

        <label for="launchAngleStdDevValue">Launch Angle (Standard Deviation):</label>
        <input //lanuchAngleStdDev
          type="int"
          placeholder="e.g. 10.5 (mean)"
          id="launchAngStdId"
          //value={coordinates.long}
          onChange={event => setLaunchAngleStdDev(event.target.value)}
        />
        <br />

        <label for="RodLengthValue">Launch Rod Length:</label>
        <input //launchRodLength
          type="int"
          placeholder="e.g. 0.5 (meters)"
          id="rodLenId"
          //value={coordinates.long}
          onChange={event => setLaunchRodLength(event.target.value)}
        />
        <br />

        <label for="launchDirectionValue">Launch Direction:</label>
        <input //lanuchDirection
          type="int"
          placeholder="e.g. 12345.678 (Radians)"
          id="launchDirId"
          //value={coordinates.long}
          onChange={event => setLaunchDirection(event.target.value)}
        />
        <br />

        <label for="launchDirectionStdDevValue">Launch Direction (Standard Deviation):</label>
        <input //lanuchDirectionStdDev
          type="int"
          placeholder="e.g. 12345.678 (mean)"
          id="launchDirStdId"
          //value={coordinates.long}
          onChange={event => setLaunchDirectionStdDev(event.target.value)}
        />
        <br />

        <h2>Atmospheric Values</h2>

        <label for="windSpeedValue">Wind Speed:</label>
        <input //windSpeed
          type="int"
          placeholder="e.g. 10 (meters per second)"
          id="windSpeedId"
          //value={coordinates.long}
          onChange={event => setWindSpeed(event.target.value)}
        />
        <br />

        <label for="windSpeedStdDevValue">Wind Speed (Standard Deviation):</label>
        <input //windSpeedStdDev
          type="int"
          placeholder="e.g. 10 (Standard Deviation)"
          id="windSpeedStdId"
          //value={coordinates.long}
          onChange={event => setWindSpeedStdDev(event.target.value)}
        />
        <br />

        <label for="windDirectionValue">Wind Direction:</label>
        <input //windDirection
          type="int"
          placeholder="e.g. 12345.678 (Radians)"
          id="windDirId"
          //value={coordinates.long}
          onChange={event => setWindDirection(event.target.value)}
        />
        <br />

        <label for="windDirectionStdDevValue">Wind Direction (Standard Deviation):</label>
        <input //windDirectionStdDev
          type="int"
          placeholder="e.g. 12345.678 (Standard Deviation)"
          id="windDirStdId"
          //value={coordinates.long}
          onChange={event => setWindDirectionStdDev(event.target.value)}
        />
        <br />

        <label for="temperatureValue">Launch Temperature:</label>
        <input //launchTemperature
          type="int"
          placeholder="e.g. 21 (degrees)"
          id="launchTempId"
          //value={coordinates.long}
          onChange={event => setLaunchTemp(event.target.value)}
        />
        <br />

        <label for="temperatureStdDevValue">Launch Temperature: (Standard Deviation)</label>
        <input //temperatureStdDev
          type="int"
          placeholder="e.g. 21 (Standard Deviation)"
          id="launchTempStdId"
          //value={coordinates.long}
          onChange={event => setLaunchTempStdDev(event.target.value)}
        />
        <br />

        <label for="altitudeValue">Launch Altitude</label>
        <input //launchAltitude
          type="int"
          placeholder="e.g. 1 (meters ground level)"
          id="altitudeId"
          //value={coordinates.long}
          onChange={event => setLaunchAltitude(event.target.value)}
        />
        <br />

        <label for="pressureValue">Launch Pressure</label>
        <input //launchPressure
          type="int"
          placeholder="e.g. 50 (Percentage)" //Maybe...
          id="pressureId"
          //value={coordinates.long}
          onChange={event => setLaunchPressure(event.target.value)}
        />
        <br />

        <label for="pressureStdDevValue">Launch Pressure (Standard Deviation)</label>
        <input //launchPressureStdDev
          type="int"
          placeholder="e.g. 50 (Standard Deviation)" //Maybe...
          id="pressureStdId"
          //value={coordinates.long}
          onChange={event => setLaunchPressureStdDev(event.target.value)}
        />
        <br />

        <label for="turbulanceIntensityValue">Turbulance Intensity:</label>
        <input //windTurbulenceIntensity
          type="int"
          placeholder="e.g. 50 (Standard Deviation)" //Maybe...
          id="turbIntensityId"
          //value={coordinates.long}
          onChange={event => setTurbulenceIntensity(event.target.value)}
        />
        <br />

        <h2>Other Values</h2>

        <label for="motorPerformanceMeanValue">Motor Performance Mean:</label>
        <input //motorPerformanceMean
          type="int"
          placeholder="e.g. 25 (percentage)" 
          id="motorPerfMeanId"
          //value={coordinates.long}
          onChange={event => setMotorPerformanceMean(event.target.value)}
        />
        <br />

        <label for="motorPerformanceStdDevValue">Motor Performance (Standard Deviation):</label>
        <input //motorPerformanceStdDev
          type="int"
          placeholder="e.g. 25 (Standard Deviation)" 
          id="motorPerfStdId"
          //value={coordinates.long}
          onChange={event => setMotorPerformanceMeanStdDev(event.target.value)}
        />
        <br />

        <label for="numSimsValue">Number of Simulations:</label>
        <input //numSims
          type="int"
          placeholder="e.g. 10" 
          id="numSimsId"
          //value={coordinates.long}
          onChange={event => setNumberOfSimulations(event.target.value)}
        />
        <br />

        <label for="timeToOpenParachuteStdDevValue">Time To Open Parachute (Standard Deviation):</label>
        <input //timeToOpenParachuteStdDev
          type="int"
          placeholder="e.g. 3 (seconds) - (Standard Deviation)" 
          id="timeOpenParachuteId"
          //value={coordinates.long}
          onChange={event => setTimeToOpenParachuteStdDev(event.target.value)}
        />
        <br />

        <CSVLink data={data} filename={"out.csv"}>Download CSV</CSVLink>
        <br />

      </div>
    </div>
  );
}

export default Simulation;
