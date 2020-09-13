import React from "react";
import "./Comms.css";
import { useRocket } from "../api/Rocket";
import {serialport, prototype } from "serialport"

const Comms = () => {
  const [rocket] = useRocket();
  const SerialPort = serialport.SerialPort;
  const port = new SerialPort('COM1',{
    baudrate: 9600,
    parser: serialport.parsers.readline("\n")
  });

  function read(){

  }

  function write (data) {
    port.write(data)
    console.log(data)
  };

  return (
    <div className="Comms">
      <table>
        <thead>
          <tr>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {rocket.comms.map((log, i) => (
            <Log key={i} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Log = ({ log }) => {
  return (
    <tr>
      <td>{log}</td>
    </tr>
  );
};

export default Comms;
