import React from "react";
import "./Comms.css";
import { useRocket } from "../api/Rocket";

const Comms = () => {
  const { data } = useRocket();
  return (
    <div className="Comms">
      <table>
        <tr>
          <th>Time</th>
          <th>Code</th>
          <th>Message</th>
        </tr>
        {data.comms.map(i => (
          <Log log={i} />
        ))}
      </table>
    </div>
  );
};

const Log = ({ log }) => {
  return (
    <tr>
      <td>{log.time}</td>
      <td>{log.code}</td>
      <td>{log.message}</td>
    </tr>
  );
};

export default Comms;
