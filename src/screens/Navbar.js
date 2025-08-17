import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Nav, Navbar as BSNavbar, NavDropdown } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar py-1 text-white bg-dark">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start small">
          <div className="mb-1 mb-md-0">
            <FaMapMarkerAlt className="me-2" />
            Tirupati, Andhra Pradesh, India
          </div>
          <div>
            <FaEnvelope className="me-2" />
            directorhspresearchacademy@gmail.com
            <span className="d-block d-md-inline mt-1 mt-md-0">
              <FaPhoneAlt className="ms-md-3 me-2" /> +91-9150450450
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <BSNavbar expand="lg" className="bg-white shadow-sm sticky-top">
        <Container fluid>
          {/* Brand */}
          <BSNavbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="/logo.jpg"
              alt="HSP Technologies"
              height="50"
              className="me-2"
            />
            <div>
              <div className="fw-bold lh-sm">
                <span>
                    HSP <br className="d-none d-lg-block" /> Technologies
                  </span>
                </div>
              <small className="text-muted d-none d-sm-block">
                 <span>
                    Research & Academic <br className="d-none d-lg-block" /> Services
                  </span>
              </small>
            </div>
          </BSNavbar.Brand>

          {/* Toggler */}
          <BSNavbar.Toggle aria-controls="navbar-nav" />

          {/* Nav Links */}
          <BSNavbar.Collapse id="navbar-nav">
            <Nav className="ms-auto fw-semibold text-center text-lg-start">
              <Nav.Link href="#">HOME</Nav.Link>

              <NavDropdown
                title={
                  <span>
                    JOURNALS
                    <br className="d-none d-lg-block" /> PUBLICATION
                  </span>
                }
                id="journals-dropdown"
              >
                <NavDropdown.Item href="#">Science Citation Index Expanded (SCIE)</NavDropdown.Item>
                <NavDropdown.Item href="#">Social Sciences Citation Index (SSCI)</NavDropdown.Item>
                <NavDropdown.Item href="#">Arts & Humanities Citation Index (AHCI)</NavDropdown.Item>
                <NavDropdown.Item href="#">Emerging Sources Citation Index (ESCI)</NavDropdown.Item>
                <NavDropdown.Item href="#">Scopus Index journal Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">Google Scholar Journal Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">UGC CARE Journal Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">ABDC Journal Publications</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    BOOK
                    <br className="d-none d-lg-block" /> CHAPTERS
                  </span>
                }
                id="book-dropdown"
              >
                <NavDropdown.Item href="#">Scopus & WOS (ESCI) Indexed Book Series</NavDropdown.Item>
                <NavDropdown.Item href="#">Scopus & WOS (ESCI) Indexed Lecture Notes</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    CONFERENCE
                    <br className="d-none d-lg-block" /> PUBLICATION
                  </span>
                }
                id="confpub-dropdown"
              >
                <NavDropdown.Item href="#">Scopus & WOS (ESCI) Indexed Proceedings</NavDropdown.Item>
                <NavDropdown.Item href="#">Scopus Indexed Proceedings</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    TEXTBOOK
                    <br className="d-none d-lg-block" /> PUBLICATION
                  </span>
                }
                id="textbook-dropdown"
              >
                <NavDropdown.Item href="#">National Publishers Support</NavDropdown.Item>
                <NavDropdown.Item href="#">International Publishers Support</NavDropdown.Item>
                {/* <NavDropdown.Item href="#" className="special-dropdown-item" onclick={() => navigate("/Hsp_books")}> HSP Books Publishing House </NavDropdown.Item> */}
                <LinkContainer to="/Hsp_books">
                  <NavDropdown.Item className="special-dropdown-item">
                    HSP Books Publishing House
                  </NavDropdown.Item>
                </LinkContainer>                
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    PATENT &
                    <br className="d-none d-lg-block" /> COPYRIGHT
                  </span>
                }
                id="patent-dropdown"
              >
                <NavDropdown.Item href="#">Indian Utility Patent Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">Indian Design Patent Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">Indian Design Patent Grant Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">International Patent Grant Publications</NavDropdown.Item>
                <NavDropdown.Item href="#">Copyright Publications</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    FUNDING
                    <br className="d-none d-lg-block" /> PROPOSALS
                  </span>
                }
                id="funding-dropdown"
              >
                <NavDropdown.Item href="#">AICTE Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">DST Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">SERB Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">UGC Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">CSIR Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">DRDO Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">ISRO Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">ANRF Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">BIRAC Sponsored Research Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#">ICMR Sponsored Research Schemes</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    CONFERENCE
                    <br className="d-none d-lg-block" /> SERVICES
                  </span>
                }
                id="confserv-dropdown"
              >
                <NavDropdown.Item href="#">Scopus Indexed Conference Assistance</NavDropdown.Item>
                <NavDropdown.Item href="#">Non-Scopus Indexed Conference Assistance</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </>
  );
};
export default NavbarComponent;
