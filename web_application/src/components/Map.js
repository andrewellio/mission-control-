import React from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  WMSTileLayer
} from "react-leaflet";
import RocketIcon from "./RocketIcon";
import { useRocket } from "../api/Rocket";
import Cache from "../api/Cache";
import L from "leaflet";
/**
 *  This is the map widget for the Dashboard page.
 *  We use the open-source Leaflet JavaScript library.
 *  This uses the OpenStreetMap API to render a topographical map.
 */

export default function MapPage() {
  return <Cache Online={Online} Offline={Offline} />;
}

function Online() {
  const [rocket] = useRocket();
  const position = [rocket.position.lat, rocket.position.long];
  const options = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  };
  return (
    <Map style={styles.map} center={position} zoom={16}>
      <TileLayer {...options} />
      <Marker position={position} icon={RocketIcon}>
        <Popup>
          <h1>Launch Site</h1>
          Salamanca Road,
          <br />
          Kelburn,
          <br />
          Wellington 6012
        </Popup>
      </Marker>
      <Circle center={position} radius={200}>
        <Popup>
          <h1>Landing Zone</h1>
          <b>200</b> simulations were run
          <br />
          <i>N.B we use Monte Carlo situations</i>
        </Popup>
      </Circle>
    </Map>
  );
}

function Offline() {
  const [rocket] = useRocket();
  const position = [rocket.position.lat, rocket.position.long];
  const options = {
    url: `http://localhost/cgi-bin/map?`,
    crs: L.CRS.EPSG4326,
    format: "image/png",
    layers: "topographical"
  };

  return (
    <Map style={styles.map} center={position} zoom={16}>
      <WMSTileLayer {...options} />
      <Marker position={position} icon={RocketIcon}>
        <Popup>
          <h1>Launch Site</h1>
          Salamanca Road,
          <br />
          Kelburn,
          <br />
          Wellington 6012
        </Popup>
      </Marker>
      <Circle center={position} radius={200}>
        <Popup>
          <h1>Landing Zone</h1>
          <b>200</b> simulations were run
          <br />
          <i>N.B we use Monte Carlo situations</i>
        </Popup>
      </Circle>
    </Map>
  );
}

const styles = {
  map: {
    margin: "50px",
    marginTop: "0px",
    height: "80vh",
    minHeight: "1vh",
    maxHeight: "65vh",
    minWidth: "15vh",
    maxWidth: "90vh",
    width: "50%"
  }
};
