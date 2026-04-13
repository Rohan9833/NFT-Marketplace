import "../Style/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">

        <Link to="/" className="nav-logo">MINTORA</Link>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item">Home</Link>
          <div className="nav-item">Services</div>
          <Link to="/learnnft" className="nav-item">NFT</Link>
          <Link to="/about" className="nav-item">About</Link>

          <div className="nav-auth-mobile">
            <Link to="/signup" className="btn-signup">Sign Up</Link>
            <Link to="/login" className="btn-login">Login</Link>
          </div>
        </div>

        <div className="nav-auth-desktop">
          <Link to="/signup" className="btn-signup">Sign Up</Link>
          <Link to="/login" className="btn-login">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;