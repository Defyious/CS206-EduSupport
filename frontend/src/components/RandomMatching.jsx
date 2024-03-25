import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import './CSS/RandomMatchingPage.css';
import { getUserDetails, getQuestionId } from './utils';

const RandomMatching = () => {
  const [matchStatus, setMatchStatus] = useState('Searching for a mentor...');
  const navigate = useNavigate();
  const menteeId = getUserDetails().userID.id;
  const questionId = getQuestionId(); // The question ID for which you are seeking a mentor, replace with actual ID

  useEffect(() => {
    const requestMentor = async () => {
      const queryParams = new URLSearchParams({ menteeId, questionId }).toString();
      const url = `http://localhost:8080/api/matching/mentee/randomMentor?${queryParams}`;
      try {
        const response = await fetch(url, {
          method: 'POST'
        });

        if (!response.ok) throw new Error(`Request for mentor failed: ${response.statusText}`);

        const result = await response.text(); // Use .text() if the response is plain text and not JSON
        if (result === 'Question accepted by a mentor.') {
          navigate('/call'); // Navigate to call page if mentor is found
        } else {
          setMatchStatus(result);
        }
      } catch (error) {
        console.error('Error:', error);
        setMatchStatus('An error occurred while searching for a mentor.');
      }
    };

    requestMentor();
  }, [menteeId, questionId, navigate]);

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
