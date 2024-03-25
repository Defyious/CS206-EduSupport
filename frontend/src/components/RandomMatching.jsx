import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import './CSS/RandomMatchingPage.css';
import { getUserDetails, getQuestionId } from './utils';

const RandomMatching = () => {
  const [matchStatus, setMatchStatus] = useState('Searching for a mentor...');
  const navigate = useNavigate();
  const menteeId = getUserDetails().userID;
  const questionId = getQuestionId(); // The question ID for which you are seeking a mentor, replace with actual ID

  useEffect(() => {
    const requestMentor = async () => {
      // If you need to get the mentee ID from userDetails

      try {
        const response = await fetch(`http://localhost:8080/api/matching/mentee/randomMentor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ menteeId, questionId }),
        });

        if (!response.ok) throw new Error('Request for mentor failed.');

        const result = await response.json();
        if (result === 'Question accepted by a mentor.') {
          localStorage.setItem('questionId', questionId); // Store questionId in localStorage to use later
          navigate('/call'); // Navigate to call page if mentor is found
        } else {
          setMatchStatus(result);
        }
      } catch (error) {
        console.error('Error:', error);
        setMatchStatus('An error occurred while searching for a mentor.');
      }
    };

    // Call requestMentor function when the component loads
    requestMentor();
  }, [navigate, questionId, menteeId]);

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
