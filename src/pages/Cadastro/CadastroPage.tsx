import React, { useState, FormEvent } from 'react';
import './cadastroPage.sass';
import { LineWave } from 'react-loader-spinner';
import Navbar from 'pages/components/Navbar/navbar';

const CadastroPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: {
      street: '',
      number: '',
      city: '',
      zipCode: '',
      complement: '',
    },
  });

  const [loading, setLoading] = useState(false); 

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true); 

    const payload = {
      ...formData,
      permission: 'user', 
    };

    try {
      const response = await fetch('https://univesp-pi-3-api.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro ao cadastrar: ${response.status}`);
      }

      const data = await response.json();
      alert('Usuário cadastrado com sucesso!');
      window.location.href = '/login';

      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: {
          street: '',
          number: '',
          city: '',
          zipCode: '',
          complement: '',
        },
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }finally {
      setLoading(false); 
    }
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <h1>Cadastro</h1>
        {loading ? (
          <div className="loading-overlay">
            <LineWave
              visible={true}
              height="100"
              width="100"
              color="#7a3a53" 
              ariaLabel="line-wave-loading"
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default CadastroPage;

