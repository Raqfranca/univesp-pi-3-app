import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import CardProntosEntrega from '../components/CardProntosEntrega/cardProntosEntrega';
import './home.sass';
import { LineWave } from 'react-loader-spinner';

interface Produto {
  _id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  disponivel: boolean;
  tipo: string;
}

type ProdutosPorCategoria = {
  [categoria: string]: Produto[];
};

function Home() {
  const [products, setProducts] = useState<Produto[]>([]);
  const [groupedByCategory, setGroupedByCategory] = useState<ProdutosPorCategoria>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://univesp-pi-3-api.onrender.com/produtos");
        const data: Produto[] = await response.json();
        setProducts(data);

        // Agrupar por categoria
        const grouped: ProdutosPorCategoria = data.reduce((acc, produto) => {
          const categoria = produto.categoria || 'Outros';
          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(produto);
          return acc;
        }, {} as ProdutosPorCategoria);

        setGroupedByCategory(grouped);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <LineWave 
              height="100"
              width="100"
              color="#7a3a53"
              ariaLabel="line-wave"
              visible={true}
            />
          </div>
        ) : (
          Object.entries(groupedByCategory as ProdutosPorCategoria).map(([categoria, produtos]) => (
            <div key={categoria}>
              <h2>{categoria}</h2>
              <div className="cards-container">
                {produtos.map((produto) => (
                  <CardProntosEntrega key={produto._id} produto={produto} />
                ))}
              </div>
            </div>
          ))          
        )}
      </div>
    </div>
  );
}

export default Home;


