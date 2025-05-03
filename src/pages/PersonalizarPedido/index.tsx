import React from "react";
import "./personalizarPedido.sass";
import Navbar from '../components/Navbar/navbar';
import { Bolos } from "../Home/Home";
import CardProntosEntrega from '../components/CardProntosEntrega/cardProntosEntrega';

<div className="opcoes-encomenda">
  <h2>Produtos à pronta Entrega</h2>
  <div className="produtos-grid">
    {Bolos.map((produto, index) => (
    <CardProntosEntrega key={index} produto={produto} />
))}

  </div>
</div>

const PersonalizarPedido = () => {
  return (
    <div>
        <Navbar/>
        <div className="personalizar-pedido">
            <h2>Personalize seu pedido</h2>
            <form className="pedido-form">
            <div className="input-group">
             <label>Tipo de Pedido</label>
             <input type="text" />
        </div>

        <div className="input-group">
          <label>Quantidade</label>
          <input type="number" />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Sabor</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Tamanho</label>
            <input type="text" />
          </div>
        </div>

        <div className="input-group">
          <label>Descrição Personalizada</label>
          <textarea rows={4}></textarea>
        </div>

        <div className="input-group">
          <label>Opções de entrega</label>
          <div className="radio-group">
            <label><input type="radio" name="opcaoEntrega" /> Entrega</label>
            <label><input type="radio" name="opcaoEntrega" /> Retirada</label>
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Data de Entrega</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Hora de Entrega</label>
            <input type="time" />
          </div>
        </div>

        <button type="submit" className="botao-pagar">PAGAR</button>
      </form>
    </div>
    </div>
  );
};

export default PersonalizarPedido;
