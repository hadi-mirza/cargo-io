import React, { useEffect } from "react";
import requestService from "../../utils/requestService";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapPic from './map1.png'

const position = [43.6532, -79.3832];

function PickupDetail() {
  return (
    <div className="map">
      <h1>Pickup Details</h1>
      <img src={mapPic} />
      <br /><br />
      <h2>Pickup Status: Pending</h2>
      {/* <div className="mapdiv">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div> */}
    </div>
  );
}

export default PickupDetail;
