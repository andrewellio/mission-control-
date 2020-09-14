import L from "leaflet";

// A custom rocket icon for leaflet maps used on the Dashboard
const RocketIcon = new L.Icon({
  iconUrl: require("../assets/logo.png"),
  iconRetinaUrl: require("../assets/logo.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 40),
  style: { background: "transparent", borderStyle: "none" }
});

export default RocketIcon;
