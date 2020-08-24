import React from 'react';
import Produto from './UseContext-02/Produto';
import { GlobalStorage } from './UseContext-02/GlobalContext';
import Limpar from './UseContext-02/Limpar';

const UseContext_02 = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default UseContext_02;
