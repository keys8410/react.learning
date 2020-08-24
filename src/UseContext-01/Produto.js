import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { contar, setContar } = React.useContext(GlobalContext);
  return (
    <div>
      Nums: {contar}
      <br />
      <br />
      <button onClick={() => setContar(contar + 1)}>Click Me</button>
    </div>
  );
};

export default Produto;
