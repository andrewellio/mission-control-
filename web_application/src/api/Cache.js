import React from "react";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import { useOnline } from "./Online";

const Cache = ({ Online, Offline }) => {
  const online = useOnline();
  return (
    <>
      {online ? (
        <Online />
      ) : (
        <>
          {" "}
          <WifiOffIcon />
          <Offline />
        </>
      )}
    </>
  );
};

export default Cache;
