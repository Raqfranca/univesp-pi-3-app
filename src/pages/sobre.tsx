import React from 'react';
import Navbar from './components/navbar';
import NavBarBottom from './components/navBarBottom';
import './sobre.sass';


const Sobre = () => {
  return (
    <div className="sobre-page">
        <Navbar />
      {}
      <section className="secao quem-somos">
        <div className="texto">
          <h2>Quem é a Drii</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

          </p>
        </div>
        <div className="imagem redonda">
          <img src="/images/imagem_redonda.png" alt="Mulher com doces" />
        </div>
      </section>

      {}
      <section className="secao diferencial">
        <div className="imagem doce">
          <img src="/images/doces.avif" alt="Doce recheado" />
        </div>
        <div className="texto">
          <h2 className="destaque">Nosso diferencial</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
