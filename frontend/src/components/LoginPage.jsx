// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/FormStyles.css'; // Ensure you create and link this CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform the login logic here
    console.log({ username, role });
    navigate('/home');
    // On successful login, navigate to another page, e.g., '/home'
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
