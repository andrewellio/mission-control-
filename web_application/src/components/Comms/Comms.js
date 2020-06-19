import React from 'react'
import './Comms.css'

function Comms() {
  return (
    <div className="Comms">
      <h3>Comms</h3>
      <table>
        <tr>
           <th>Time</th>
           <th>Code</th>
           <th>Message</th>
        </tr>
        <tr>
           <td>T-00:10</td>
           <td>200</td>
           <td>Launch sequence initiated</td>
        </tr>
        <tr>
           <td>T+00:00</td>
           <td>200</td>
           <td>Launch!</td>
        </tr>
        <tr>
           <td>T+00:10</td>
           <td>200</td>
           <td>Engine Cut Off</td>
        </tr>
        <tr>
           <td>T+00:20</td>
           <td>200</td>
           <td>Apogee</td>
        </tr>
        <tr>
           <td>T+00:30</td>
           <td>200</td>
           <td>Ejection</td>
        </tr>
        <tr>
           <td>T+00:40</td>
           <td>200</td>
           <td>Recovery</td>
        </tr>
      </table>
    </div>
  );
}

export default Comms;
