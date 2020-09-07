import React, {createContext, useContext, useState, useEffect} from "react";

const OnlineContext = createContext({});
const useOnline = () => useContext(OnlineContext);

const OnlineProvider = ({children}) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(isOnline());
  }, []);

  return (
    <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>
  );
};

const isOnline = () => {
  return navigator.onLine;
};

export default OnlineProvider;
export {useOnline};
