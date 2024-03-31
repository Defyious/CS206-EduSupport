// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/FormStyles.css'; // Ensure you create and link this CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
  

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8080/api/user/login/${role}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });
    
        if (!response.ok) throw new Error('Network response was not ok.');
        const user = await response.json();
    
        const userDetails = {
          //accessToken: "Bearer " + user.accessToken,
          userID: user,
          username: user.username,
          roles: user.roles,
        };
    
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        //console.log('accessToken:', userDetails.accessToken);
        console.log('UserID:', userDetails.userID);
        console.log('Username:', userDetails.username);
        console.log('Role:', userDetails.roles);
        alert("Login Successful");
        navigate("/mentoring");
      } catch (error) {
        console.error('Login Error:', error);
        alert('Login failed.');
      }
    };
    
    

  const navigateToSignUp = () => {
    navigate('/register'); // Adjust to your sign-up page route
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="role">I am a</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
          </select>
          <button type="submit" className="form-button">Log In</button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <span onClick={navigateToSignUp} className="signup-link">Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
