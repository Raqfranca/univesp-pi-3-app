import React, { useState, useMemo } from "react";
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from "@tanstack/react-table"; 
import Navbar from "pages/components/Navbar/navbar";
import './listaDeProdutos.sass';
import ProductModal from "pages/components/ProductModal/ProductModal";
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://univesp-pi-3-api.onrender.com/produtos")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      }
    }
  
    fetchProducts()
  }, [])
  

  const handleSave = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleSaveProduct = (newProduct: Product) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }])
    setShowModal(false)
  }

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
  
  const handleEdit = (product: Product) => {
    const newNome = prompt("Novo nome:", product.nome);
    const newPreco = prompt("Novo preço:", product.preco.toString());
    const newDescricao = prompt("Nova descrição:", product.descricao);
    const newCategoria = prompt("Nova categoria:", product.categoria || "");
    const newQuantidade = prompt("Nova quantidade:", product.quantidade?.toString() || "0");

    if (newNome && newPreco && newDescricao && newCategoria && newQuantidade) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product._id
            ? {
                ...p,
                nome: newNome,
                preco: parseFloat(newPreco),
                descricao: newDescricao,
                categoria: newCategoria,
                quantidade: parseInt(newQuantidade),
              }
            : p
        )
      );
    }
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("nome", {
        header: "Nome",
        cell: (info) => info.getValue(),
      }),
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
            <button onClick={() => handleEdit(row.original)}>Editar</button>
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
          
          {/* Botão de Criar Novo Produto */}
          {showModal && (
            <ProductModal
              onClose={() => setShowModal(false)}
              onSave={handleSaveProduct}
            />
          )}

          <button
            onClick={handleAddProduct}
            style={{ marginBottom: "20px" }}
            className="cadastrar-btn"
          >
            Cadastrar Produto
          </button>
          
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
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;


