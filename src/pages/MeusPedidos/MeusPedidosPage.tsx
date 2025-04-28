import React from 'react';
import './meusPedidosPage.sass';

type Pedido = {
  id: number;
  produto: string;
  quantidade: number;
  status: 'Pendente' | 'Em andamento' | 'Concluído';
};

const pedidosMock: Pedido[] = [
  { id: 1, produto: 'Bolo de Chocolate', quantidade: 1, status: 'Concluído' },
  { id: 2, produto: 'Torta de Limão', quantidade: 2, status: 'Em andamento' },
  { id: 3, produto: 'Cupcake', quantidade: 6, status: 'Pendente' },
];

const MeusPedidosPage: React.FC = () => {
  return (
    <div className="meus-pedidos-page">
      <div className="meus-pedidos-container">
        <h1>Meus Pedidos</h1>
        <ul>
          {pedidosMock.map((pedido) => (
            <li key={pedido.id} className={`pedido-item ${pedido.status.toLowerCase().replace(' ', '-')}`}>
              <strong>{pedido.produto}</strong> - {pedido.quantidade} unidade(s)
              <span className="status">{pedido.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeusPedidosPage;
