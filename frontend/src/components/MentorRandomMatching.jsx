// RandomMatchingPage.jsx
import React, { useState } from 'react';
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

  const handleToggleChange = async (isChecked) => {
    try {
      const user = getUserDetails();
      const response = await fetch('http://localhost:8080/api/status/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: user.userID, isOnline: isChecked }),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      alert(isChecked ? "You will appear online to mentees" : "You will appear offline to mentees");
    } catch (error) {
      console.error('Toggle Switch Error:', error);
      alert('Toggle switch failed.');
    }
  };

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