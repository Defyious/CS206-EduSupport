// MentoringPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyNavbar from './Navbar';
import "./CSS/FormStyles.css";

const MentoringPage = () => {
    const educationLevels = [
        'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
        'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
        'JC 1', 'JC 2'
      ];

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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the upload logic
    console.log(question);
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
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={question.subject}
          onChange={handleInputChange}
        />
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
            <button type="submit" className="form-button">Upload Qn to Forum</button>
            <button type="button" className="form-button" onClick={() => navigate('/selective-matching')}>Selective Matching</button>
            <button type="button" className="form-button" onClick={() => navigate('/random-matching')}>Random Matching</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default MentoringPage;
