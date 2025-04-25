import React, { useRef } from "react";
import "./Carrossel.sass";

// Lista de doces exibidos no carrossel
const doces = [
  { id: 1, nome: "Beijinho", imagem: "./images/beijinho.jpg" },
  { id: 2, nome: "Bicho de pé", imagem: "./images/bichodepe.jpg" },
  { id: 3, nome: "Brigadeiro", imagem: "./images/brigadeiro.jpg" },
  { id: 4, nome: "Donnut cenoura", imagem: "./images/cenouracomchocolate.jpg" },
  { id: 5, nome: "Cento Tradicional", imagem: "./images/cento_doces_tradicional.jpg" },
  { id: 6, nome: "Gelado de oreo", imagem: "./images/gelado_oreo.jpg" },
  { id: 7, nome: "Beijinho", imagem: "./images/beijinho.jpg" },
  { id: 8, nome: "Bicho de pé", imagem: "./images/bichodepe.jpg" },
  { id: 9, nome: "Brigadeiro", imagem: "./images/brigadeiro.jpg" },  
  { id: 10, nome: "Donnut Cenoura", imagem: "./images/cenouracomchocolate.jpg" },
];

export default function Carrossel() {
  // Referência ao container do carrossel, para aplicar scroll programaticamente
  const containerRef = useRef<HTMLDivElement>(null);

  // Função que faz o scroll para frente ou para trás
  const scroll = (offset: number) => {
    containerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="carrossel">
      <h2 className="carrossel__titulo">Mais pedidos</h2>

      <div className="carrossel__wrapper">
        <button className="carrossel__btn left" onClick={() => scroll(-220)}>←</button>

        <div className="carrossel__container" ref={containerRef}>
          {doces.map((doce) => (
            <div className="carrossel__item" key={doce.id}>
              <img src={doce.imagem} alt={doce.nome} />
              <p className="carrossel__label">{doce.nome}</p>
            </div>
          ))}
        </div>

        <button className="carrossel__btn right" onClick={() => scroll(220)}>→</button>
      </div>
    </div>
  );
}
