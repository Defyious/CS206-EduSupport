// ProfilePage.jsx
import React from 'react';
import MyNavbar from './Navbar';
import './CSS/ProfilePage.css';
import { getUserDetails } from './utils'; 

const ProfilePage = () => {
  // Fetch user data from localStorage
  const user = getUserDetails();
  // const userProfile = {
  //   username: localStorage.getItem('username') || 'Username not set',
  //   userRole: localStorage.getItem('userRole') || 'Role not set',
  //   imageUrl: 'https://sourcemusic.com/resources/artist/68ba06d4-5377-4690-b8dc-0d6ef1760da4.jpg' // A default placeholder image
  // };
  const imageUrl = 'https://sourcemusic.com/resources/artist/68ba06d4-5377-4690-b8dc-0d6ef1760da4.jpg' // A default placeholder image

  return (
    <>
      <MyNavbar />
      <div className="profile-page">
        <div className="profile-box">
          <img src={imageUrl} alt="Profile" className="profile-image" />
          <div className="profile-info">
          <h3>{user?.username || 'Username not set'}</h3>
          <p>Role: {user?.role || 'Role not set'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

