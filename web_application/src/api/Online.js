import React, { createContext, useContext, useState, useEffect } from "react";

const OnlineContext = createContext({});
const useOnline = () => useContext(OnlineContext);

const checkInterval = 1000;

const OnlineProvider = ({ children }) => {
  const [online, setOnline] = useState(false);

  function run() {
    setOnline(isOnline);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      run();
    }, checkInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>
  );
};

const isOnline = () => {
  return navigator.onLine;
};

export default OnlineProvider;
export { useOnline };
