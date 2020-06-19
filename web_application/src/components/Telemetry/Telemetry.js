import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import "./Telemetry.css";

function Telemetry(props) {
  return (
    <div className="Telemetry">
      <ReactSpeedometer
        width={200}
        height={200}
        currentValueText="Velocity (m/s)"
        value={200}
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
  );
}


export default Telemetry;
