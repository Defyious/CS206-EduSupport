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
      .then((data) => setQuestionDetails(data))
      .catch((error) => console.error('Error fetching question details:', error));
    // Fetch the question image
    fetch(`http://localhost:8080/api/post/image/${questionId}`)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
      })
      .catch((error) => console.error('Error fetching image:', error));

    // Fetch the answers for the question
    fetch(`http://localhost:8080/api/post/question/${questionId}/answers`)
      .then((response) => response.json())
      .then((data) => {
        const answersWithImageData = data.map(answer => {
          if (answer.image) {
            const imageBlob = new Blob([Uint8Array.from(answer.image)], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(imageBlob);
            return { ...answer, imageUrl };
          }
          return answer;
        });
        setAnswers(answersWithImageData);
      })
      .catch((error) => console.error('Error fetching answers:', error));
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

  const handleResolvedChange = async (isSolved) => {
    try {
        const response = await fetch(`http://localhost:8080/api/post/question/${questionId}/update/${isSolved}`, {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error('Failed to update question resolved status');
        }

        const result = await response.json();
        console.log('Question resolved status updated:', result);
        // ... handle successful update, maybe by refreshing question details
    } catch (error) {
        console.error('Error updating question resolved status:', error);
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
                    onChange={(e) => handleResolvedChange(e.target.checked)}
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
              {/* Display answer images if available. Assuming answer.imageURL holds the image URL */}
              {answer.imageURL && <img src={answer.imageUrl} alt="Answer" className="answer-img" />
}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailsPage;
