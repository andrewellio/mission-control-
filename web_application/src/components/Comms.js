import React from "react";
import "./Comms.css";
import { useRocket } from "../api/Rocket";

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
    width: "50%"
  }
};

export default Comms;
