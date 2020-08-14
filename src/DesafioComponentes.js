import React from 'react';
import Header from './DesafioComponentes/Header';
import Home from './DesafioComponentes/Home';
import Produtos from './DesafioComponentes/Produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />

      <Pagina />
    </section>
  );
};

export default App;
