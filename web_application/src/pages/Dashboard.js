import React from "react";
import MapPage from "../components/Map";
import Telemetry from "../components/Telemetry";
import Phase from "../components/Phase";
import Time from "../components/Time";
import WeatherWidget from "../components/WeatherWidget";
import Comms from "../components/Comms";
import "./Dashboard.css";
import { Link } from "react-router-dom";

// TODO The Reader is in the class temporarily for demonstration
import Reader from "../api/Reader";

/**
 *  This page presents real-time data from the rocket.
 *  This includes Telemetry, positional and communications.
 */
function Dashboard() {
  return (
    <div className="Dashboard">
      <Reader />
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
