import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        <div className="footer-logo">
          LOGO
        </div>

        <ul className="footer-nav">
          <li>Home</li>
          <li>Services ▾</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>About</li>
        </ul>

      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">

        <p className="footer-copy">
          Greelogix @ 202X. All rights reserved.
        </p>

        <div className="footer-socials">
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>

      </div>

    </footer>
  );
}