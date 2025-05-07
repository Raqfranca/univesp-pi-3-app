import React, { useState } from "react";
import "./ProductModal.sass";

interface Product {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

interface ProductModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState<Product>({
    nome: "",
    descricao: "",
    preco: 0,
    imagem: "",
    categoria: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "preco" ? parseFloat(value) : value,
    }));
  };

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch("https://univesp-pi-3-api.onrender.com/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, tipo: "encomenda" }),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto");
      }
  
      alert("Produto cadastrado com sucesso!");
      window.location.reload();
      onClose(); 
  
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao cadastrar produto");
    }
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Novo Produto</h2>
        <form onSubmit={handleSaveProduct}>
          <label>
            Nome:
            <input name="nome" value={form.nome} onChange={handleChange} required />
          </label>
          <label>
            Descrição:
            <textarea name="descricao" value={form.descricao} onChange={handleChange} />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="preco"
              value={form.preco}
              onChange={handleChange}
              step="0.01"
              required
            />
          </label>
          <label>
            Categoria:
            <input name="categoria" value={form.categoria} onChange={handleChange} />
          </label>
          <label>
            URL da Imagem:
            <input name="imagem" value={form.imagem} onChange={handleChange} />
          </label>
          <div className="modal-actions">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;

