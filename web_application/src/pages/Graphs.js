import React from 'react'
import { Link } from 'react-router-dom'
import Plot from 'react-plotly.js';


/**
 *  This page displays the graphs using the data from the serial usb port.
 */
function Graphs() {


  var data = [{
    x: [1, 2, 3, 4],
    y: [2, 4, 6, 8],
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'red'},
  }];
  
  var layout = {
    width: '50%', height: '50%', title: 'Test Graph'
  };





  return (
    
    <div>
      <Link className="Instructions-back" to="/"><i className="material-icons">navigate_before</i></Link>
      <div className="Landing-body">
        <h1>Graphs</h1>
      <Plot
        data={data}
        layout={layout}
      />      
      </div>
    </div>
  );
}

export default Graphs;
