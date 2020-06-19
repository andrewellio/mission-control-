import React from 'react'
import MapPage from '../Map'
import Telemetry from '../Telemetry'
import Phase from '../Phase'
import Time from '../Time'
import WeatherWidget from '../WeatherWidget'
import Comms from '../Comms'
import './Dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Link className="Dashboard-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <MapPage></MapPage>
      <Telemetry value="100"></Telemetry>
      <Time></Time>
      <Phase></Phase>
      <WeatherWidget></WeatherWidget>
      <Comms></Comms>
    </div>
  );
};

export default Dashboard;
