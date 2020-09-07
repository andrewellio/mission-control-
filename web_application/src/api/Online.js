import React, { createContext, useContext, useState, useEffect } from "react";

const OnlineContext = createContext();
const useOnline = useContext(OnlineContext);

const isOnline = () => {
  return navigator.onLine;
};

const OnlineProvider = ({ children }) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(isOnline());
  }, []);

  return (
    <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>
  );
};

export default OnlineProvider;
export { useOnline };
