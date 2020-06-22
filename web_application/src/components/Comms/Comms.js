import React from 'react'
import './Comms.css'

const Comms = props => {
  return (
    <div className="Comms">
      <table>
        <tr>
          <th>Time</th>
          <th>Code</th>
          <th>Message</th>
        </tr>
        {
          props.comms.map( i => {
              return (
                <tr>
                  <td>{i.time}</td>
                  <td>{i.code}</td>
                  <td>{i.message}</td>
                </tr>
              )
            }
          )
        }
      </table>
    </div>
  );
}

const log = comms => { comms.map(function (com) {
      return (
        <div>{com.time}</div>
      )
  })
}

export default Comms;
