import React from 'react';

const Header = () => {
  console.log('Header.js renderizado...');
  return <h1>Header aqui...</h1>;
};

export default React.memo(Header);
