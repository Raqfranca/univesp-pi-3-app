import React, { useState, FormEvent } from 'react';
import './loginPage.sass';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://univesp-pi-3-api.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('userPermission', data.userPermission);

      console.log('Login realizado com sucesso!');
    

      window.location.href = '/pedidos';
    } catch (error) {
      console.error(error);
      setError('Email ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="signup-text">
          Não tem conta? <a href="/signup">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
