import React from 'react'
import './Phase.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function Phase() {
  return (
    <div className="Phase">
      <ProgressBar
         percent={0}
         filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
       >
         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://static.thenounproject.com/png/668288-200.png"
               />
             <h5>Stationary</h5>
             </div>
           )}
         </Step>

         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://img.icons8.com/cotton/2x/launch-rocket.png"
                />
              <h5>Launch</h5>
             </div>
           )}
         </Step>
         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://img.icons8.com/cotton/2x/launch-rocket.png"
                />
                <h5>Ascent</h5>
             </div>
           )}
         </Step>
         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://img.icons8.com/cotton/2x/launch-rocket.png"
                />
              <h5>Epogee</h5>
             </div>
           )}
         </Step>
         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://webstockreview.net/images/clipart-rocket-rocket-landing-4.png"
               />
             <h5>Ejection</h5>
             </div>
           )}
         </Step>
         <Step transition="scale">
           {({ accomplished }) => (
             <div>
               <img
                 style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                 width="30"
                 src="https://cdn0.iconfinder.com/data/icons/free-falcon-heavy-demo-mission-1/64/falcon-rocket-landing-land-512.png"
               />
             <h5>Recovery</h5>
             </div>
           )}
         </Step>
       </ProgressBar>
    </div>
  );
}

export default Phase;
