import React from 'react';
import style from './Produto.module.css';

console.log(style);

const Produto = () => {
  return (
    <div>
      <h1 className={style.titulo}>Notebook</h1>
      <p className={style.preco}>Preço: R$ 1999,00</p>
      <button className={style.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
