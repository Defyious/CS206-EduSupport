// MentoringPage.jsx
import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyNavbar from './Navbar';
import "./CSS/FormStyles.css";
import { getUserDetails } from './utils'; 

const MentoringPage = () => {
  const educationLevels = [
    'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
    'JC 1', 'JC 2'
  ];

  const subjects = ['Math', 'Chemistry', 'Physics', 'Biology', 'English', 'Chinese'];

  const [question, setQuestion] = useState({
    title: '',
    subject: '',
    educationLevel: '',
    description: '',
    image: null,
    imagePreview: null
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setQuestion({ ...question, image: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQuestion(prevState => ({ ...prevState, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setQuestion(prevState => ({ ...prevState, imagePreview: null }));
    }
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append('menteeID', getUserDetails().userID.id);
    formData.append('title', question.title);
    formData.append('educationLevel', question.educationLevel);
    formData.append('subject', question.subject);
    formData.append('description', question.description);
    if (question.image) {
      formData.append('file', question.image);
  }
    return formData;
  };

  const uploadQuestionToForum = async () => {
    const formData = createFormData();
    formData.append('type', "forum");
    try {
      // Make the POST request
      const response = await fetch('http://localhost:8080/api/post/question', {
        method: 'POST',
        body: formData, // Send the form data
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      // Store the questionId in local storage
      localStorage.setItem('questionId', data.id);

      // Rest of your code
      console.log('Question uploaded:', data);
      // Handle the response as per your requirement
      console.log(data);
      alert('Question uploaded successfully!');
      navigate('/forum'); // Redirect to the forum page or any other page as needed
    } catch (error) {
      console.error('There was an error uploading the question:', error);
      alert('Failed to upload the question.');
    }
};

const handleRandomMatching = async () => {
  const formData = createFormData();
  formData.append('type', "matching");
  // Perform the API call for random matching
  try {
    const response = await fetch('http://localhost:8080/api/post/question', { // Use your actual API endpoint
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    // Store the questionId in local storage
    localStorage.setItem('questionId', data.id);

    // Rest of your code
    console.log('Question uploaded:', data);

    // Handle the response data from random matching
    console.log(data);
    navigate('/random-matching')
    alert('Random matching initiated!');
    // Navigate to the appropriate page after matching
  } catch (error) {
    console.error('Error with random matching:', error);
    alert('Random matching failed.');
  }
};

const handleSelectiveMatching = async () => {
  const formData = createFormData();
  formData.append('type', "matching");
  // Perform the API call for random matching
  try {
    const response = await fetch('http://localhost:8080/api/post/question', { // Use your actual API endpoint
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    // Handle the response data from random matching
    console.log(data);
    alert('Selective matching initiated!');
    // Navigate to the appropriate page after matching
    navigate('/selective-matching')
  } catch (error) {
    console.error('Error with random matching:', error);
    alert('Random matching failed.');
  }
};

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.image) {
      alert('Please select an image to upload.');
      return;
    }
    await uploadQuestionToForum();
  };

  return (
    <div>
      <MyNavbar /> {/* Include the Navbar */}
    <div className="form-container">
      <h2>Post Your Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={question.title}
          onChange={handleInputChange}
        />
        <select
            name="subject"
            value={question.subject}
            onChange={handleInputChange}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        <select
            name="educationLevel"
            value={question.educationLevel}
            onChange={handleInputChange}
          >
            <option value="">Select Education Level</option>
            {educationLevels.map((level, index) => (
              <option key={index} value={level}>{level}</option>
            ))}
          </select>

        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        {question.imagePreview && (
            <img src={question.imagePreview} alt="Preview" className="image-preview" />
          )}
        <textarea
            name="description"
            placeholder="Description"
            value={question.description}
            onChange={handleInputChange}
            rows="6" // Increase the number of rows to make the textarea bigger
            className="description-textarea" // Apply specific class for additional styling
          />
        <div className="button-group">
        <button type="button" className="form-button" onClick={uploadQuestionToForum}>Upload Qn to Forum</button>
            <button type="button" className="form-button" onClick={handleSelectiveMatching}>Selective Matching</button>
            <button type="button" className="form-button" onClick={handleRandomMatching}>Random Matching</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default MentoringPage;
