import React from './node_modules/react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form;
