import React from 'react';

const Produto = ({ dados }) => {
  const { nome, preco, fotos } = dados;

  console.log(preco);
  return (
    <div>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  );
};

export default Produto;
