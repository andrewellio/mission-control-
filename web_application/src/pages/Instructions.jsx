import React from "react";
import { Link } from "react-router-dom";

/**
 * This page provides a high-level overview of each page.
 * It is intended for first time users to gain their bearings.
 */
export default function Instructions() {
  return (
    <div style={styles.container}>
      <div>
        <Link to="/">
          <i style={styles.back} className="material-icons">
            navigate_before
          </i>
        </Link>
        <h1 style={styles.title}>Instructions</h1>
        <div style={styles.content}>
          <ol>
            <li>
              <b>
                <Link to="/">Home page</Link>
              </b>
              <br />
              This is the landing page. It contains a link to the{" "}
              <RepositoryLink />. From there you can reach this instructions
              page or navigate to the Dashboard.
            </li>
            <li>
              <b>
                <Link to="/Weather">Weather</Link>
              </b>
              <br />
              Use the <OpenWeatherLink /> web service to view the current
              weather forecast for the area. Save and load forecasts for offline
              usage.
            </li>
            <li>
              <b>
                <Link to="/Simulation">Simulation</Link>
              </b>
              <br />
              Predict the expected landing trajectory with an external{" "}
              <MonteCarloLink />. Data is exchanged through a JSON. The
              softwares communicate using a standardized protocol for Rocket
              telemetry.
            </li>
            <li>
              <b>
                <Link to="/Dashboard">Dashboard</Link>
              </b>
              <br />
              The Dasboard displays telemetry and location data of the Rocket.
              This information is passed using USB serial over <LoraLink />. The
              software displays the current phase of the rocket. Instructions
              for offline usage can be found <OfflineUsageLink />.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    textAlign: "center"
  },
  content: {
    maxWidth: "80vh",
    fontSize: "14pt",
    textAlign: "left"
  },
  back: {
    fontSize: "30pt",
    color: "white"
  }
};

function RepositoryLink() {
  return (
    <TextLink
      text="repository"
      url="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
    />
  );
}

function OpenWeatherLink() {
  return <TextLink text="OpenWeatherMap" url="https://openweathermap.org/" />;
}

function MonteCarloLink() {
  return (
    <TextLink
      text="Monte Carlo Simulation"
      url="https://en.wikipedia.org/wiki/Monte_Carlo_method"
    />
  );
}

function LoraLink() {
  return <TextLink text="LoRa" url="https://en.wikipedia.org/wiki/LoRa" />;
}

function OfflineUsageLink() {
  return (
    <TextLink
      text="here"
      url="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12/-/blob/master/README.md"
    />
  );
}

function TextLink({ text, url }) {
  return <a href={url}>{text}</a>;
}
