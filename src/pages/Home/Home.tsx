import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import './home.sass'
import CardProntosEntrega from '../components/CardProntosEntrega/cardProntosEntrega';
import Carrossel from "../components/Carrossel/Carrossel";


const produtosProntosEntrega = [
  { img: '/images/cento_doces_tradicional.jpg', nome: 'Cento de doces tradicionais', descricao: 'Brigadeiro tradicionar, beijinho ou bicho de pé', preco: 'RS: 120,00' },
  { img: '/images/cento_doces.jpg', nome: 'Cento de doces finos', descricao: 'Ninho com nutella, paçoca, doce de leite, ferrero rocher, maraccuja, pistache', preco: 'RS: 140,00' },
  { img: '/images/brigadeiro.jpg', nome: 'Brigadeiro na caixa', descricao: 'caixinha com 4 sabores variados', preco: 'RS: 12,00' },
  { img: '/images/cenouracomchocolate.jpg', nome: 'Doce 4', descricao: 'Descrição do doce 3', preco: 'RS: 30,00' },
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2>Os mais pedidos</h2>
        <Carrossel />

        <h2>Produtos Pronta a Entrega</h2>
        <div className="cards-container">
          {produtosProntosEntrega.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-menu">
          <Link>Início</Link>
          <Link>Carrinho</Link>
          <Link>Login</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
