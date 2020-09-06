import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Fazer Login');

    navigate('/sobre');
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
