import "../Style/Navbar.css";
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-logo">MINTORA</div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Menu Items */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <div className="nav-item">Home</div>
          <div className="nav-item dropdown">
            Services 
            {/* <span className="dropdown-icon">▼</span> */}
          </div>
          <div className="nav-item">Blog</div>
          <div className="nav-item">About</div>
          
          <div className="nav-auth-mobile">
            <div className="btn-signup">Sign Up</div>
            <div className="btn-login">Login</div>
          </div>
        </div>

        <div className="nav-auth-desktop">
          <div className="btn-signup">Sign Up</div>
          <div className="btn-login">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;