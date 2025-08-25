import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-logo">
            <span className="logo-badge">HSP</span> Technologies
          </h2>
          <p>
            Empowering researchers worldwide with comprehensive academic
            services and publication support.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li>
               Home
            </li>
            <li>About Us</li>
            <li>Services</li>
            <li>Journal Publications</li>
            <li>Patent Services</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h4>Our Services</h4>
          <ul>
            <li>SCIE Publications</li>
            <li>Scopus Publications</li>
            <li>Patent Applications</li>
            <li>Funding Proposals</li>
            <li>Conference Support</li>
            <li>Writing Services</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> Tirupati, Andhra Pradesh, India</p>
          <p><i className="fas fa-envelope"></i> directorspresearchacademy@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91-9150450450</p>
          <p><i className="fas fa-globe"></i> 24/7 Support Available</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 HSP Technologies. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
