import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/upload-video" className="nav-link">Upload Video</Link></li>
        <li><Link to="/all-uploaded-videos" className="nav-link">All Uploaded Videos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
