import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/global.sass'
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/sobre';
import LoginPage from 'pages/Login/LoginPage';
import ProductListPage from 'pages/Produtos/listaDeProdutos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/produtos" element ={< ProductListPage />} />
      </Routes>
    </Router>
  );
}


export default App;
