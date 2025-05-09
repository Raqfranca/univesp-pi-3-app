import React from 'react';
import Navbar from '../components/Navbar/navbar';
import './sobre.sass';


const Sobre = () => {
  return (
    <div className="sobre-page">
        <Navbar />
      {}
      <section className="secao quem-somos">
        <div className="texto">
          <h2>Quem é a Drii?</h2>
          <p>
            A Drii é uma confeiteira apaixonada que aprendeu os primeiros segredos da doçaria com sua tia, 
            ainda na juventude. O que começou como uma simples curiosidade logo se transformou em vocação. 
            Hoje, além de encantar com seus doces feitos com amor e cuidado, 
            ela também é mãe de três filhos — sua maior fonte de inspiração. 
            Cada receita carrega um pouco da sua história, carinho e dedicação.
          </p>
        </div>
        <div className="imagem redonda">
          <img src="/images/imagem_redonda.png" alt="Mulher com doces" />
        </div>
      </section>

      {}
      <section className="secao diferencial">
        <div className="imagem doce">
          <img src="/images/doces.png" alt="Doce recheado" />
        </div>
        <div className="texto">
          <h2 className="destaque">Nosso diferencial</h2>
          <p>
            O que torna nossos doces únicos vai muito além dos ingredientes: é a qualidade impecável, 
            o sabor que surpreende a cada mordida e o carinho presente em cada etapa da produção. 
            Nossas receitas carregam técnicas transmitidas de geração em geração, combinando tradição familiar com toques modernos. 
            Cada produto é feito com atenção aos detalhes, resultando em uma experiência doce, autêntica e inesquecível.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
