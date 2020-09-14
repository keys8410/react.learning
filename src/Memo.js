import React from 'react';
import Header from './Memo/Header';

const Memo = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default Memo;
