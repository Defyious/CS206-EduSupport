// ForumPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import MyNavbar from './Navbar';
import { Tab, Tabs } from 'react-bootstrap';
import './CSS/ForumPage.css'; // Create this CSS file for styling
import { getUserDetails } from './utils'; 

  const educationLevels = [
    'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
    'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
    'JC 1', 'JC 2'
  ];
  
  const subjects = ['Math', 'Chemistry', 'Physics', 'Biology', 'English', 'Chinese'];

const ForumPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [filterEducationLevel, setFilterEducationLevel] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [key, setKey] = useState('allPosts');
  const [imageUrls, setImageUrls] = useState({}); // This will store the image URLs indexed by questionId
  const userDetails = getUserDetails();
  const [hasFetchedAllPosts, setHasFetchedAllPosts] = useState(false);
  const [hasFetchedMyPosts, setHasFetchedMyPosts] = useState(false);

  const fetchPosts = useCallback(async (isAllPosts) => {
    const url = isAllPosts ? 'http://localhost:8080/api/post/questions' : `http://localhost:8080/api/post/questions/${userDetails.userID.id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const posts = await response.json();
      isAllPosts ? setAllPosts(posts) : setMyPosts(posts);
      isAllPosts ? setHasFetchedAllPosts(true) : setHasFetchedMyPosts(true);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }, [userDetails.userID.id]);

  useEffect(() => {
    if (key === 'allPosts' && !hasFetchedAllPosts) {
      fetchPosts(true);
    } else if (key === 'myPosts' && !hasFetchedMyPosts) {
      fetchPosts(false);
    }
  }, [key, fetchPosts, hasFetchedAllPosts, hasFetchedMyPosts]);

  const fetchImagesForVisiblePosts = useCallback(() => {
    const currentPosts = key === 'allPosts' ? allPosts : myPosts;
    currentPosts.forEach((post) => {
      if (!imageUrls[post.questionId]) {
        fetch(`http://localhost:8080/api/post/image/${post.questionId}`)
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

// Function to render a post card
const renderPostCard = (post) => {
  console.log(post);
  // Construct the image URL or use a placeholder if not yet loaded
  const imageUrl = imageUrls[post.questionId] || 'https://dbkpop.com/wp-content/uploads/2023/03/twice_ready_to_be_concept_momo_2.jpg';

  return (
    <div key={post.questionId} className="post-card">
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