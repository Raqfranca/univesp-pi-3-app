import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import './navbar.sass'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
       
          <h2>Delícias da Drii</h2>
          <a href="https://www.instagram.com/deeliciasda.drii/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={35} />
          </a>
      </div>

      <div className="navbar-middle">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/produtos-prontos-entrega" className="nav-item">Pronta entrega</Link>
        <div className="logo-central">
          <img src="/images/logo-circulo.png" alt="Logo" />
        </div>
        <Link to="/encomendar" className="nav-item">Encomendar</Link>
        <Link to="/sobre" className="nav-item">Sobre nós</Link>
      </div>
    </nav>
  );
}

export default Navbar;

               