import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.sass'
import Home from './pages/Home/Home';
import ProdutosProntosEntrega from './pages/ProdutosProntaEntrega/produtosProntosEntrega'
import Sobre from './pages/Sobre/sobre';
import PersonalizarPedido from 'pages/PersonalizarPedido';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos-prontos-entrega" element={<ProdutosProntosEntrega />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/encomendar" element ={<PersonalizarPedido />} />
      </Routes>
    </Router>
  );
}


export default App;
