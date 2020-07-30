import React from "react";
import logo from "../assets/logo.png";
import "./Landing.css";
import { Link } from "react-router-dom";

/**
 *  This is the initial page the user is greeted with.
 *  It offers instructions for beginners, and;
 *  a link to the repository for technical users.
 */
function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="logo" />
      </header>
      <div className="Landing-body">
        <h1>Mission Control</h1>
        <div className="Landing-description">
          The mission control runs on a laptop in the field and displays data
          from the rocket. It can let the rocket know when the launch is
          immiment so the avionics can arm the parachute ejection charges.
          Mission control has a go / no go functionality, and integration with a
          Monte Carlo rocket simulation.
        </div>
        <p></p>
        <Link className="Landing-begin" to="/Dashboard">
          Begin
        </Link>
        <Link className="Landing-link Landing-instructions" to="/Instructions">
          Instructions
        </Link>
      </div>
      <footer>
        <a
          className="Landing-link Landing-code"
          href="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group12/group-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
          <i className="material-icons">code</i>
        </a>
      </footer>
    </div>
  );
}

export default Landing;
