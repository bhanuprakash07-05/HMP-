import React from "react";
import "./Hsp_books.css"; // Import the styles
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function HspBooks() {
    const Navigate = useNavigate();
  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
       <LinkContainer to="./Home">
            <a href="#" className="back-link">← Back to Main Site</a>
        </LinkContainer> 
        <span>📍 Tirupati, Andhra Pradesh, India</span>
        <span>📧 hspbooks@gmail.com</span>
        <span>📞 +91-9150450450</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">HSP BOOKS PUBLISHING HOUSE</div>
        <ul className="nav-list">
          <li><a href="#" className="nav-link">HOME</a></li>
          <li><a href="#" className="nav-link">ABOUT US</a></li>
          <li><a href="#" className="nav-link">BOOK LIST / CATALOGUE</a></li>
          <li><a href="#" className="nav-link">CONTACT US</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to HSP Books Publishing House</h2>
        <p>
          HSP Books Publishing House is dedicated to publishing high-quality 
          academic and professional books that contribute to the advancement 
          of knowledge and education.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>Academic Excellence</h3>
          <p>Publishing cutting-edge research and academic content</p>
        </div>
        <div className="feature-card">
          <div className="icon">🌍</div>
          <h3>Global Distribution</h3>
          <p>Reaching readers worldwide through various channels</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 HSP Books Publishing House. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default HspBooks; // ✅ Capitalized
