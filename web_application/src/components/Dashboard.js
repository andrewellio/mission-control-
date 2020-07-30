import React from "react";
import MapPage from "../api/Map";
import Telemetry from "../api/Telemetry";
import Phase from "../api/Phase";
import Time from "../api/Time";
import WeatherWidget from "../api/WeatherWidget";
import Comms from "../api/Comms";
import "./Dashboard.css";
import { Link } from "react-router-dom";

/**
 *  This page presents real-time data from the rocket.
 *  This includes Telemetry, positional and communications.
 */
function Dashboard() {
  return (
    <div className="Dashboard">
      <Link className="Dashboard-back" to="/">
        <i className="material-icons">navigate_before</i>
      </Link>
      <MapPage />
      <Telemetry />
      <Time></Time>
      <Phase />
      <WeatherWidget />
      <Comms />
    </div>
  );
}

export default Dashboard;
