import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.sass'
import Home from './pages/Home';
import ProdutosProntosEntrega from './pages/produtosProntosEntrega';
import Sobre from './pages/sobre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos-prontos-entrega" element={<ProdutosProntosEntrega />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}


export default App;
