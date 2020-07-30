import React from "react";
import "./Phase.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useRocket } from "../api/Rocket";
/**
 *  This is the rocket phase widget for the Dashboard.
 *  It renders a progress bar to display the current phase.
 *  We use labels, icons and color to mark that phase.
 */
const Phase = props => {
  const { data } = useRocket();
  return (
    <div className="Phase">
      <ProgressBar
        percent={data.phase}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <h5>Stationary</h5>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://static.thenounproject.com/png/668288-200.png"
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
                src="https://img.icons8.com/cotton/2x/launch-rocket.png"
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
                src="https://img.icons8.com/cotton/2x/launch-rocket.png"
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
                src="https://img.icons8.com/cotton/2x/launch-rocket.png"
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
                src="https://webstockreview.net/images/clipart-rocket-rocket-landing-4.png"
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
                src="https://cdn0.iconfinder.com/data/icons/free-falcon-heavy-demo-mission-1/64/falcon-rocket-landing-land-512.png"
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
