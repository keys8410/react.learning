import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Fazer Login');

    navigate('/sobre');
  };

  return (
    <div>
      <Head title="Login" description="Essa é a descrição do Login" />

      <h1>LOGIN</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
