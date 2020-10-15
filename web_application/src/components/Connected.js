import React from "react";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import WifiIcon from "@material-ui/icons/Wifi";
import Cache from "../api/Cache";

/**
 * This component is a connectivity switch.
 * It takes to components as arguments,
 * Online - a component that requires a connection
 * Offline - a component that does not require a connection
 * We display one of these components depending on the internet connection.
 */
const Connected = ({ Online, Offline }) => {
  return <Cache Online={WifiIcon} Offline={WifiOffIcon} />;
};

export default Connected;
