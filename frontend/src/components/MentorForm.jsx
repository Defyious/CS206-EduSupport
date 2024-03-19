import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/FormStyles.css";

const subjects = ['Math', 'Chemistry', 'Physics', 'Biology', 'English', 'Chinese'];

const educationLevels = [
  'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
  'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
  'JC 1', 'JC 2'
];

const MentorForm = () => {
  const [mentorInfo, setMentorInfo] = useState({
    username: '',
    educationLevel: '',
    subjectsToTeach: []
  });
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const newSubjects = checked
      ? [...mentorInfo.subjectsToTeach, value]
      : mentorInfo.subjectsToTeach.filter(subject => subject !== value);

    setMentorInfo({ ...mentorInfo, subjectsToTeach: newSubjects });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorInfo({ ...mentorInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mentorData = {
      username: mentorInfo.username,
      educationLevel: mentorInfo.educationLevel,
      availabilityTiming: 'Any', // Adjust accordingly
      subjects: mentorInfo.subjectsToTeach,
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/user/register/mentor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mentorData),
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
      //const data = await response.json();
  
      const userDetails = {
        //accessToken: "Bearer " + user.accessToken,
        username: mentorInfo.username,
        role: 'mentor',
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
      <h2>Mentor Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={mentorInfo.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Education Level
          <select name="educationLevel" value={mentorInfo.educationLevel} onChange={handleChange}>
            {educationLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend>Subjects to Teach</legend>
          {subjects.map(subject => (
            <label key={subject}>
              <input
                type="checkbox"
                value={subject}
                checked={mentorInfo.subjectsToTeach.includes(subject)}
                onChange={handleCheckboxChange}
              />
              {subject}
            </label>
          ))}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MentorForm;
