import React from "react";
import { Link } from "react-router-dom";
import "./Instructions.jsx";

/**
 * This page provides a high-level overview of each page.
 * It is intended for first time users to gain their bearings.
 */
const Instructions = () => {
  return (
    <div>
      <Link className="Instructions-back" to="/">
        <i className="material-icons">navigate_before</i>
      </Link>
      <div className="Landing-body">
        <h1>Instructions</h1>
        <div className="Landing-description">
          <ol>
            <li>
              <b>
                <Link to="/">Home page</Link>
              </b>
              <br />
              This is the landing page. It contains a link to the{" "}
              <a href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12">
                repository
              </a>
              . From there you can reach this instructions page or navigate to
              the Dashboard.
            </li>
            <li>
              <b>
                <Link to="/Weather">Weather</Link>
              </b>
              <br />
              Use the <a href="https://openweathermap.org/">
                OpenWeatherMap
              </a>{" "}
              web service to view the current weather forecast for the area.
              Save and load forecasts for offline usage.
            </li>
            <li>
              <b>
                <Link to="/Simulation">Simulation</Link>
              </b>
              <br />
              Predict the expected landing trajectory with an external{" "}
              <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method">
                Monte Carlo
              </a>{" "}
              simulation. Data is exchanged through a JSON. The softwares
              communicate using a standardized protocol for Rocket telemetry.
            </li>
            <li>
              <b>
                <Link to="/GoNoGo">Go/NoGo</Link>
              </b>
              <br />
              The Go/NoGo will let user decide launch the rocket or not.{" "}
            </li>
            <li>
              <b>
                <Link to="/Dashboard">Dashboard</Link>
              </b>
              <br />
              The Dasboard displays telemetry and location data of the Rocket.
              This information is passed using USB serial over{" "}
              <a href="https://en.wikipedia.org/wiki/LoRa">LoRa</a>. The
              software displays the current phase of the rocket.
            </li>
            <li>
              <b>
                <Link to="/Graphs">Graphs</Link>
              </b>
              <br />
              The graphs will Visualiz the rocket data during the launch.{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
