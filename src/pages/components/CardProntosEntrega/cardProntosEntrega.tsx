import React from 'react';
import '../card.sass'


interface Produto {
  img: string;
  nome: string;
  descricao: string;
  preco: string;
}

interface CardProntosEntregaProps {
  produto: Produto;
}

const CardProntosEntrega: React.FC<CardProntosEntregaProps> = ({ produto }) => {
  return (
    <div className="card-prontos-entrega">
      <img src={produto.img} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
      <button>Comprar</button>
    </div>
  );
};

export default CardProntosEntrega;
