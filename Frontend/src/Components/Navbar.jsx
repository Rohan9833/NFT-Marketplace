import "../Style/Navbar.css"

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          {/* Logo Section */}
          <div className="nav-logo">Mintora</div>

          {/* Navigation Links */}
          <div className="nav-links">
            <div className="nav-item">Home</div>
            <div className="nav-item dropdown">
              Services
              <span className="dropdown-icon">▼</span>
            </div>
            <div className="nav-item">Blog</div>
            <div className="nav-item">About</div>
          </div>

          {/* Auth Buttons */}
          <div className="nav-auth">
            <div className="btn-signup">Sign Up</div>
            <div className="btn-login">Login</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
