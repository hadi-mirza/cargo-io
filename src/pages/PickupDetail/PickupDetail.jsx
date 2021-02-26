import React, { useEffect } from "react";
import requestService from "../../utils/requestService";
import mapPic from './map1.png'

const position = [43.6532, -79.3832];

function PickupDetail() {
  return (
    <div className="map">
      <h1>Pickup Details</h1>
      <img src={mapPic} />
      <br /><br />
      <h2>Pickup Status: Pending</h2>
    </div>
  );
}

export default PickupDetail;
