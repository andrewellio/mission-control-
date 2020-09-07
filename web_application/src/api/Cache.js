import React from "react";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import {useOnline} from "./Online";

const Cache = ({Child}) => {
  const online = useOnline();
  return <>{online ? <Child /> : <Cached />}</>;
};

const Cached = () => {
  return (
    <>
      <p>
        You are offline!
        <WifiOffIcon />
      </p>
    </>
  );
};

export default Cache;
