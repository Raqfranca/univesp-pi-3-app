import React from 'react';
import './card.sass'

interface Produto {
  img: string;
  nome: string;
}

interface CardMaisPedidosProps {
  produto: Produto;
}

const CardMaisPedidos: React.FC<CardMaisPedidosProps> = ({ produto }) => {
  return (
    <div className="card-mais-pedidos">
      <img src={produto.img} alt={produto.nome} />
      <h3>{produto.nome}</h3>
    </div>
  );
};

export default CardMaisPedidos;
