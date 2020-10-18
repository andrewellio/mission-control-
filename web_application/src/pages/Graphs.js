import React, { useState } from "react";
import { Link } from "react-router-dom";
import Plot from "react-plotly.js";
import {CSVReader} from "react-papaparse"

/**
 *  This page displays the graphs using the data from the serial usb port.
 */
function Graphs() {

  const [Xvalue, setXvalue] = useState([]);
  const [Yvalue, setYvalue] = useState([]);

  const data = [
    {
      x: Xvalue,
      y: Yvalue,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
  ];

  const layout = {
    width: "50%",
    height: "50%",
    title: "Graph",
    xaxis: {
      title: {
        text: 'Time(s)',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Data(m)',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    },
    };

  const handleAdd = (newData) => {
    console.log(newData[1].data[1])

    for (let y = 1; y < newData.length; y++) {
      for (let x = 0; x < newData[y].data.length; x++) {

        if(x==0) {
          data[0].x.push(newData[y].data[x]);
          setXvalue([...Xvalue, newData[y].data[x]]);

        } else {
          data[0].y.push(newData[y].data[x]);
          setYvalue([...Yvalue, newData[y].data[x]]);
        }
        
      }      
    }

  };


  return (
    <div>
      <Link className="Instructions-back" to="/">
        <i className="material-icons">navigate_before</i>
      </Link>
      <div className="Landing-body">
        <h1>Graphs</h1>
        <Plot data={data} layout={layout} />
      <CSVReader 
  onDrop={handleAdd}
  noDrag
  style={{}}
  config={{}}
>
  <span>Click to upload.</span>
</CSVReader>

      </div>
    </div>
  );
}

export default Graphs;
