import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Services.css";
// import journalBg from "../public/images/journal.png"; 

const Services = () => {
  return (
    <section className="services-section text-center">
      <div className="container">
        <h2 className="fw-bold">Our Comprehensive Services</h2>
        <p className="text-muted mb-5">
          We offer a complete suite of academic and research services to support
          your scholarly journey <br /> from conception to publication and beyond.
        </p>

        <div className="row g-4">
          {/* Journal Publication Services */}
          <div className="col-md-4 card-with-bg bg-journal" >
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle blue d-flex align-items-center justify-content-center">
                  <i className="bi bi-book"></i>
                </div>
              </div>
              <h5 className="fw-bold">Journal Publication Services</h5>
              <ul className="list-unstyled mt-3 ulsize ">
                <li><span className="text-primary dotsize">•</span> Science Citation Index Expanded (SCIE)</li>
                <li><span className="text-primary dotsize">•</span> Social Sciences Citation Index (SSCI)</li>
                <li><span className="text-primary dotsize">•</span> Arts & Humanities Citation Index (AHCI)</li>
                <li><span className="text-primary dotsize">•</span> Emerging Sources Citation Index (ESCI)</li>
                <li><span className="text-primary dotsize">•</span> Scopus Index journal Publications</li>
                <li><span className="text-primary dotsize">•</span> Google Scholar Journal Publications</li>
                <li><span className="text-primary dotsize">•</span> UGC CARE Journal Publications</li>
                <li><span className="text-primary dotsize">•</span> ABDC Journal Publications</li>
              </ul>
            </div>
          </div>

          {/* Book Chapters Publication */}
          <div className="col-md-4 card-with-bg bg-book">
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle purple d-flex align-items-center justify-content-center">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
              </div>
              <h5 className="fw-bold">Book Chapters Publication</h5>
              <ul className="list-unstyled mt-3 ulsize text-light">
                <li><span className="text-primary dotsize">•</span> Scopus and WOS (ESCI) Indexed Book Series Publications</li>
                <li><span className="text-primary dotsize">•</span> Scopus and WOS (ESCI) Indexed Lecture Notes Publications</li>
              </ul>
            </div>
          </div>

          {/* Conference Publication Services */}
          <div className="col-md-4 card-with-bg bg-conference">
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle green d-flex align-items-center justify-content-center">
                  <i className="bi bi-people"></i>
                </div>
              </div>
              <h5 className="fw-bold">Conference Publication Services</h5>
              <ul className="list-unstyled mt-3 ulsize text-light">
                <li><span className="text-primary dotsize">•</span> Scopus and WOS (ESCI) Indexed Proceedings</li>
                <li><span className="text-primary dotsize">•</span> Scopus Indexed Conference Proceedings Publications</li>
              </ul>
            </div>
          </div>

          {/* Textbook Publication Services */}
          <div className="col-md-4 card-with-bg bg-textbook">
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center ">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
              </div>
              <h5 className="card-title mb-0 fw-bold">Textbook Publication Services</h5>
              <ul className="list-unstyled ms-2 ulsize pt-3 text-light">
                <li className="mb-2"><span className="text-primary dotsize">•</span> National Publishers Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> International Publishers Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> 
                  <a href="#" className="text-decoration-none fw-semibold">
                    HSP Books Publishing House →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Patent and Copyright Services */}
          <div className="col-md-4 card-with-bg bg-patent">
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle bg-danger d-flex align-items-center justify-content-center">
                  <i className="bi bi-shield-lock-fill"></i>
                </div>
              </div>
              <h5 className="card-title mb-0 fw-bold">Patent and Copyright Services</h5>
              <ul className="list-unstyled ms-2 ulsize pt-3 text-light">
                <li className="mb-2"><span className="text-primary dotsize">•</span> Indian Utility Patent Publications</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Indian Design Patent Publications</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Indian Design Patent Grant Publications</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> International Patent Grant Publications</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Copyright Publications</li>
              </ul>
            </div>
          </div>

          {/* Funding Proposal Services */}
          <div className="col-md-4 card-with-bg bg-funding">
            <div className="service-card h-100 text-start">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle bg-primary d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
              </div>
              <h5 className="card-title mb-0 fw-bold">Funding Proposal Services</h5>
              <ul className="list-unstyled ms-2 ulsize pt-3 text-light">
                <li className="mb-2"><span className="text-primary dotsize">•</span> AICTE SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> DST SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> SERB SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> UGC SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> CSIR SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> DRDO SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> ISRO SPONSORED RESEARCH SCHEMES Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> ANRF SPONSORED RESEARCH SCHEMES Assistance</li>
              </ul>
            </div>
          </div>

          {/* Writing Services */}
          <div className="col-md-6 card-with-bg bg-writing">
            <div className="service-card h-100 text-start shadow-lg rounded-4 p-4">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle bg-warning d-flex align-items-center justify-content-center">
                  <i className="bi bi-pencil-square fs-4 text-white"></i>
                </div>
              </div>
              <h5 className="card-title mb-0 fw-bold">Writing Services</h5>
              <ul className="list-unstyled ms-2 pt-2 text-light">
                <li className="mb-2"><span className="text-primary dotsize">•</span> Article Writing Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Synopsis Writing Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Thesis Writing Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Plagiarism Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> AI Report and Correction Support</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Grammar Correction Support</li>
              </ul>
            </div>
          </div>

          {/* Membership Services */}
          <div className="col-md-6 card-with-bg bg-membership">
            <div className="service-card h-100 text-start shadow-lg rounded-4 p-4">
              <div className="mb-3 text-start d-flex align-items-center">
                <div className="icon-circle bg-success d-flex align-items-center justify-content-center">
                  <i className="bi bi-person-check-fill fs-4 text-white"></i>
                </div>
              </div>
              <h5 className="card-title mb-0 fw-bold">Membership Services</h5>
              <ul className="list-unstyled ms-2 pt-2 text-light">
                <li className="mb-2"><span className="text-primary dotsize">•</span> IEEE Membership Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> ISTE Membership Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> IETE Membership Assistance</li>
                <li className="mb-2"><span className="text-primary dotsize">•</span> Free Membership Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

