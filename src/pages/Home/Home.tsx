import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import './home.sass'
import CardProntosEntrega from '../components/CardProntosEntrega/cardProntosEntrega';
import NavBarBottom from 'pages/components/NavbarBottom/navBarBottom';


export const Bolos = [
  { img: '/images/bolo_chocolate.png', nome: 'Bolo de Chocolate', descricao: 'Bolo sabor chocolate, podendo conter adicionais diversos', preco: 'R$: 120,00' },
  { img: '/images/bolo-abacaxi.png', nome: 'Bolo de Abacaxi', descricao: 'Bolo de abacaxi, ', preco: 'R$: 130,00' },
  { img: '/images/bolo-morango.png', nome: 'bolo De Morango', descricao: 'Bolo de morango com recheio e frutas frescas', preco: 'R$: 140,00' },
  { img: '/images/bolo-pistache.png', nome: 'Bolo de Pistache', descricao: 'Sensação do momento, bolo de pistache com pedaços de morango', preco: 'R$: 150,00' },
  { img: '/images/bolo_chocolate.png', nome: 'Bolo de Chocolate', descricao: 'Bolo sabor chocolate, podendo conter adicionais diversos', preco: 'R$: 120,00' },
  { img: '/images/bolo-abacaxi.png', nome: 'Bolo de Abacaxi', descricao: 'Bolo de abacaxi, ', preco: 'R$: 130,00' },
  { img: '/images/bolo-morango.png', nome: 'bolo De Morango', descricao: 'Bolo de morango com recheio e frutas frescas', preco: 'R$: 140,00' },
  { img: '/images/bolo-pistache.png', nome: 'Bolo de Pistache', descricao: 'Sensação do momento, bolo de pistache com pedaços de morango', preco: 'R$: 150,00' },
  { img: '/images/bolo_chocolate.png', nome: 'Bolo de Chocolate', descricao: 'Bolo sabor chocolate, podendo conter adicionais diversos', preco: 'R$: 120,00' },
  { img: '/images/bolo-abacaxi.png', nome: 'Bolo de Abacaxi', descricao: 'Bolo de abacaxi, ', preco: 'R$: 130,00' },
  { img: '/images/bolo-morango.png', nome: 'bolo De Morango', descricao: 'Bolo de morango com recheio e frutas frescas', preco: 'R$: 140,00' },
  { img: '/images/bolo-pistache.png', nome: 'Bolo de Pistache', descricao: 'Sensação do momento, bolo de pistache com pedaços de morango', preco: 'R$: 150,00' },
  
];

export const CentoDoces = [
  { img: '/images/cento_doces_tradicional.jpg', nome: 'Cento de doces tradicionais', descricao: 'Brigadeiro tradicionar, beijinho ou bicho de pé', preco: 'R$: 120,00' },
  { img: '/images/cento_doces.jpg', nome: 'Cento de doces finos', descricao: 'Ninho com nutella, paçoca, doce de leite, ferrero rocher, maraccuja, pistache', preco: 'R$: 140,00' },
  { img: '/images/brigadeiro.jpg', nome: 'Brigadeiro na caixa', descricao: '100 brigadeiros para sua festa', preco: 'R$: 12,00' },
  { img: '/images/bichodepe.jpg', nome: 'Bicho De Pé', descricao: 'Bicho de pé', preco: 'R$: 130,00' },
  { img: '/images/cento_doces_tradicional.jpg', nome: 'Cento de doces tradicionais', descricao: 'Brigadeiro tradicionar, beijinho ou bicho de pé', preco: 'R$: 120,00' },
  { img: '/images/cento_doces.jpg', nome: 'Cento de doces finos', descricao: 'Ninho com nutella, paçoca, doce de leite, ferrero rocher, maraccuja, pistache', preco: 'R$: 140,00' },
  { img: '/images/brigadeiro.jpg', nome: 'Brigadeiro na caixa', descricao: '100 brigadeiros para sua festa', preco: 'R$: 12,00' },
  { img: '/images/bichodepe.jpg', nome: 'Bicho De Pé', descricao: 'Bicho de pé', preco: 'R$: 130,00' },
  { img: '/images/cento_doces_tradicional.jpg', nome: 'Cento de doces tradicionais', descricao: 'Brigadeiro tradicionar, beijinho ou bicho de pé', preco: 'R$: 120,00' },
  { img: '/images/cento_doces.jpg', nome: 'Cento de doces finos', descricao: 'Ninho com nutella, paçoca, doce de leite, ferrero rocher, maraccuja, pistache', preco: 'R$: 140,00' },
  { img: '/images/brigadeiro.jpg', nome: 'Brigadeiro na caixa', descricao: '100 brigadeiros para sua festa', preco: 'R$: 12,00' },
  { img: '/images/bichodepe.jpg', nome: 'Bicho De Pé', descricao: 'Bicho de pé', preco: 'R$: 130,00' },
];

export const DeliciasDaDri = [
  { img: '/images/paodemel.jpg', nome: 'Pão de Mel', descricao: 'Sabores de Prestígio, doce de leite e brigadeiro', preco: 'R$: 8,90' },
  { img: '/images/caixinha-mista.jpeg', nome: 'Caixinha mista', descricao: 'Quatro docinhos, sendo do mesmo sabor ou sortidos', preco: 'R$: 14,00' },
  { img: '/images/coxinha-chocolate.jpeg', nome: 'Coxinha de chocolate recheada', descricao: 'Coxinha de chocolate com recheio de morango', preco: 'R$: 12,00' },
  { img: '/images/gelado-pistache.jpeg', nome: 'Copos de gelados diferentes', descricao: 'Sabores dos copos: pistache, prestigio, chocolate, morango, brownie, uva', preco: 'R$: 21,00' },
  { img: '/images/paodemel.jpg', nome: 'Pão de Mel', descricao: 'Sabores de Prestígio, doce de leite e brigadeiro', preco: 'R$: 8,90' },
  { img: '/images/caixinha-mista.jpeg', nome: 'Caixinha mista', descricao: 'Quatro docinhos, sendo do mesmo sabor ou sortidos', preco: 'R$: 14,00' },
  { img: '/images/coxinha-chocolate.jpeg', nome: 'Coxinha de chocolate recheada', descricao: 'Coxinha de chocolate com recheio de morango', preco: 'R$: 12,00' },
  { img: '/images/gelado-pistache.jpeg', nome: 'Copos de gelados diferentes', descricao: 'Sabores dos copos: pistache, prestigio, chocolate, morango, brownie, uva', preco: 'R$: 21,00' },
  { img: '/images/paodemel.jpg', nome: 'Pão de Mel', descricao: 'Sabores de Prestígio, doce de leite e brigadeiro', preco: 'R$: 8,90' },
  { img: '/images/caixinha-mista.jpeg', nome: 'Caixinha mista', descricao: 'Quatro docinhos, sendo do mesmo sabor ou sortidos', preco: 'R$: 14,00' },
  { img: '/images/coxinha-chocolate.jpeg', nome: 'Coxinha de chocolate recheada', descricao: 'Coxinha de chocolate com recheio de morango', preco: 'R$: 12,00' },
  { img: '/images/gelado-pistache.jpeg', nome: 'Copos de gelados diferentes', descricao: 'Sabores dos copos: pistache, prestigio, chocolate, morango, brownie, uva', preco: 'R$: 21,00' },
];

export const Sazonal = [
  { img: '/images/ovopascoa.jpg', nome: 'Ovos de pascoa personalizados', descricao: 'ovos recheados de diversos sabores', preco: 'R$: 120,00' },
  { img: '/images/pe-moleque.webp', nome: 'doces para festa junina', descricao: 'doces para a epoca mais doce do ano, pé de moleque, bolo de milho, e outros ', preco: 'R$: 50,00' },
  { img: '/images/namorados.jpg', nome: 'Doces para dia dos namorados', descricao: 'caixinha com sabores variados e personalizados', preco: 'R$: 55,00' },
  { img: '/images/panetone.webp', nome: 'Panetones', descricao: 'Panetones truffados', preco: 'R$: 80,00' },
  { img: '/images/ovopascoa.jpg', nome: 'Ovos de pascoa personalizados', descricao: 'ovos recheados de diversos sabores', preco: 'R$: 120,00' },
  { img: '/images/pe-moleque.webp', nome: 'doces para festa junina', descricao: 'doces para a epoca mais doce do ano, pé de moleque, bolo de milho, e outros ', preco: 'R$: 50,00' },
  { img: '/images/namorados.jpg', nome: 'Doces para dia dos namorados', descricao: 'caixinha com sabores variados e personalizados', preco: 'R$: 55,00' },
  { img: '/images/panetone.webp', nome: 'Panetones', descricao: 'Panetones truffados', preco: 'R$: 80,00' },
  { img: '/images/ovopascoa.jpg', nome: 'Ovos de pascoa personalizados', descricao: 'ovos recheados de diversos sabores', preco: 'R$: 120,00' },
  { img: '/images/pe-moleque.webp', nome: 'doces para festa junina', descricao: 'doces para a epoca mais doce do ano, pé de moleque, bolo de milho, e outros ', preco: 'R$: 50,00' },
  { img: '/images/namorados.jpg', nome: 'Doces para dia dos namorados', descricao: 'caixinha com sabores variados e personalizados', preco: 'R$: 55,00' },
  { img: '/images/panetone.webp', nome: 'Panetones', descricao: 'Panetones truffados', preco: 'R$: 80,00' },
];

function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="content">
                <h2>Bolos</h2>
        <div className="cards-container">
          {Bolos.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>

      <div className="content">
                <h2>Cento de Doces</h2>
        <div className="cards-container">
          {CentoDoces.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>

      <div className="content">
                <h2>Delicias Da Drii</h2>
        <div className="cards-container">
          {DeliciasDaDri.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>

      <div className="content">
                <h2>Temas Sazonais</h2>
        <div className="cards-container">
          {Sazonal.map((produto, index) => (
            <CardProntosEntrega key={index} produto={produto} />
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-menu">
          <NavBarBottom/>
        </div>
      </footer>
    </div>
  );
}

export default Home;
