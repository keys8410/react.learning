import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <p>Essa é a HOME</p>
      <ul>
        <li>
          <Link to="produto/notebook">Notebook</Link>
        </li>
        <li>
          <Link to="produto/smartphone">Smartphone</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
