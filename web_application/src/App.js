import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mission Control</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A template <code>Mission-Control-System</code>
        </p>
        <a
          className="App-link"
          href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </header>
    </div>
  );
}

export default App;
