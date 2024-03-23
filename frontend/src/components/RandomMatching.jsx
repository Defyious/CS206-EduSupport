import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import './CSS/RandomMatchingPage.css';

const RandomMatching = () => {
  const [matchStatus, setMatchStatus] = useState('Searching for a mentor...');
  const navigate = useNavigate();
  const qnId = 123; // The question ID for which you are seeking a mentor, replace with actual ID

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call the API every 5 seconds to check for a mentor
      fetch(`http://localhost:8080/api/matching/mentee/${qnId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data === 'Found Mentor') {
            clearInterval(intervalId); // Stop the interval if a mentor is found
            navigate('/call'); // Redirect to the /call page
          } else {
            setMatchStatus('Awaiting Mentor Response...'); // Update status message
          }
        })
        .catch((error) => {
          console.error('Error during fetch:', error);
          setMatchStatus('An error occurred while searching for a mentor.');
        });
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigate, qnId]);

  return (
    <>
      <MyNavbar />
      <div className="random-matching-page">
        <div className="loading-box">
          <Spinner animation="border" size="xl" className="loading-spinner" />
          <p className="motivational-quote">"Age is just a number <br />Jail is just a room <br />Don't let your dreams be dreams <br />JUST DO IT!"<br /> - Jevon Tan Jing Hong</p>
          <p>{matchStatus}</p>
        </div>
      </div>
    </>
  );
};

export default RandomMatching;
