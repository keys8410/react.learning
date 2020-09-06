import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
    console.log('EFEITO DE MUDANÇA DE ROTA ACONTECENDO');
  }, [location]);

  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        | <NavLink to="sobre">Sobre</NavLink> |{' '}
        <NavLink to="Login">Login</NavLink>
      </nav>
      <br />
    </div>
  );
};

export default Header;
