import React, { useState, FormEvent } from 'react';
import './cadastroPage.sass';

const CadastroPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    permission: '',
    address: {
      street: '',
      number: '',
      city: '',
      zipCode: '',
      complement: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados de Cadastro:', formData);
    // Aqui você pode enviar para sua API ou Firebase
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
      
          <input type="text" name="address.street" placeholder="Rua" value={formData.address.street} onChange={handleChange} required />
          <input type="text" name="address.number" placeholder="Número" value={formData.address.number} onChange={handleChange} required />
          <input type="text" name="address.city" placeholder="Cidade" value={formData.address.city} onChange={handleChange} required />
          <input type="text" name="address.zipCode" placeholder="CEP" value={formData.address.zipCode} onChange={handleChange} required />
          <input type="text" name="address.complement" placeholder="Complemento" value={formData.address.complement} onChange={handleChange} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
