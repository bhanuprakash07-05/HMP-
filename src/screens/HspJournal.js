import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./HspJournal.css";
import { useNavigate } from "react-router-dom";

const HSPJournal = () => {
    const navigate = useNavigate();
  return (
    <div>
      {/* Back to Main Site */}
      <div className="p-3">
        <a href="#" className="text-decoration-none text-primary" onClick={(e) => { 
                    e.preventDefault(); // prevents page reload
                    navigate("/HomePage"); 
                  }}>
          <i className="bi bi-arrow-left"></i> Back to Main Site
        </a>
      </div>

      {/* Header */}
      <div className="text-center">
        <button className="btn journal-btn">HSP JOURNAL</button>
        <h2 className="mt-3 fw-bold">
          International Journal of Engineering, Technology and Management Sciences
        </h2>
        <p className="text-muted">
          <i className="bi bi-geo-alt"></i> Tirupati, Andhra Pradesh, India &nbsp;&nbsp;
          <i className="bi bi-envelope"></i> editorshspjournal@gmail.com &nbsp;&nbsp;
          <i className="bi bi-telephone"></i> +91-9150450450 - [WhatsApp and Call-24/7]
        </p>
      </div>

      {/* Navbar */}
      {/* Navbar */}
<nav className="custom-navbar mt-3">
  <ul className="nav justify-content-center">
    <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
    <li className="nav-item"><a className="nav-link" href="#">SCOPE AND COVERAGE</a></li>
    <li className="nav-item"><a className="nav-link" href="#">VOLUMES</a></li>
    <li className="nav-item"><a className="nav-link" href="#">SUBMIT PAPER</a></li>
    <li className="nav-item"><a className="nav-link" href="#">MANUSCRIPT STATUS</a></li>
    <li className="nav-item"><a className="nav-link" href="#">AUTHOR GUIDELINES</a></li>
    <li className="nav-item"><a className="nav-link" href="#">EDITORIAL BOARD</a></li>
    <li className="nav-item"><a className="nav-link" href="#">INDEXING AND ABSTRACTING</a></li>
    <li className="nav-item"><a className="nav-link" href="#">SUBSCRIBE TO IJETMS</a></li>
    <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
  </ul>
</nav>


      {/* Welcome Section */}
      <div className="container my-5 text-center">
        <h3 className="fw-bold">Welcome to HSP Journal</h3>
        <p className="text-muted">
          International Journal of Engineering, Technology and Management Sciences is a premier academic publication
          dedicated to advancing research and knowledge in engineering, technology, and management disciplines.
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <div className="circle bg-primary text-white">1</div>
              <h5 className="mt-3">Peer Review</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <div className="circle bg-purple text-white">2</div>
              <h5 className="mt-3">Global Reach</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <div className="circle bg-success text-white">3</div>
              <h5 className="mt-3">Open Access</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSPJournal;
