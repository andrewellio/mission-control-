import React, {useState, useEffect} from "react";
import WifiOffIcon from "@material-ui/icons/WifiOff";

const Cache = ({Child}) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(isOnline());
  }, []);

  return <>{online ? <Child /> : <Cached />}</>;
};

const isOnline = () => {
  return navigator.onLine;
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
