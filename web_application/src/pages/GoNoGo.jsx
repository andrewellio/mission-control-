import { TextareaAutosize } from '@material-ui/core';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function GoNoGo(){

    const[launchRodAngleValue, setLaunchRodAngle] = useState('');
    const[rocketVelocityLaunchRailValue, setRocketVelocityLaunchRail] = useState('');
    const[windSpeedValue, setWindSpeed] = useState('');

    const[launchRodAngleThreshold, setLaunchRodAngleThreshold] = useState('');
    const[rocketVelocityLaunchRailThreshold, setRocketVelocityLaunchRailThreshold] = useState('');
    const[windSpeedThreshold, setWindSpeedThreshold] = useState('');

    return(

      <div style={styles.title}>

        <Link style={styles.backLinkStyle} to="/Dashboard">
          <i style={styles.back} className="material-icons">
            navigate_before
          </i>
        </Link>

        <h1>Go/No Go</h1>
        <h3>Set Threshold Values</h3>
  
        <label for="angle">Launch Rod Angle:</label>
        <p>*Angle of attack after the rocket leaves the launch rail. <br /> High angle of attack - the angle of the airstream to the fins, can make a stable rocket, unstable. </p>
          <input 
            type="int"
            placeholder="Threshold (e.g.30 degrees)"
            id="tAngle"
            style={styles.inputBox}
            onChange={event => setLaunchRodAngleThreshold(event.target.value)}
            />

<         input 
            type="int"
            placeholder="Realtime Value"
            id="rAngle"
            style={styles.inputBox}
            onChange={event => setLaunchRodAngle(event.target.value)}
            />
   
            <br />

            <div>
            
              {launchRodAngleThreshold > launchRodAngleValue ? <label style={styles.goStyle}>Go</label> 
              : <label style={styles.noGoStyle}>No Go</label>}
              
            </div>

            <br /> 
            
  
            <label for="railvelocity">Rocket Velocity Launch Rail:</label>
        <p>*Velocity of the rocket as it leaves the launch rail. <br /> Reported by openRocket and calculate the angle of attack yourself with some trig. </p>
          <input //lanuchLatitude is CSV name
            type="int"
            placeholder="Threshold"
            id="tRailvel"
            style={styles.inputBox}
            onChange={event => setRocketVelocityLaunchRailThreshold(event.target.value)}
            />

            <input 
            type="int"
            placeholder="Realtime Value"
            id="rRailvel"
            style={styles.inputBox}
            onChange={event => setRocketVelocityLaunchRail(event.target.value)}
            />
            
            <br />

            <div>
              {rocketVelocityLaunchRailThreshold > rocketVelocityLaunchRailValue ? <label style={styles.goStyle}>Go</label> 
              : <label style={styles.noGoStyle}>No Go</label>}
            </div>

            <br />
  
            <label for="windSpeed">Wind Speed:</label>
            <p>*Take into account the rocket and if it has relatively high thrust. </p> 
          <input //lanuchLatitude is CSV name
            type="int"
            placeholder="Threshold (e.g. 25 (k/hr))"
            id="tWind"
            style={styles.inputBox}
            onChange={event => setWindSpeedThreshold(event.target.value)}
            />

            <input 
            type="int"
            placeholder="Realtime Value"
            id="rWind"
            style={styles.inputBox}
            onChange={event => setWindSpeed(event.target.value)}
            />

            <br />

            <div>
              {windSpeedThreshold > windSpeedValue ? <label style={styles.goStyle}>Go</label> 
              : <label style={styles.noGoStyle}>No Go</label>}
            </div>

            <br />

            </div>

    );
}

const styles = {
  title: {
    margin: 'auto',
    width: 600,
    border: 3,
    padding: 10,
    paddingLeft: 100,
    textAlign: 'center',
  },

  inputBox: {
    position: 'relative',
    bottom: 20,
  },

  backLinkStyle: {
    position: 'relative',
    left: -780,
  },

  goStyle: {
    color: '#008000',
   
  },

  noGoStyle: {
    color: '#FF0000',
    
  }
}