import React from 'react';
import './Map.css'
import { Map, Marker, Popup, TileLayer, Circle} from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet';
import rocketIcon from '../Icons';

/**
 *  This is the map widget for the Dashboard page.
 *  We use the open-source Leaflet JavaScript library.
 *  This uses the OpenStreetMap API to render a topographical map.
 */
const MapPage = props => {
  const position = [props.position.lat, props.position.long]
  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    <Marker position={position} icon={rocketIcon}>
       <Popup>
        <h1>Launch Site</h1>
        Salamanca Road,
        <br/>
        Kelburn,
        <br/>
        Wellington 6012
       </Popup>
     </Marker>
     <Circle center={position} radius={200}>
       <Popup>
        <h1>Landing Zone</h1>
        <b>200</b> simulations were run
        <br/>
        <i>N.B we use Monte Carlo situations</i>
       </Popup>
     </Circle>
    </Map>
  );
}

export default MapPage;
