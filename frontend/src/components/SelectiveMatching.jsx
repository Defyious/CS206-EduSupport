import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, getQuestionId } from './utils';
import './CSS/SelectiveMatching.css'; // Your dedicated CSS file

const SelectiveMatching = () => {
  const [mentors, setMentors] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showRatingsModal, setShowRatingsModal] = useState(false);
  const menteeId = getUserDetails().userID.id;
  const questionId = getQuestionId();
  const navigate = useNavigate();

 useEffect(() => {
    const fetchAvailableMentors = async () => {
      console.log("Attempting to fetch available mentors");
      try {
        const url = `http://localhost:8080/api/matching/mentee/${menteeId}/getMentors/${questionId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const availableMentors = await response.json();
        setMentors(availableMentors);
      } catch (error) {
        console.error('Error fetching available mentors:', error);
      }
    };

    if (menteeId && questionId) {
      fetchAvailableMentors();
    }
  }, [menteeId, questionId]);

  const handleChooseMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowConfirmation(true);
  };

  const confirmChooseMentor = async () => {
    if (!selectedMentor || typeof selectedMentor.id === 'undefined') {
      console.error('Selected mentor or mentor ID is undefined.');
      return;
    }
  
    try {
      const url = `http://localhost:8080/api/matching/mentee/${menteeId}/select/${selectedMentor.id}?questionId=${questionId}`;
      const response = await fetch(url, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Request failed: ' + response.status);
      }
      const result = await response.text();
      console.log(result);
      setShowConfirmation(false);
  
      // Start polling for mentor response
      const checkMentorResponse = async () => {
        try {
          const checkResponse = await fetch(`http://localhost:8080/api/matching/mentee/${questionId}`);
          const mentorResponse = await checkResponse.text(); // Get the response as text
    console.log("Mentor response text:", mentorResponse); // Log the raw text response
          if (mentorResponse === 'Found Mentor') {
            clearInterval(checkInterval); // Stop polling when mentor is found
            navigate('/call'); // Navigate to the call page
          } else {
            console.log(mentorResponse); // Log the response and keep polling
          }
        } catch (error) {
          console.error('Error while checking for mentor response:', error);
          clearInterval(checkInterval); // Stop polling on error
        }
      };
  
      // Poll every 5 seconds
      const checkInterval = setInterval(checkMentorResponse, 5000);
    } catch (error) {
      console.error('Error sending chooseMentor:', error);
    }
  };
  

  const calculateAverageRating = (ratings) => {
    if (!ratings.length) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return (sum / ratings.length).toFixed(1);
  };

  const handleShowRatings = (mentor) => {
    setSelectedMentor(mentor);
    setShowRatingsModal(true);
  };

  const mentorListItems = mentors.map((mentor) => (
    <div key={mentor.id} className="mentor-card">
      <img src='https://sourcemusic.com/resources/artist/68ba06d4-5377-4690-b8dc-0d6ef1760da4.jpg' alt=""/>
      <p>Username: {mentor.username}</p>
      <p>Education Level: {mentor.educationLevel}</p>
      <p>Subjects: {mentor.subjects.map(subject => subject.name).join(', ')}</p>
      <p>Average Rating: {calculateAverageRating(mentor.ratings)}</p>
      <p>Number of Ratings: {mentor.ratings.length}</p>
      <Button variant="primary" onClick={() => handleChooseMentor(mentor)}>Select</Button>
      <Button variant="info" onClick={() => handleShowRatings(mentor)}>View Ratings</Button>
    </div>
  ));

  const RatingsModal = () => (
    <Modal show={showRatingsModal} onHide={() => setShowRatingsModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ratings for {selectedMentor?.username}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {selectedMentor?.ratings && selectedMentor.ratings.map((rating, index) => (
            <ListGroup.Item key={index}>
              Score: {rating.rating} - {rating.comments}
            </ListGroup.Item>
          ))}
          {!selectedMentor?.ratings && <ListGroup.Item>No ratings available</ListGroup.Item>}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowRatingsModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
  
  return (
    <div className="page-container">
      <MyNavbar />
      <h1>Select Your Mentor</h1>
      <div className="mentor-list">
        {mentorListItems}
        {/* ... rest of your mentorListItems rendering */}
        </div>
      {selectedMentor && <RatingsModal />}

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to choose {selectedMentor?.username} as your mentor?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>confirmChooseMentor()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectiveMatching;

