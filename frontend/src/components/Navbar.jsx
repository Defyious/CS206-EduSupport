// MyNavbar.jsx
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CSS/Navbar.css'; // Ensure you have a CSS file for styling
import { getUserDetails } from './utils'; 

const MyNavbar = () => {
  const navigate = useNavigate();
  const userDetails = getUserDetails();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home" style={{ padding:'0 0 0 15px' }}>EduSupport</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/mentoring">Mentoring</Nav.Link>
          <Nav.Link href="/forum">Forum</Nav.Link>
          {/* Conditionally render the "Find Mentee" link if the user is a mentor */}
          {userDetails.role === 'mentor' && (
            <Nav.Link href="/mentor-match">Find Mentee</Nav.Link>
          )}
          {/* Other Nav Links if any */}
        </Nav>
        <Nav>
          <NavDropdown title="Profile" id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
