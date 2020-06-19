import React from 'react';
import './Map.css'
import { Map, Marker, Popup, TileLayer, Circle} from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet';
import * as parkData from "./data/test.json";
import rocketIcon from '../Icons';

const position = [-41.2870, 174.7701];

export default function MapPage() {
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
