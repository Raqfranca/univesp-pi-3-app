import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.sass'
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import PersonalizarPedido from 'pages/PersonalizarPedido';
import LoginPage from 'pages/Login/LoginPage';
import CadastroPage from 'pages/Cadastro/CadastroPage';
import MeusPedidosPage from 'pages/MeusPedidos/MeusPedidosPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/encomendar" element ={<PersonalizarPedido />} />
        <Route path="/carinho" element ={<PersonalizarPedido />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/signup" element ={<CadastroPage />} />
        <Route path="/pedidos" element ={<MeusPedidosPage />} />
      </Routes>
    </Router>
  );
}


export default App;
