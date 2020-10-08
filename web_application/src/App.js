import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
import Simulation from "./pages/Simulation";
import Weather from "./pages/Weather";
import Graphs from "./pages/Graphs"

/**
 *  This page house the single page application (SPA).
 *  We use the DOM to control routing between pages.
 */
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Instructions">
          <Instructions />
        </Route>
        <Route path="/Weather">
          <Weather />
        </Route>
        <Route path="/Simulation">
          <Simulation />
        </Route>
        <Route path="/Home">
          <Landing />
        </Route>
        <Route path="/Graphs">
          <Graphs />
        </Route>
        <Redirect from="/" to="/Home" />
      </Switch>
    </Router>
  );
};

export default App;
