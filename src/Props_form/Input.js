import React from 'react';

const Input = ({ id, label, ...props }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </p>
  );
};

export default Input;
