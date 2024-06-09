import React from 'react';
import './singlePage.scss';
import Slider from '../../components/Slider/slider';
import {singlePostData} from '../../library/dummyData';
import {userData} from '../../library/dummyData';
import Map from '../../components/Map/map'

const singlePage = () => {
  return (
    <>
    <div className="singlePage">
        <div className="details">
              <div className="wrapper">
                 <Slider images={singlePostData.images}/>
                 <div className="info">
                  <div className="top">
                    <div className="information">
                      <h1>{singlePostData.title}</h1>
                      <div className="address">
                        <img src="./pin.png" alt="pin-image" />
                        <span>{singlePostData.address}</span>
                      </div>
                      <p className='price'>
                        $ {singlePostData.price}
                      </p>
                    </div>
                    <div className="ownership">
                      <img src={userData.img} alt="user-image" />
                      <span>{userData.name}</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <p>{singlePostData.description}</p>
                  </div>
                 </div>
              </div>
        </div>
        <div className="features">
           <div className="wrapper">
                <div className="general">
                <p className='title'>General</p>
                  <div className="listVertical">
                    <div className="feature">
                      <img src="/utility.png" alt="utilityimage" />
                      <div className="featureText">
                        <span>Utilities</span>
                        <p>Renter is responsible</p>
                      </div>
                      </div>
                      <div className="feature">
                      <img src="/pet.png" alt="petimage" />
                      <div className="featureText">
                        <span>Pet Policy</span>
                        <p>Pets Allowed</p>
                      </div>
                      </div>
                      <div className="feature">
                      <img src="/fee.png" alt="feeimage" />
                      <div className="featureText">
                        <span>Property Fees</span>
                        <p>Must have 3x the rent in total household income</p>
                      </div>
                      </div>
                  </div>
                </div>
                <p className='title'>Sizes</p>
                <div className="sizes">
                  <div className="size">
                    <img src="/size.png" alt="sizeimage" />
                    <span>80sqft</span>
                  </div>
                  <div className="size">
                    <img src="/bed.png" alt="bedimage" />
                    <span>2 beds</span>
                  </div>
                  <div className="size">
                    <img src="/bath.png" alt="bathroomimage" />
                    <span>1 bathroom</span>
                  </div>
                </div>
                <p className='title'>Nearby Places</p>
                <div className="nearby">
                  <div className="listHorizontal">
                  <div className="feature">
                      <img src="/school.png" alt="schoolimage" />
                      <div className="featureText">
                        <span>School</span>
                        <p>250m away</p>
                      </div>
                      </div>
                      <div className="feature">
                      <img src="/fee.png" alt="feeimage" />
                      <div className="featureText">
                        <span>Bus Stop</span>
                        <p>100m away</p>
                      </div>
                      </div>
                      <div className="feature">
                      <img src="/fee.png" alt="feeimage" />
                      <div className="featureText">
                        <span>Restaurant</span>
                        <p>200m away</p>
                      </div>
                      </div>
                  </div>
                </div>
                <div className="location">
                <p className='title'>Location</p>
                  <div className="mapContainer">
                    <Map items={[singlePostData]}/>
                  </div>
                  <div className="buttons">
                    <button><img src="/chat.png" alt="chaticon" />Send a message</button>
                    <button><img src="/save.png" alt="chaticon" />Save the place</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default singlePage
