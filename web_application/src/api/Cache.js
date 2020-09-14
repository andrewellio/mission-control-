import React from "react";
import { useOnline } from "./Online";

const Cache = ({ Online, Offline }) => {
  const online = useOnline();
  return online ? <Online /> : <Offline />;
};

export default Cache;
