import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/Selection.css";

const SelectionPage = () => {
  let navigate = useNavigate();

  const handleMentee = () => {
    navigate('/mentee-form');
  };

  const handleMentor = () => {
    navigate('/mentor-form');
  };

  return (
    <div className="selection-container">
      <div className="selection-content">
        <h1>Are you a mentor or a mentee?</h1>
        <div className="button-container">
          <button onClick={handleMentee}>Mentee</button>
          <button onClick={handleMentor}>Mentor</button>
        </div>
      </div>
    </div>
  );
};


export default SelectionPage;

