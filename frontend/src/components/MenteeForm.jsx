import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/FormStyles.css";

const educationLevels = [
  'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
  'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
  'JC 1', 'JC 2'
];

const MenteeForm = () => {
  const [menteeInfo, setMenteeInfo] = useState({
    username: '',
    educationLevel: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenteeInfo({ ...menteeInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const menteeData = {
      username: menteeInfo.username,
      educationLevel: menteeInfo.educationLevel,
      isPremium: 'true', // or 'true', as per your business logic
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/user/register/mentee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menteeData),
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
      //const data = await response.json();

      const userDetails = {
        //accessToken: "Bearer " + user.accessToken,
        username: menteeInfo.username,
        role: 'mentee',
      };
  
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      //console.log('accessToken:', userDetails.accessToken);
      console.log('Username:', userDetails.username);
      console.log('Role:', userDetails.role);
    
      alert('Signup successful!');
      navigate('/home');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      alert('Signup failed.');
    }
  };
  

  return (
    <div className="form-container">
      <h2>Mentee Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={menteeInfo.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Education Level
          <select name="educationLevel" value={menteeInfo.educationLevel} onChange={handleChange}>
            {educationLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MenteeForm;
