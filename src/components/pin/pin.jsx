import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const pin = ({ item }) => {
  return (
    <>
      <Marker position={[item.latitude, item.longitude]}>
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
