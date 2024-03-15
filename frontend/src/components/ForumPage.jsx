// ForumPage.jsx
import React, { useState } from 'react';
import MyNavbar from './Navbar';
import './CSS/ForumPage.css'; // Create this CSS file for styling

const educationLevels = [
    'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
    'JC 1', 'JC 2'
  ];
  
  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Geography', 'Art', 'Music', 'Physical Education'
  ];

const ForumPage = () => {
  // This data would be fetched from the backend
  const posts = [
    {
      title: 'Understanding Algebra',
      subject: 'Mathematics',
      educationLevel: 'Secondary 3',
      description: 'Struggling with algebraic expressions and equations.',
      imageUrl: 'https://i.pinimg.com/736x/a1/d6/27/a1d6276755e547bcd5af1198cdcfc403.jpg', // Replace with actual image path or URL
    },
    {
      title: 'Shakespearean Literature',
      subject: 'English Literature',
      educationLevel: 'JC 2',
      description: 'Discussion on the themes of Macbeth.',
      imageUrl: 'data:image/jpeg;base64,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',
    },
    {
        title: 'Shakespearean Literature',
        subject: 'English Literature',
        educationLevel: 'JC 2',
        description: 'Discussion on the themes of Macbeth.',
        imageUrl: 'https://pm1.aminoapps.com/6858/a4ebfaf633300a360901b51c22fc72e7de9c178fv2_00.jpg',
      },
      {
        title: 'Shakespearean Literature',
        subject: 'English Literature',
        educationLevel: 'JC 2',
        description: 'Discussion on the themes of Macbeth.',
        imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-858e581744b684ea8096deaafc289009-lq',
      },
      {
        title: 'Handsome man',
        subject: 'Math',
        educationLevel: 'JC 2',
        description: 'Discussion on how to grow so tall.',
        imageUrl: 'https://media.licdn.com/dms/image/D5603AQEnhF4wtPJ2gg/profile-displayphoto-shrink_800_800/0/1709115991069?e=2147483647&v=beta&t=SolqCc3HvEwSrsYMyOfipJPZbbsUb6qFKBu3J-x09N0',
      },
      {
        title: 'Shakespearean Literature',
        subject: 'English Literature',
        educationLevel: 'JC 2',
        description: 'Discussion on the themes of Macbeth.',
        imageUrl: 'https://img.wattpad.com/463d3439454d9529b2b9c85f424204f661ba2bb1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a66784e533857625950736949413d3d2d332e313634393734373062336238373363343539323537363231343233342e6a7067?s=fit&w=720&h=720',
      },
  ];
  

  // Filter states
  const [filterEducationLevel, setFilterEducationLevel] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  // Function to handle the filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === 'educationLevel') {
      setFilterEducationLevel(value);
    } else if (name === 'subject') {
      setFilterSubject(value);
    }
  };

  // Filtered posts based on the selection
  const filteredPosts = posts.filter(post => {
    return (filterEducationLevel ? post.educationLevel === filterEducationLevel : true) &&
           (filterSubject ? post.subject === filterSubject : true);
  });

  return (
    <>
      <MyNavbar />
      <div className="forum-page">
        <div className="filter-container">
        <select name="educationLevel" onChange={handleFilterChange}>
          <option value="">Filter by Education Level</option>
          {educationLevels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <select name="subject" onChange={handleFilterChange}>
          <option value="">Filter by Subject</option>
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div className="posts-container">
          {filteredPosts.map((post, index) => (
            <div key={index} className="post-card">
                <h3 className="post-title">{post.title}</h3>
              <img src={post.imageUrl} alt={post.title} className="post-image" />
              <div className="post-content">
                <p className="post-subject">{post.subject}</p>
                <p className="post-education-level">{post.educationLevel}</p>
                <p className="post-description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForumPage;
