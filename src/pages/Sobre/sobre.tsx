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
            Oie, meu nome é Drielli, mas pode me chamar de Drii! Tenho 29 anos, sou mãe de três e apaixonada por tudo que envolve o mundo da confeitaria 🤭💞
            Desde criança, a cozinha sempre foi meu lugar favorito. Cresci vendo minha avó e minha tia inventando delícias, e foi ali que meu amor por criar doces começou. 
            Em 2024, mesmo com medo, decidi dar o primeiro passo com apenas alguns docinhos — e não parei mais! Nosso pão de mel, por exemplo, virou um verdadeiro sucesso 😍
            Cada receita que faço carrega um pedacinho da minha história, muito carinho e dedicação. Meus filhos são minha maior inspiração e tudo que faço é com muito amor, para adoçar momentos e corações. 💖
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
           O que torna nossos doces realmente especiais vai muito além dos ingredientes. É o amor, o carinho e o cuidado presente em cada detalhe — 
           desde a escolha dos produtos até a entrega final. 
           Cada mordida é como aquele abraço quentinho de quem a gente ama 💞
           Nossas receitas unem tradição familiar e toques modernos, com técnicas passadas de geração em geração. 
           Tudo é feito com atenção, afeto e dedicação, resultando em uma experiência doce, autêntica e inesquecível — do jeitinho que você merece!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
