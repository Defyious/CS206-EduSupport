// RandomMatchingPage.jsx
import React from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import './CSS/RandomMatchingPage.css'; // Your dedicated CSS file

const RandomMatching = () => {
  return (
    <>
      <MyNavbar />
      <div className="random-matching-page">
        <div className="loading-box">
          <Spinner animation="border" size="xl" className="loading-spinner" />
          <p className="motivational-quote">"Age is just a number <br />Jail is just a room <br />Don't let your dreams be dreams <br />JUST DO IT!"<br /> - Jevon Tan Jing Hong</p>
        </div>
      </div>
    </>
  );
};

export default RandomMatching;



