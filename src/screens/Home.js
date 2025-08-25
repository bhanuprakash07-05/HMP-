import React from 'react';
import './Home.css';
import CountUp from 'react-countup';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";

const statsData = [
  { icon: "fas fa-book", end: 1000, label: "Publications" },
  { icon: "fas fa-award", end: 500, label: "Patents Granted" },
  { icon: "fas fa-users", end: 2000, label: "Researchers Helped" },
  { icon: "fas fa-globe", end: 50, label: "Countries Served" }
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section text-white">
      <div className="container">

        {/* Text & Image Row */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start hero-content">
            <h1 className="fw-bold mb-3 hero-title">
              Premier Academic Research & Publication Services
            </h1>
            <p className="mb-3 hero-subtext">
              Empowering researchers and academics with comprehensive publication,
              patent, and funding proposal services. Your trusted partner in academic
              excellence since inception.
            </p>

            {/* Buttons */}
            <div className="mb-3 button-group">
              {/* <LinkContainer to ="/Details"> */}
                <button className="btn btn-light btn-rounded" onClick={() => navigate("/Details")}>Get Started Today</button>
              {/* </LinkContainer> */}
              {/* <LinkContainer to ="/Services"> */}
                <button className="btn btn-outline-light btn-rounded" onClick={() => navigate("/Services")}>Explore Services</button>
              {/* </LinkContainer> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src= "/hero.png"
              alt="Researcher"
              className="img-fluid hero-img"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="row text-center g-4 stats-row mt-5">
          {statsData.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="icon-circle">
                <i className={`${stat.icon} fa-lg`}></i>

              </div>
              <h5 className="fw-bold">
                <CountUp end={stat.end} duration={3} />+
              </h5>
              <small>{stat.label}</small>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
