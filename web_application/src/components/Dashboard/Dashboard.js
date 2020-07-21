import React from 'react'
import MapPage from '../Map'
import Telemetry from '../Telemetry'
import Phase from '../Phase'
import Time from '../Time'
import WeatherWidget from '../WeatherWidget'
import Comms from '../Comms'
import './Dashboard.css'
import { Link } from 'react-router-dom'

// For testing purposes we mock the rocket data through a JSON file
import data from '../../data/rocket.json'

/**
 *  This page presents real-time data from the rocket.
 *  This includes Telemetry, positional and communications.
 */
function Dashboard() {
  return (
    <div className="Dashboard">
      <Link className="Dashboard-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <MapPage position={data.position}></MapPage>
      <Telemetry velocity={data.velocity} altitude={data.altitude} value="100"></Telemetry>
      <Time></Time>
      <Phase phase={data.phase}></Phase>
      <WeatherWidget wind={data.wind} conditions={data.conditions}></WeatherWidget>
      <Comms comms={data.comms}></Comms>
    </div>
  );
};

export default Dashboard;
