import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'


const pin = ({ item }) => {
  const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow 
});
  return (
    <>
      <Marker icon={icon} position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupcontainer">
            <img src={item.images} alt="property-image" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span className="bed">{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};

export default pin;
