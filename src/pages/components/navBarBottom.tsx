import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBottom() {
  return (
    <div className="nav-bar-bottom">
      <Link to="/produtos-prontos-entrega">Produtos Pronto para Entrega</Link>
      <Link>Encomenda</Link>
      <Link to="/sobre"> Sobre a Loja</Link>
    </div>
  );
}

export default NavBarBottom;
