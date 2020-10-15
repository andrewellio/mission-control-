import React from "react";
import "./Phase.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useRocket } from "../api/Rocket";
import stationary from "../assets/stationary.png";
import ejection from "../assets/ejection.png";
import launch from "../assets/launch.png";
import recovery from "../assets/recovery.png";

/**
 *  This is the rocket phase widget for the Dashboard.
 *  It renders a progress bar to display the current phase.
 *  We use labels, icons and color to mark that phase.
 */
const Phase = (props) => {
  const [rocket] = useRocket();
  return (
    <div className="Phase">
      <ProgressBar
        percent={rocket.phase}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Stationary</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={stationary}
                alt="Stationary Rocket Icon"
              />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Launch</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={launch}
                alt="Launched Rocket Icon"
              />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>ECO</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={launch}
                alt="ECO Rocket Icon"
              />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Epogee</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={launch}
                alt="Epogee Rocket Icon"
              />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Ejection</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={ejection}
                alt="Ejection Rocket Icon"
              />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Recovery</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={recovery}
                alt="Recovery Rocket Icon"
              />
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default Phase;
