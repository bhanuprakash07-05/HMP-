import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";
import "./About.css"; // optional, if you want to put styles in a separate file

const MissionVisionValues = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">About HSP Technologies</h2>
          <p className="text-muted fs-5">
            Leading the way in academic research support and publication services 
            with <br/>unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-2 text-center">
        <div className="container">
          <div className="row">
            {/* Mission */}
            <div className="col-md-4 mb-4">
              <div className="icon-circle bg-light-primary mb-3">
                <FaBullseye size={30} color="#2563eb" />
              </div>
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To empower researchers and academics worldwide by providing
                comprehensive, high-quality publication and research support
                services that accelerate scientific discovery and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="col-md-4 mb-4">
              <div className="icon-circle bg-light-purple mb-3">
                <FaEye size={30} color="#9333ea" />
              </div>
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To be the global leader in academic research services, fostering a
                world where groundbreaking research reaches its full potential
                through expert guidance and support.
              </p>
            </div>

            {/* Values */}
            <div className="col-md-4 mb-4">
              <div className="icon-circle bg-light-success mb-3">
                <FaUsers size={30} color="#16a34a" />
              </div>
              <h4 className="fw-bold">Our Values</h4>
              <p className="text-muted">
                Excellence, integrity, innovation, and collaboration drive
                everything we do. We are committed to ethical practices and
                building lasting partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-2 mb-5">
        <div className="container">
          <div
            className="p-4 rounded-4 text-center"
            style={{ backgroundColor: "#f5f7ff" }}
          >
            <h4 className="fw-bold mb-3">Chairman's Message</h4>
            <p className="text-muted">
              "At HSP Technologies, we believe that exceptional research deserves
              exceptional support. Our team of experts is dedicated to helping
              researchers navigate the complex landscape of academic publishing,
              patent applications, and funding proposals."
            </p>
            <p className="text-muted">
              "With years of experience and a deep understanding of academic
              requirements, we are committed to providing personalized solutions
              that meet the unique needs of each researcher and institution we
              serve."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionValues; 

