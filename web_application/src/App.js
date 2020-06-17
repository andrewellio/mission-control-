import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <h1>Mission Control</h1>
        <div className="App-description">
          The mission control runs on a laptop in the field and displays data from the rocket. It can let the rocket know when the launch is immiment so the avionics can arm the parachute ejection charges. Mission control has a go / no go functionality, and integration with a Monte Carlo rocket simulation.
        </div>
        <p></p>
        <a
          className="App-link App-begin"
          href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Begin
        </a>
        <a
          className="App-link App-instructions"
          href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instructions
        </a>
      </div>
      <footer>
        <a
          className="App-link App-code"
          href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
          <i class="material-icons">code</i>
        </a>
      </footer>
    </div>
  );
}

export default App;
