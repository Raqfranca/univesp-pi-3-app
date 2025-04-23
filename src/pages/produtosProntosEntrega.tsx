import React from 'react';
import Navbar from './components/navbar';
import NavBarBottom from './components/navBarBottom';
import CardProntosEntrega from './components/cardProntosEntrega';

const produtosProntosEntrega = [
  {
    img: '/images/cento_doces_tradicional.jpg',
    nome: 'Cento de doces tradicionais',
    descricao: 'Brigadeiro tradicional, beijinho ou bicho de pé',
    preco: 'R$ 120,00'
  },
  {
    img: '/images/cento_doces.jpg',
    nome: 'Cento de doces finos',
    descricao: 'Ninho com Nutella, paçoca, doce de leite, Ferrero Rocher, maracujá, pistache',
    preco: 'R$ 140,00'
  },
  {
    img: '/images/brigadeiro.jpg',
    nome: 'Brigadeiro na caixa',
    descricao: 'Caixinha com 4 sabores variados',
    preco: 'R$ 12,00'
  },
  {
    img: '/images/cenouracomchocolate.jpg',
    nome: 'Doce 4',
    descricao: 'Descrição do doce 4',
    preco: 'R$ 30,00'
  },
];

function ProdutosProntosEntrega() {
  return (
    <div>
      <Navbar />      
      <div className="content">
        <h2>Produtos Pronto para Entrega</h2>
        <div className="cards-container">
          {produtosProntosEntrega.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdutosProntosEntrega;
