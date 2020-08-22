import React from 'react';
import Produto from './useEffect-01/Produto';

const UseEffect = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );

  /*
  const [contar, setContar] = React.useState(1);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    console.log('executado!');
  }, []);

  React.useEffect(() => {
    document.title = `Total: ${contar}`;
  }, [contar]);
 
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
  */
};

export default UseEffect;
