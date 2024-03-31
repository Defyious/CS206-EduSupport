// ForumPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import MyNavbar from './Navbar';
import { Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CSS/ForumPage.css'; // Create this CSS file for styling
import { getUserDetails } from './utils'; 

  const educationLevels = [
    'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
    'JC 1', 'JC 2'
  ];
  
  const subjects = ['Math', 'Science', 'Malay','Tamil','History','Geography','Social Studies','Literature','Computing','Chemistry', 'Physics', 'Biology', 'English', 'Chinese'];

const ForumPage = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [filterEducationLevel, setFilterEducationLevel] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [key, setKey] = useState('allPosts');
  const [imageUrls, setImageUrls] = useState({}); // This will store the image URLs indexed by questionId
  const userDetails = getUserDetails();
  const [unresolvedPosts, setUnresolvedPosts] = useState([]);
  const [resolvedPosts, setResolvedPosts] = useState([]);

  const navigate = useNavigate();

  const fetchAllQuestions = useCallback(async () => {
    try {
      // Fetch unresolved questions
      let response = await fetch(`http://localhost:8080/api/post/questions/true`);
      if (!response.ok) throw new Error('Failed to fetch unresolved questions');
      let data = await response.json();
      console.log("1" + data);
      setUnresolvedPosts(data);

      // Fetch resolved questions
      response = await fetch(`http://localhost:8080/api/post/questions/false`);
      if (!response.ok) throw new Error('Failed to fetch resolved questions');
      data = await response.json();
      console.log("2" + data);
      setResolvedPosts(data);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }, []);

  const fetchMyQuestions = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/post/questions/mentee/${userDetails.userID.id}`);
      if (!response.ok) throw new Error('Failed to fetch my questions');
      const data = await response.json();
      setMyPosts(data);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }, [userDetails.userID.id]);

  // Effect to fetch all questions and my questions when the component mounts or the tab changes
  useEffect(() => {
    if (key === 'allPosts') {
      fetchAllQuestions();
    } else if (key === 'myPosts') {
      fetchMyQuestions();
    }
    // ... (the rest of your useEffect logic for imageUrls)
  }, [fetchAllQuestions, fetchMyQuestions, key]);

  const allPosts = [...unresolvedPosts, ...resolvedPosts];

  const fetchImagesForVisiblePosts = useCallback(() => {
    const currentPosts = key === 'allPosts' ? allPosts : myPosts;
    currentPosts.forEach((post) => {
      if (!imageUrls[post.questionId]) {
        fetch(`http://localhost:8080/api/post/image/question/${post.questionId}`)
          .then((response) => response.blob())
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            setImageUrls(prev => ({ ...prev, [post.questionId]: imageUrl }));
          })
          .catch((error) => console.error('Error fetching image:', error));
      }
    });
  }, [allPosts, myPosts, imageUrls, key]);

  useEffect(() => {
    fetchImagesForVisiblePosts();
  }, [fetchImagesForVisiblePosts]);

  useEffect(() => {
    console.log("All posts: ", allPosts); // Check for duplicates in the state itself
    console.log("Unresolved posts: ", unresolvedPosts); // Inspect the individual arrays
    console.log("Resolved posts: ", resolvedPosts);
  }, [allPosts, unresolvedPosts, resolvedPosts]);
  
  // ... rest of your component
  

  // const applyFilters = (posts) => posts.filter(post => {
  //   return (filterEducationLevel ? post.eduLevel === filterEducationLevel : true) &&
  //          (filterSubject ? post.subject === filterSubject : true);
  // });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'educationLevel') {
      setFilterEducationLevel(value);
    } else if (name === 'subject') {
      setFilterSubject(value);
    }
  };

  const filteredAllPosts = allPosts.filter(post => {
    return (filterEducationLevel ? post.eduLevel === filterEducationLevel : true) &&
           (filterSubject ? post.subject === filterSubject : true);
  });

  const filteredMyPosts = myPosts.filter(post => {
    return (filterEducationLevel ? post.eduLevel === filterEducationLevel : true) &&
           (filterSubject ? post.subject === filterSubject : true);
  });

  const handlePostClick = (questionId) => {
    // Use the navigate function from react-router-dom to navigate to the details page
    navigate(`/questions/${questionId}`);
  };

// Function to render a post card
const renderPostCard = (post) => {
  console.log(post);
  // Construct the image URL or use a placeholder if not yet loaded
  const imageUrl = imageUrls[post.questionId];

  return (
    <div key={post.questionId} className="post-card" onClick={() => handlePostClick(post.questionId)}>
      <h3 className="post-title">{post.title}</h3>
      <img src={imageUrl} alt={post.title} className="post-image" />
      <div className="post-content">
        <p className="post-subject">{post.subject}</p>
        <p className="post-education-level">{post.eduLevel}</p>
        <p className="post-description">{post.content}</p>
      </div>
    </div>
  );
};
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
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="allPosts" title="All Posts">
            <div className="posts-container">
              {filteredAllPosts.map(renderPostCard)}
            </div>
          </Tab>
          <Tab eventKey="myPosts" title="My Posts">
            <div className="posts-container">
              {filteredMyPosts.map(renderPostCard)}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ForumPage;