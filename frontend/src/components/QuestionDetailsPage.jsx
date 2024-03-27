import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from './Navbar';
import './CSS/QuestionDetailsPage.css'; // You might need to create this CSS file for styling
import { getUserDetails } from './utils'; 

const QuestionDetailsPage = () => {
  const { questionId } = useParams();
  const [questionDetails, setQuestionDetails] = useState(null);
  const [image, setImage] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswerContent, setNewAnswerContent] = useState('');
  const [answerImage, setAnswerImage] = useState(null);
  const currentUserID = getUserDetails().userID.id;
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch the question details
    fetch(`http://localhost:8080/api/post/question/${questionId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('isSolved type:', typeof data.isSovled); // Check the type of isSolved
    console.log('isSolved value:', data.isSovled); // Check the value of isSolved

    // Check the boolean value of isSolved (assuming it is returned as a string 'true' or 'false')
    const isSovled = data.isSovled === 'true';
    console.log('isSolved after comparison:', isSovled); // This should log true if data.isSolved is the string 'true'
      setQuestionDetails({
        ...data,
        isResolved: isSovled, // Ensure you have an isResolved property in your state
      });
    })
    .catch((error) => console.error('Error fetching question details:', error));
    // Fetch the question image
    fetch(`http://localhost:8080/api/post/image/question/${questionId}`)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
      })
      .catch((error) => console.error('Error fetching image:', error));

    // Fetch the images for answers
    fetch(`http://localhost:8080/api/post/question/${questionId}/answers`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((answersData) => {
        // Create promises to fetch images for each answer that has an image
        const imagePromises = answersData.map((answer) => {
          if (answer.image) {
            return fetch(`http://localhost:8080/api/post/image/answer/${answer.id}`)
              .then((imageResponse) => imageResponse.blob())
              .then((imageBlob) => {
                const imageUrl = URL.createObjectURL(imageBlob);
                return { ...answer, imageUrl }; // Add the imageUrl to the answer object
              });
          }
          return Promise.resolve(answer); // For answers without an image, resolve immediately
        });

        return Promise.all(imagePromises);
      })
      .then((answersWithImages) => {
        setAnswers(answersWithImages); // Set the answers state with the new data including images
      })
      .catch((error) => console.error('Error:', error));

  }, [questionId]);

  const handleNewAnswerChange = (e) => {
    setNewAnswerContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setAnswerImage(e.target.files[0]);
  };

  const submitNewAnswer = async () => {
    const formData = new FormData();
    formData.append('content', newAnswerContent);
    if (answerImage) formData.append('file', answerImage);
    console.log(formData);

    try {
      const response = await fetch(`http://localhost:8080/api/post/question/${questionId}/answer`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit answer');
      }

      const result = await response.json();
      console.log('Answer submitted:', result);
      // Optionally refresh the list of answers here
      setNewAnswerContent('');
      setAnswerImage(null);
      fileInputRef.current.value = "";
      // Refresh answers to display the newly added one
      const updatedAnswers = [...answers, result];
      setAnswers(updatedAnswers);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const handleResolvedChange = async (e) => {
    const isSolved = e.target.checked;
    try {
      const response = await fetch(
        `http://localhost:8080/api/post/question/${questionId}/update/${isSolved}`,
        { method: 'POST' }
      );
      if (!response.ok) throw new Error('Failed to update question resolved status');
      // Update local state to reflect the new resolved status
      setQuestionDetails((prevDetails) => ({
        ...prevDetails,
        isResolved: isSolved,
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="question-details-container">
        {
            questionDetails && currentUserID === questionDetails.menteeID && (
              <div className="resolved-slider-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={questionDetails.isResolved}
                    onChange={handleResolvedChange}
                  />
                  <span className="slider round"></span>
                </label>
                <span>{questionDetails.isResolved ? 'Resolved' : 'Unresolved'}</span>
              </div>
            )
          }
        <div className="question-container">
            {questionDetails && (
            <div>
                <h2>{questionDetails.title}</h2>
                {image && <img src={image} alt="Question" />}
                <p>{questionDetails.eduLevel}</p>
                <p>{questionDetails.subject}</p>
                <p>{questionDetails.content}</p>
            </div>
            )}
            </div>
        <div className="answer-submission-container">
          <textarea value={newAnswerContent} onChange={handleNewAnswerChange} placeholder="Write your answer here..."></textarea>
          <input
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef} // Attach the ref to the file input
            />
          <button onClick={submitNewAnswer}>Submit Answer</button>
        </div>
        <div className="answers-list-container">
          {answers.map((answer) => (
            <div key={answer.id} className="answer-card">
              <p>{answer.content}</p>
              {answer.imageUrl && <img src={answer.imageUrl} alt="Answer" className="answer-image" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsPage;
