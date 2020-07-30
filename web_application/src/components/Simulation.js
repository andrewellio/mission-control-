import React from 'react'
import { Link } from 'react-router-dom'

/**
 *  This page lets the user run Monte Carlo Simulation.
 *  This communicates with an external software using JSON.
 */
function Simulation() {
  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Simulation</h1>
      </div>
    </div>
  );
}

export default Simulation;
