import React from 'react';
import '../card.sass';

interface Produto {
  imagem: string;
  nome: string;
  descricao: string;
  preco: number;
}

interface CardProntosEntregaProps {
  produto: Produto;
}

const CardProntosEntrega: React.FC<CardProntosEntregaProps> = ({ produto }) => {
  return (
    <div className="card-prontos-entrega">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p>R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
};

export default CardProntosEntrega;
