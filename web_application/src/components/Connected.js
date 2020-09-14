import React from "react";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import WifiIcon from "@material-ui/icons/Wifi";
import Cache from "../api/Cache";

const Connected = ({ Online, Offline }) => {
  return <Cache Online={WifiIcon} Offline={WifiOffIcon} />;
};

export default Connected;
