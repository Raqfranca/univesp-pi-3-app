import React, { useState, useMemo } from "react";
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from "@tanstack/react-table"; 
import Navbar from "pages/components/Navbar/navbar";
import './listaDeProdutos.sass';
import ProductModal from "pages/components/ProductModal/ProductModal";
import { LineWave } from 'react-loader-spinner';
import { useEffect } from "react"

interface Product {
  _id: string
  nome: string
  descricao: string
  preco: number
  imagem: string
  tipo: string
  disponivel: boolean
  categoria?: string
  quantidade?: number
}

const columnHelper = createColumnHelper<Product>();

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch("https://univesp-pi-3-api.onrender.com/produtos");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setIsLoading(false); 
      }
    };
  
    fetchProducts();
  }, []);
  
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`https://univesp-pi-3-api.onrender.com/produtos/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Erro ao excluir produto");
      }
  
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto. Tente novamente.");
    }
  };
  

  const handleAddProduct = () => {
    setShowModal(true)
  }
    
  const columns = useMemo(
    () => [
      columnHelper.accessor("nome", {
        header: "Nome",
        cell: (info) => info.getValue(),
      }),
      {
        accessorKey: 'imagem',
        header: 'Foto',
        cell: ({ row }) => (
          <img 
            src={row.original.imagem} 
            alt={row.original.nome} 
            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} 
          />
        ),
      },
      columnHelper.accessor("preco", {
        header: "Preço (R$)",
        cell: (info) => `R$ ${info.getValue().toFixed(2)}`,
      }),
      columnHelper.accessor("descricao", {
        header: "Descrição",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("categoria", {
        header: "Categoria",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "actions",
        header: "Ações",
        cell: ({ row }) => (
          <div>
            <button onClick={() => handleDelete(row.original._id)} style={{ marginLeft: 10 }}>
              Excluir
            </button>
          </div>
        ),
      }),
    ],
    [products]
  );

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Navbar />
      <div className="product-list-page">
        <div className="product-list-container">
          <h1>Produtos Cadastrados</h1>
          
          {showModal && (
            <ProductModal
              onClose={() => setShowModal(false)}
            />
          )}

          <button
            onClick={handleAddProduct}
            style={{ marginBottom: "20px" }}
            className="cadastrar-btn"
          >
            Cadastrar Produto
          </button>
          
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
              <>
                <table className="product-table">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {products.length === 0 && <p style={{ marginTop: 20 }}>Nenhum produto cadastrado.</p>}
              </>
            )}          
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;


