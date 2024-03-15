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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('menteeInfo', JSON.stringify(menteeInfo));
    alert('Signup successful!');
    navigate('/home'); // Redirect to the home page
        // Example POST request with fetch
        // try {
        //   const response = await fetch('YOUR_BACKEND_ENDPOINT/mentee', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(menteeInfo),
        //   });
        //   if (!response.ok) throw new Error('Network response was not ok.');
        //   const data = await response.json();
        //   alert('Signup successful!');
        //   navigate('/'); // Redirect to the home page
        // } catch (error) {
        //   console.error('There has been a problem with your fetch operation:', error);
        // }

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
