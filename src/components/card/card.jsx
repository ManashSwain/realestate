import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const card = ({item}) => {
  return (
    <>
      <div className="card">
        <Link to ={`/${item.id}`} className="imagecontainer">
         <img src={item.images} alt="roomimage" />
        </Link>
        <div className="textcontainer">
          <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="address">
            <img src="/pin.png" alt="pinimage" />
            <span>{item.address}</span>
          </p>
          <p className="price">${item.price}</p>
          <div className="bottom">
            <div className="features">
              <div className="feature">
                <img src="./bed.png" alt="bed-image" />
                <span>{item.bedroom} Bedroom</span>
              </div>
              <div className="feature">
                <img src="./bath.png" alt="bed-image" />
                <span>{item.bathroom} Bathroom</span>
              </div>
            </div>
            {/* <div className="icons">
              <div className="icon">
              <img src="./save.png" alt="save-image" />
              </div>
              <div className="icon">
              <img src="./chat.png" alt="chat-image" />
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
