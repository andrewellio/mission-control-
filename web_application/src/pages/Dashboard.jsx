import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Connected from "../components/Connected";
import MapPage from "../components/Map";
import Telemetry from "../components/Telemetry";
import Phase from "../components/Phase";
import Time from "../components/Time";
import WeatherWidget from "../components/WeatherWidget";
import Comms from "../components/Comms";
import Reader from "../api/Reader";
import GoNoGo from "../pages/GoNoGo";



/**
 *  This page presents real-time data from the rocket.
 *  This includes Telemetry, positional and communications.
 */
export default function Dashboard() {
  return (
    <>
      {/* <button style={styles.buttonStyle} Link="/GoNoGo">Check Go/No Go</button> */}
      <Link style={styles.linkStyle} to='/GoNoGo'>Check Go/No Go</Link>

      <div style={styles.header}>
        <Link style={styles.back} >
          <HomeIcon />
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
}

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
  },
  back: {
    fontSize: "30pt",
    color: "white"
  },
  linkStyle:{
    position: 'relative',
    left: 1050,
    top: 35,
    
  },
};
