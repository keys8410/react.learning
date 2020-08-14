import React from 'react';

const Header = () => {
  return (
    <header>
      <ul>
        <li key="home">
          <a href="/">Home</a>
        </li>
        <li key="produtos">
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
