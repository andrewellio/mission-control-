import React from "react";
import Timer from "react-compound-timer";
import "./Time.css";

/**
 *  This is the Time widget from the Dashboard.
 *  It used the rocket 'T-' convention from rocketry.
 *  'T-' represents time until launch
 *  'T+' represents time after the launch
 */
function Time() {
  return (
    <div className="Timer">
      <Timer initialTime={0} timeToUpdate={10} startImmediately={true}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <div>
            T+<span> </span>
            <Timer.Hours />:
            <Timer.Minutes />:
            <Timer.Seconds />
          </div>
        )}
      </Timer>
    </div>
  );
}

export default Time;
