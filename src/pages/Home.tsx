import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import NavBarBottom from './components/navBarBottom';
import './home.sass'
import CardMaisPedidos from './components/cardMaisPedidos';
import CardProntosEntrega from './components/cardProntosEntrega';

const produtosMaisPedidos = [
  { img: '/images/beijinho.jpg', nome: 'Doce 1'},
  { img: '/images/bichodepe.jpg', nome: 'Doce 2'},
  { img: '/images/brigadeiro.jpg', nome: 'Doce 3'},
  { img: '/images/cenouracomchocolate.jpg', nome: 'Doce 4'},
  { img: '/images/paodemel.jpg', nome: 'Doce 5'},
  { img: '/images/gelatodeoreo.jpg', nome: 'Doce 6'},
];

const produtosProntosEntrega = [
  { img: '/images/beijinho.jpg', nome: 'Doce 1', descricao: 'Descrição do doce 3', preco: 'RS: 10,00'  },
  { img: '/images/bichodepe.jpg', nome: 'Doce 2', descricao: 'Descrição do doce 4', preco: 'RS: 15,00' },
  { img: '/images/brigadeiro.jpg', nome: 'Doce 3', descricao: 'Descrição do doce 3', preco: 'RS: 20,00' },
  { img: '/images/cenouracomchocolate.jpg', nome: 'Doce 4', descricao: 'Descrição do doce 3', preco: 'RS: 30,00' },
];

function Home() {
  return (
    <div>
      <Navbar />
      <NavBarBottom />

      <div className="content">
        <h2>Os mais pedidos</h2>

        <div className="cards-container">
          {produtosMaisPedidos.map((produto, index) => (
            <CardMaisPedidos key={index} produto={produto} />
          ))}
        </div>

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
