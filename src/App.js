import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../src/screens/Navbar"; 
import Home from "../src/screens/Home";               
import HspBooks from "../src/screens/Hsp_books";  
import HomePage from "./HomePage";
import Details from "./screens/Details";    
import Services from "./screens/Services";
import Footer from "../src/screens/Footer";


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="Navbar" element={<NavbarComponent />} />
        <Route path="/Hsp_books" element={<HspBooks />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Footer" element={<Footer />} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App; 
