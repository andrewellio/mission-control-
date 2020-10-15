import React from "react";
import "./Comms.css";
import { useRocket } from "../api/Rocket";

/**
 * This component represents the communications from the rocket.
 * There may be important messages, such as stage transitions,
 * that may be useful information to display to a user.
 */
const Comms = () => {
  const [rocket] = useRocket();

  return (
    <div className="Comms" style={styles.comms}>
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

/**
 * Each log is displayed as a table row.
 */
const Log = ({ log }) => {
  return (
    <tr>
      <td>{log}</td>
    </tr>
  );
};

const styles = {
  comms: {
    margin: "50px",
    marginTop: "0px",
    height: "80vh",
    minHeight: "1vh",
    maxHeight: "65vh",
    minWidth: "15vh",
    maxWidth: "90vh",
    width: "50%",
  },
};

export default Comms;
