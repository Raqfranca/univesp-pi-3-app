import React, { useState, useMemo } from "react";
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from "@tanstack/react-table"; // Ajuste conforme a versão e pacote do React Table que você está usando
import Navbar from "pages/components/Navbar/navbar";
import './listaDeProdutos.sass';
import ProductModal from "pages/components/ProductModal/ProductModal";

interface Product {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria?: string;
  quantidade?: number;
}

const produtosMock: Product[] = [
  { id: 1, nome: "Bolo de Chocolate", preco: 40, descricao: "Cobertura cremosa", categoria: "Bolos", quantidade: 10 },
  { id: 2, nome: "Cupcake de Morango", preco: 8, descricao: "Com chantilly", categoria: "Cupcakes", quantidade: 50 }
];

const columnHelper = createColumnHelper<Product>();

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(produtosMock);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleSaveProduct = (newProduct: Product) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }])
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir?");
    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== id));
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
          p.id === product.id
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
            <button onClick={() => handleDelete(row.original.id)} style={{ marginLeft: 10 }}>
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


