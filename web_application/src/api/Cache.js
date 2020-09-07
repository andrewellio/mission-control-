import React, { useState, useEffect } from "react";

const Cache = ({ Child }) => {
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
  return <h1>Offline!</h1>;
};

export default Cache;
