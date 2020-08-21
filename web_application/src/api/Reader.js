import React from "react";
import CSVReader from "react-csv-reader";
import { useRocket } from "../api/Rocket";

/**
 * We can point the reader index for each variable
 * These numbers represent the position of each element
 * in the CSV file.
 * e.g.
 * -----[CSV FILE]-----
 * --------------------
 * Velocity , Altitude, ...
 * 10, 20, ...
 * --------------------
 * 'velocity' has an index of 0
 */
//use "npm install --save react-csv-reader" to install react-csv-reader
const index = {
  velocity: 0,
  altitude: 1,
  phase: 2,
  wind: 3,
  conditions: 4,
  lat: 5,
  long: 6,
  comms: 7
};

const convertDataToRocket = e => {
  const lastRow = e.length - 2;
  const Rocket = {
    velocity: e[lastRow][index.velocity],
    altitude: e[lastRow][index.altitude],
    phase: e[lastRow][index.phase],
    wind: e[lastRow][index.wind],
    conditions: e[lastRow][index.conditions],
    position: {
      lat: e[lastRow][index.lat],
      long: e[lastRow][index.long]
    },
    comms: [e[lastRow][index.comms]]
  };
  return Rocket;
};

/**
 *  This utility class can read a CSV file from local storage.
 *  The user must specify the location of the file via an input,
 *  then it logs the contents of the file to the console.
 */

const Reader = props => {
  const [, setRocket] = useRocket();

  const onLoad = e => {
    setRocket(convertDataToRocket(e));
  };

  const onError = e => {
    console.err(e);
  };

  return (
    <>
      <CSVReader
        cssClass="csv-reader-input"
        label=""
        onFileLoaded={e => onLoad(e)}
        onError={error => onError(error)}
        inputId="ObiWan"
        inputStyle={{ color: "red" }}
      />
    </>
  );
};

export default Reader;
