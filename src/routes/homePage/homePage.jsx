import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/searchBar';

const homePage = () => {
  return (
    <>
    <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
          <h1 className='title'>Find Real Estate & get Your Dream Place</h1>
          <p>Introducing RealEstate Simplifying real estate transactions. Find, buy or rent seamlessly with smart search, expert guidance, and secure transactions. Stay updated, connect effortlessly, and make informed decisions. Your ultimate real estate partner.</p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>6+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1600+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src="../.././bg.png" alt="background-image" />
        </div>
    </div>
    </>
  )
}

export default homePage
