import React from 'react'
import { Link } from 'react-router-dom'

function Weather() {
  return (
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Weather</h1>
      </div>
    </div>
  );
}

export default Weather;
