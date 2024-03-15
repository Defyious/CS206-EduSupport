// HomePage.jsx
import React from 'react';
import MyNavbar from './Navbar';

const Home = () => {
  return (
    <div>
      <MyNavbar />  {/* Include the navbar at the top */}
      <h1>Welcome to the Home Page</h1>
      {/* Additional home page content goes here */}
    </div>
  );
};

export default Home;

