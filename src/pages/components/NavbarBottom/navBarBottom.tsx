import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi'; 
import './navBarBottom.sass'; 

function NavBarBottom() {
  return (
    <div className="nav-bar-bottom">
      <Link to="/carrinho" className="nav-item">
        <FiShoppingCart size={24} />
        <span>Carrinho</span>
      </Link>
      <Link to="/login" className="nav-item">
        <FiLogIn size={24} />
        <span>Login</span>
      </Link>
    </div>
  );
}

export default NavBarBottom;
