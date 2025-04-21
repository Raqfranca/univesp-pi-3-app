import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src="/images/logo-circulo.png" alt="Delícias da Drii - Logo" /></Link>
        <h2>Delícias da Drii</h2>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/deeliciasda.drii/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
               