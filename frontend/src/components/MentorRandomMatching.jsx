import React, { useState, useEffect } from 'react';
import MyNavbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner';
import './CSS/RandomMatchingPage.css'; // Your dedicated CSS file
import { getUserDetails } from './utils';
import { useNavigate } from 'react-router-dom';

const QuestionContainer = ({ question }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log(question);
        const response = await fetch(`http://localhost:8080/api/post/image/question/${question.questionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const imageData = await response.blob();
        setImage(URL.createObjectURL(imageData));
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    return () => {
      // Clean up the image URL when the component unmounts
      URL.revokeObjectURL(image);
    };
  }, [question.id, image, question]);

  return (
    <div className="question-container">
      <h2>Question</h2>
      <p>Title: {question.title}</p>
      <p>Content: {question.content}</p>
      <p>Edu Level: {question.eduLevel}</p>
      {image && <img src={image} alt="Question Image" />}
    </div>
  );
};


const ToggleSwitch = ({ onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
    <p>Mentor Status</p>
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden-checkbox"
      />
      <div className="slider round"></div>
    </label>
    </div>
  );
};

const MentorRandomMatching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [online, setOnline] = useState(false); // State to track mentor's online status
  const [questionContent, setQuestionContent] = useState(null); // State to store question content
  const navigate = useNavigate();


  const handleToggleChange = async (isChecked) => {
    try {
      const user = getUserDetails();
      const url = 'http://localhost:8080/api/status/update/' + user.userID.id;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (!response.ok) throw new Error('Network response was not ok.');

      setOnline(isChecked); // Update online status state
      alert(isChecked ? "You will appear online to mentees" : "You will appear offline to mentees");
    } catch (error) {
      console.error('Toggle Switch Error:', error);
      alert('Toggle switch failed.');
    }
  };

  useEffect(() => {
    let intervalId;
    if (online) {
      setIsLoading(true);
      intervalId = setInterval(async () => {
        try {
          const user = getUserDetails();
          console.log(user);
          const url = `http://localhost:8080/api/matching/mentor/${user.userID.id}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error('first not ok');
          const data = await response.json();
          console.log(data);

          const questionUrl = `http://localhost:8080/api/post/question/${data.questionId}`;
          const questionResponse = await fetch(questionUrl);
          if (!questionResponse.ok) throw new Error('Question API: Network response was not ok.');
          const questionData = await questionResponse.json();
          console.log('Question API Response:', questionData);
          setQuestionContent(questionData); // Set question content

          setIsLoading(false);

          // Display pop-up with accept or decline buttons
          const acceptQuestion = window.confirm('You have received a question. Do you want to accept it?');
          if (acceptQuestion) {
            // Handle accept action
            console.log('Question accepted');

            // Call the API to respond to the question
            const responseUrl = `http://localhost:8080/api/matching/mentor/response/${user.userID.id}?response=accept`;
            const responses = await fetch(responseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              }, // Assuming 'accept' is the response
            });
            // if (!response.ok) throw new Error('Response API: Network response was not ok.');
            // const responseData = await responses.json();
            console.log('Response API Response:', responses);
            clearInterval(intervalId); // Clear the interval on successful response
            navigate('/call_mentor')
            alert('joining call');

          } else {
            // Handle decline action
            console.log('Question declined');
          }
        } catch (error) {
          console.error('API Call Error:', error);
        }
      }, 2000); // Call API every 2 seconds
    }
    return () => clearInterval(intervalId); // Cleanup interval on component unmount or online status change
  }, [online, navigate]);

  return (
    <>
      <MyNavbar />
      <div className="random-matching-page">
        <div className="loading-box">
          <ToggleSwitch onChange={handleToggleChange} />
        </div>
        {isLoading && <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
        {questionContent && <QuestionContainer question={questionContent} />}
      </div>
    </>
  );
};

export default MentorRandomMatching;
