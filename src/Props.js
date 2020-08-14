import React from 'react';
import Input from './Props_form/Input';
import Button from './Props_form/Button';

/*
  const Titulo = ({ texto, cor, children }) => {
    return (
      <>
        <h1 style={{ color: cor }}>{texto}</h1>
        <span style={{ color: 'blue' }}>{children}</span>
      </>
    );
  };

  return (
    <div>
      <Titulo cor="red" texto="EU SOU UM TÍTULO">
        EU SOU UM ELEMENTO FILHO <br />EU SOU OUTRO ELEMENTO FILHO
      </Titulo>
    </div>
  );
*/

const App = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      <Button />
    </div>
  );
};

export default App;
