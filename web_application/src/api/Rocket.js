import React, { createContext, useContext, useState } from "react";

const RocketContext = createContext({});
export const useRocket = () => useContext(RocketContext);

const Rocket = {
  velocity: "0",
  altitude: "0",
  phase: "0",
  wind: "",
  conditions: "clear",
  position: {
    lat: "-41.2870",
    long: "174.7701"
  },
  comms: []
};

export default function RocketProvider({ children }) {
  const [rocket, setRocket] = useState(Rocket);
  return (
    <RocketContext.Provider value={[rocket, setRocket]}>
      {children}
    </RocketContext.Provider>
  );
}
