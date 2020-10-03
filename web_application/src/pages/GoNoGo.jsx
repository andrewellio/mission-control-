import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function GoNoGo(){
    return(

      <div>
        <h1>Go/No Go</h1>
        <h3>Set Threshold Values</h3>
  
        <label for="angle">Launch Rod Angle:</label>
        <p>*Angle of attack after the rocket leaves the launch rail. <br /> High angle of attack - the angle of the airstream to the fins, can make a stable rocket, unstable. </p>
          <input //lanuchLatitude is CSV name
            type="int"
            placeholder="30 (degrees - default)"
            id="angle"
            //onChange={event => setLatitude(event.target.value)}
            />
            <br />
  
            <label for="railvelocity">Rocket Velocity Launch Rail:</label>
        <p>*Velocity of the rocket as it leaves the launch rail. <br /> Reported by openRocket and calculate the angle of attack yourself with some trig. </p>
          <input //lanuchLatitude is CSV name
            type="int"
            placeholder="(calculation OpenRocket - optional)"
            id="angle"
            //onChange={event => setLatitude(event.target.value)}
            />
            <br />
  
            <label for="windSpeed">Wind Speed:</label>
            <p>*Take into account the rocket and if it has relatively high thrust. </p> 
          <input //lanuchLatitude is CSV name
            type="int"
            placeholder="25 (k/hr - default)"
            id="angle"
            //onChange={event => setLatitude(event.target.value)}
            />
            <br />
            </div>

    );
}