import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 } from "uuid";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
import Simulation from "./pages/Simulation";
import Weather from "./pages/Weather";
import GoNoGo from "./pages/GoNoGo";

/**
 *  This page house the single page application (SPA).
 *  We use the DOM to control routing between pages.
 */
export default function App() {
  return (
    <Router>
      <Switch>
        {pages.map((page) => (
          <Route key={v4()} path={page.path} component={page.component} />
        ))}
        <Redirect from="/" to={defaultPage} />
      </Switch>
    </Router>
  );
}

/**
 * This stores the paths and their components for the router.
 * Paths or there components can easily be added or refactored here.
 */
const pages = [
  { path: "/Home", component: Landing },
  { path: "/Dashboard", component: Dashboard },
  { path: "/Instructions", component: Instructions },
  { path: "/Weather", component: Weather },
  { path: "/Simulation", component: Simulation },
  { path: "/GoNoGo", component: GoNoGo },
];

/**
 * To avoid hardcoding a potentially stale router.
 * We specify the first page as the default.
 */
const defaultPage = pages[0].path;
