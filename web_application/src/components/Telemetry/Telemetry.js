import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import "./Telemetry.css";

/**
 *  This is the Telemetry widget for the Dashboard.
 *  It renders the current veloctiy and altitude.
 *  These are passed to the component as parameters.
 */
const Telemetry = props => {
  return (
    <div className="Telemetry">
      <div className="Velocity">
        <ReactSpeedometer
          width={200}
          height={200}
          currentValueText="Velocity (m/s)"
          value={props.velocity}
          minValue={0}
          maxValue={500}
          segments={5}
          segmentColors={[
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "yellow",
            "red"
          ]}
        />
      </div>
      <div className="Altitude">
        <ReactSpeedometer
            width={200}
            height={200}
            currentValueText="Altitude (m)"
            value={props.altitude}
            minValue={0}
            maxValue={500}
            segments={5}
            segmentColors={[
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF",
              "yellow",
              "red"
            ]}
          />
      </div>
    </div>
  );
}


export default Telemetry;
