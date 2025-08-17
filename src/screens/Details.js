import React from "react";
import "./Details.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2 className="title">Get in Touch</h2>
      <p className="subtitle">
        Ready to accelerate your research journey? Contact us today for personalized
        consultation and support.
      </p>

      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><i className="fas fa-map-marker-alt"></i> Tirupati, Andhra Pradesh, India</p>
          <p><i className="fas fa-envelope"></i> directorhspresearchacademy@gmail.com</p>
          <p><i className="fas fa-envelope"></i> hsptech@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91-9150450450</p>
          <p><i className="fab fa-whatsapp"></i> +91-9150450450 (Available 24/7)</p>
          <p><i className="fas fa-clock"></i> 24/7 Support Available<br />Call & WhatsApp Support</p>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your first name" required />
              <input type="text" placeholder="Your last name" required />
            </div>
            <input type="email" placeholder="your.email@example.com" required />
            <select>
              <option>Select a service</option>
              <option>Consultation</option>
              <option>Research Guidance</option>
              <option>Project Support</option>
            </select>
            <textarea placeholder="Tell us about your project and how we can help..." rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
