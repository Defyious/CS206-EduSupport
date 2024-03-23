import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import { Modal, Button } from 'react-bootstrap';
import { getUserDetails } from './utils'; 

const SelectiveMatching = () => {
  const [mentors, setMentors] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const userDetails = getUserDetails();
  
  useEffect(() => {
    const fetchAvailableMentors = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/matching/mentee/getMentors/${userDetails.userID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const availableMentors = await response.json();
        setMentors(availableMentors);
      } catch (error) {
        console.error('Error fetching available mentors:', error);
      }
    };

    fetchAvailableMentors();
  }, [userDetails.userID]);

  const handleChooseMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowConfirmation(true);
  };

  const confirmChooseMentor = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/matching/mentee/${userDetails.userID}/select/${selectedMentor.id}?questionId=${selectedMentor.questionId}`, {
        method: 'POST'
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error sending chooseMentor:', error);
    }
    setShowConfirmation(false);
  };

  return (
    <div className="page-container">
      <MyNavbar />
      <h1>Selective Matching Page</h1>
      <div className="mentor-list">
        {mentors.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <p>{mentor.name}</p>
            <p>Subject: {mentor.subject}</p>
            <Button variant="primary" onClick={() => handleChooseMentor(mentor)}>Select</Button>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to choose {selectedMentor?.name} as your mentor?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmChooseMentor}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectiveMatching;

