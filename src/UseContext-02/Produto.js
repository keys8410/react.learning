import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <div>
      Produtos:
      {dados.map(({ id, nome }) => (
        <li key={id}>{nome}</li>
      ))}
    </div>
  );
};

export default Produto;
