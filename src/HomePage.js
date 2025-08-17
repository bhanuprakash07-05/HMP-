import React from "react";
import NavbarComponent from "./screens/Navbar"; // adjust the path if navbar.js is elsewhere
import Home from "./screens/Home"; // adjust the path if home.js is elsewhere
import MissionVisionValues from "./screens/About"; // adjust the path if About.js is elsewhere
import Services from "./screens/Services";
import ContactPage from "./screens/Details";
import Footer from "./screens/Footer";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <Home />
      <MissionVisionValues />
      <Services />
      <ContactPage />
      <Footer />
    </>
  );
};

export default HomePage;
