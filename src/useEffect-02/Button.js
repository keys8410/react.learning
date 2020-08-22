import React from 'react';

const Button = (props) => {
  const { nome } = props;
  return <button onClick={handleClick}>{nome}</button>;
};

export default Button;
