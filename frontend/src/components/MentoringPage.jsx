// MentoringPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyNavbar from './Navbar';
//import './CSS/PageStyles.css'; // Your CSS file for the page

const MentoringPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
        <MyNavbar />
      <h2>Mentoring Options</h2>
      <div className="buttons-container">
        <button onClick={() => navigate('/random-matching')}>Random Matching</button>
        <button onClick={() => navigate('/selective-matching')}>Selective Matching</button>
      </div>
    </div>
  );
};

export default MentoringPage;
