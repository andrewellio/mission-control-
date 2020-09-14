import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Connected from "../components/Connected";
import MapPage from "../components/Map";
import Telemetry from "../components/Telemetry";
import Phase from "../components/Phase";
import Time from "../components/Time";
import WeatherWidget from "../components/WeatherWidget";
import Comms from "../components/Comms";
import Reader from "../api/Reader";
import HomeIcon from "@material-ui/icons/Home";

/**
 *  This page presents real-time data from the rocket.
 *  This includes Telemetry, positional and communications.
 */
const Dashboard = () => {
  return (
    <>
      <div style={styles.header}>
        <Link className="Dashboard-back inline-chart" to="/">
          <HomeIcon></HomeIcon>
        </Link>
        <Reader />
        <Time />
        <Connected />
      </div>
      <div style={styles.main}>
        <MapPage />
        <Comms />
      </div>
      <div style={styles.secondary}>
        <Telemetry />
        <Phase />
        <WeatherWidget />
      </div>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "center"
  },
  main: {
    display: "flex",
    justifyContent: "center"
  },
  secondary: {
    display: "flex",
    justifyContent: "left"
  }
};

export default Dashboard;
