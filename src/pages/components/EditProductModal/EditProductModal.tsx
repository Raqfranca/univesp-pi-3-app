import React, { useState } from "react";
import "./EditProductModal.sass";
import { LineWave } from "react-loader-spinner";

interface Product {
  _id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

interface EditProductModalProps {
  onClose: () => void;
  product: Product;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ onClose, product }) => {
  const [form, setForm] = useState<Product>(product);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "preco" ? parseFloat(value) : value,
    }));
  };

  const handleUpdateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://univesp-pi-3-api.onrender.com/produtos/${form._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar produto");
      }

      alert("Produto atualizado com sucesso!");
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao atualizar produto");
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Produto</h2>

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
          <form onSubmit={handleUpdateProduct}>
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
              <button type="submit" className="update-button">Atualizar</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProductModal;
