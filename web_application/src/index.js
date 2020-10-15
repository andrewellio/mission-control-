import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RocketProvider from "./api/Rocket";
import OnlineProvider from "./api/Online";
import WeatherProvider from "./api/Weather";

ReactDOM.render(
  <Contexts>
    <App />
  </Contexts>,
  document.getElementById("root")
);

/**
 * This returns a component that has the contexts provided.
 * These contexts must be provided in a specific order to behave properly.
 */
function Contexts({ children }) {
  return (
    <OnlineProvider>
      <WeatherProvider>
        <RocketProvider>{children}</RocketProvider>
      </WeatherProvider>
    </OnlineProvider>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
