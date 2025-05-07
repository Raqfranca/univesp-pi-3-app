import React, { useState } from "react";
import "./ProductModal.sass";

interface Product {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

interface ProductModalProps {
  onClose: () => void;
  onSave: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, onSave }) => {
  const [form, setForm] = useState<Product>({
    nome: "",
    descricao: "",
    preco: 0,
    imagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "preco" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Novo Produto</h2>
        <form onSubmit={handleSubmit}>
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
