import React from 'react';
import Produto from './Animate/Produto';
import './Animate/Animate.css';

const Animate_01 = () => {
  const [ativar, setAtivar] = React.useState(false);
  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default Animate_01;
