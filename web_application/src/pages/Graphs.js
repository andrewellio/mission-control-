import React, { useState } from "react";
import { Link } from "react-router-dom";
import Plot from "react-plotly.js";

/**
 *  This page displays the graphs using the data from the serial usb port.
 */
function Graphs() {
  /*const [data, setData] = useState([
    {
      x: [1, 2, 3, 4],
      y: [1, 2, 3, 4],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
  ]);*/
  const [Xvalue, setXvalue] = useState([1, 2, 3, 4]);
  const [Yvalue, setYvalue] = useState([1, 2, 3, 4]);

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
    title: "Test Graph",
  };

  const handleAdd = () => {
    console.log("data");
    console.log(data);

    console.log("data[0].x");
    console.log(data[0].x);

    console.log("data[0].y");
    console.log(data[0].y);

    const newDataX = Math.round(Math.random() * 10);
    const newDataY = Math.round(Math.random() * 10);

    data[0].x.push(newDataX);
    data[0].y.push(newDataY);

    setXvalue([...Xvalue, newDataX]);

    setYvalue([...Yvalue, newDataX]);

    console.log("data[0].x");
    console.log(data[0].x);

    console.log("data[0].y");
    console.log(data[0].y);
  };

  return (
    <div>
      <Link className="Instructions-back" to="/">
        <i className="material-icons">navigate_before</i>
      </Link>
      <div className="Landing-body">
        <h1>Graphs</h1>
        <Plot data={data} layout={layout} />
        <button onClick={handleAdd}>Add Data</button>
      </div>
    </div>
  );
}

export default Graphs;
