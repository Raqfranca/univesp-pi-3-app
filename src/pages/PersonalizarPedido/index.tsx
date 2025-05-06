import React from "react";
import "./personalizarPedido.sass";
import Navbar from '../components/Navbar/navbar';
import { Bolos } from "../Home/Home";
import CardProntosEntrega from '../components/CardProntosEntrega/cardProntosEntrega';

const PersonalizarPedido = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const form = event.currentTarget;
    const formData = new FormData(form);
  
    const data: { [key: string]: string } = {};
  
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
  
    try {
      const response = await fetch("http://localhost:3000/encomenda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        alert("Pedido enviado com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar o pedido.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o pedido.");
    }
  };
  
  

  return (
    <div>
      <Navbar />
      <div className="personalizar-pedido">
        <h2>Personalize seu pedido</h2>
        <form className="pedido-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Tipo de Pedido</label>
            <input type="text" name="tipoPedido" required />
          </div>

          <div className="input-group">
            <label>Quantidade</label>
            <input type="number" name="quantidade" required />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Sabor</label>
              <input type="text" name="sabor" required />
            </div>
            <div className="input-group">
              <label>Tamanho</label>
              <input type="text" name="tamanho" />
            </div>
          </div>

          <div className="input-group">
            <label>Descrição Personalizada</label>
            <textarea name="descricao" rows={4}></textarea>
          </div>

          <div className="input-group">
            <label>Opções de entrega</label>
            <div className="radio-group">
              <label><input type="radio" name="opcaoEntrega" value="entrega" required /> Entrega</label>
              <label><input type="radio" name="opcaoEntrega" value="retirada" /> Retirada</label>
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Data de Entrega</label>
              <input type="date" name="dataEntrega" required />
            </div>
            <div className="input-group">
              <label>Hora de Entrega</label>
              <input type="time" name="horaEntrega" required />
            </div>
          </div>

          <button type="submit" className="botao-pagar">FAZER PEDIDO</button>
        </form>

        <div className="opcoes-encomenda">
          <h2>Produtos à pronta Entrega</h2>
          <div className="produtos-grid">
            {Bolos.map((produto, index) => (
              <CardProntosEntrega key={index} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarPedido;
