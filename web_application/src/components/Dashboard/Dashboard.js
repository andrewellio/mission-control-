import React from 'react'
import MapPage from '../Map'
import Telemetry from '../Telemetry'
import './Dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Link className="Dashboard-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <MapPage></MapPage>
      <Telemetry value="100"></Telemetry>
    </div>
  );
};

export default Dashboard;
