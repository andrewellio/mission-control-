import React, { createContext, useContext } from "react";
import data from "../data/rocket.json";

const RocketContext = createContext({});
export const useRocket = () => useContext(RocketContext);

export default function RocketProvider({ children }) {
  return (
    <RocketContext.Provider value={{ data }}>{children}</RocketContext.Provider>
  );
}
