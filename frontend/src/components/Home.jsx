// HomePage.jsx
import React, { useState } from 'react';
import MyNavbar from './Navbar';
import './CSS/HomePage.css'; // Ensure you have a CSS file for styling

const Home = () => {
  const videoIds = ['ZHhqwBwmRkI', 'bOg3QdbWeVE', '1zyyb4be8n4']; // Your YouTube video IDs
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <div>
      <MyNavbar />
      <h1>Welcome to the Home Page</h1>
      <div className="video-container">
        <iframe
          className="background-video"
          src={`https://www.youtube.com/embed/${videoIds[currentVideoIndex]}?autoplay=1&mute=1&playlist=${videoIds.join(',')}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Playlist" // A general title for the playlist
          onEnded={handleVideoEnd} // This will not work with an iframe. You'll need the YouTube Player API for this functionality.
        ></iframe>
      </div>
      {/* Additional home page content goes here */}
    </div>
  );
};

export default Home;



