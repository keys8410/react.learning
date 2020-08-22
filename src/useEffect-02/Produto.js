import React from 'react';

const Produto = ({ props }) => {
  console.table(props);
  const { id, nome } = props;

  return (
    <div>
      <h1>{nome}</h1>
    </div>
  );
};

export default Produto;
