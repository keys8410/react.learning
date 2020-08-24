import React from 'react';
import { GlobalStorage } from './UseContext-01/GlobalContext';
import Produto from './UseContext-01/Produto';

const UseContext_01 = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default UseContext_01;
