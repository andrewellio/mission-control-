import React from "react";
import MapPage from "./Map";
import Telemetry from "./Telemetry";
import Phase from "./Phase";
import Time from "./Time";
import WeatherWidget from "./WeatherWidget";
import Comms from "./Comms";
import "./Dashboard.css";
import { Link } from "react-router-dom";

// For testing purposes we mock the rocket data through a JSON file
import data from "../data/rocket.json";

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
