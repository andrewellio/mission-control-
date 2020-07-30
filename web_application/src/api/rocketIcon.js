import L from "leaflet";

// A custom rocket icon for leaflet maps used on the Dashboard
const rocketIcon = new L.Icon({
  iconUrl: require("../assets/logo.png"),
  iconRetinaUrl: require("../assets/logo.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 40),
  className: "leaflet-div-icon"
});

export default rocketIcon;
