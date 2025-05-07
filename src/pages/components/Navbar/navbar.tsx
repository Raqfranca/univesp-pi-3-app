import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import './navbar.sass'; 
import { FiLogIn } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
  <h2>Delícias da Drii</h2>

  <div className="icons">
    <a href="https://www.instagram.com/deeliciasda.drii/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={35} />
    </a>
    <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FYF55U4BKTIHUG1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafBgfbvrfT9g05CUecbURmPT3F8o_KKYBtFZdQgs0yc5fJWfbzxHLC4mNquog_aem_QdviT_Cs1XNp-mUb_Vmxwg&e=AT2w8QtI2Bl7QaZSZZR2H1gF_fc9H9tuZvXRYiY_VmIAM9UjYWDdaHeWO6W7o4P3ldOrrdKzwu3bO_fWzJ6sxhS2i5fRZJw7utieGrtxXyZuQ8ExnVbPaw" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={35} />
    </a>

    <Link to="/login" className="nav-item">
      <FiLogIn size={35} />
    </Link>
  </div>
</div>
      <div className="navbar-middle">
        <Link to="/" className="nav-item">Home</Link>
        <div className="logo-central">
          <img src="/images/logo-circulo.png" alt="Logo" />
        </div>
        <Link to="/sobre" className="nav-item">Sobre nós</Link>
      </div>
    </nav>
  );
}

export default Navbar;

               