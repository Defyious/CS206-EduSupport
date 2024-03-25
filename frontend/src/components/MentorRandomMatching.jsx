import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import './CSS/RandomMatchingPage.css'; // Your dedicated CSS file
import { getUserDetails } from './utils';

const ToggleSwitch = ({ onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden-checkbox"
      />
      <div className="slider round"></div>
    </label>
  );
};

const MentorRandomMatching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [online, setOnline] = useState(false); // State to track mentor's online status

  const handleToggleChange = async (isChecked) => {
    try {
      const user = getUserDetails();
      const url = 'http://localhost:8080/api/status/update/' + user.userID.id;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      setOnline(isChecked); // Update online status state
      alert(isChecked ? "You will appear online to mentees" : "You will appear offline to mentees");
    } catch (error) {
      console.error('Toggle Switch Error:', error);
      alert('Toggle switch failed.');
    }
  };

  useEffect(() => {
    let intervalId;
    if (online) {
      setIsLoading(true); 
      intervalId = setInterval(async () => {
        try {
          const user = getUserDetails();
          console.log(user);
          const url = `http://localhost:8080/api/matching/mentor/${user.userID.id}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok.');
          const data = await response.json();
          console.log(data);

          const questionUrl = `http://localhost:8080/api/post/question/${data.questionId}`;
          const questionResponse = await fetch(questionUrl);
          if (!questionResponse.ok) throw new Error('Question API: Network response was not ok.');
          const questionData = await questionResponse.json();
          console.log('Question API Response:', questionData);
          setIsLoading(false);

          // Display pop-up with accept or decline buttons
          const acceptQuestion = window.confirm('You have received a question. Do you want to accept it?');
          if (acceptQuestion) {
            // Handle accept action
            console.log('Question accepted');

            // Call the API to respond to the question
            const responseUrl = `http://localhost:8080/api/matching/mentor/response/${user.userID.id}?response=accept`;
            const responses = await fetch(responseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              }, // Assuming 'accept' is the response
            });
            // if (!response.ok) throw new Error('Response API: Network response was not ok.');
            // const responseData = await responses.json();
            console.log('Response API Response:', responses);
            clearInterval(intervalId); // Clear the interval on successful response

          } else {
            // Handle decline action
            console.log('Question declined');
          }
        } catch (error) {
          console.error('API Call Error:', error);
        }
      }, 2000); // Call API every 2 seconds
    }
    return () => clearInterval(intervalId); // Cleanup interval on component unmount or online status change
  }, [online]);

  return (
    <>
      <MyNavbar />
      <div className="random-matching-page">
        <div className="loading-box">
          <ToggleSwitch onChange={handleToggleChange} />
        </div>
        {isLoading && <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
      </div>
    </>
  );
};

export default MentorRandomMatching;