import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../src/screens/Navbar"; 
import Home from "../src/screens/Home";               
import HspBooks from "../src/screens/Hsp_books";  
import HomePage from "./HomePage";           

function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar always visible */}
      <NavbarComponent />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Navbar" element={<NavbarComponent />} />
        <Route path="/Hsp_books" element={<HspBooks />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 
