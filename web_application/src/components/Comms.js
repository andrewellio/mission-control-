import React from "react";
import "./Comms.css";
import { useRocket } from "../api/Rocket";
import { primaryStyle } from "./Map";

const Comms = () => {
  const [rocket] = useRocket();
  return (
    <div className="Comms" style={primaryStyle}>
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
