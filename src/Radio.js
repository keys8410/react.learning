import React from 'react';

const Radio = () => {
  const [cor, setCor] = React.useState('');
  const [produto, setProduto] = React.useState('');

  return (
    <div>
      <form>
        <h2>Cor: {cor}</h2>

        <label>
          <input
            type="radio"
            name="cores"
            onChange={({ target }) => setCor(target.value)}
            value="azul"
          />
          Azul
        </label>

        <label>
          <input
            type="radio"
            name="cores"
            onChange={({ target }) => setCor(target.value)}
            value="amarelo"
          />
          Amarelo
        </label>
      </form>
      <br />
      <form>
        <h2>Produto: {produto}</h2>
        <label>
          <input
            type="radio"
            name="produto"
            onChange={({ target }) => setProduto(target.value)}
            value="smartphone"
          />
          Smartphone
        </label>

        <label>
          <input
            type="radio"
            name="produto"
            onChange={({ target }) => setProduto(target.value)}
            value="notebook"
          />
          Notebook
        </label>
      </form>
    </div>
  );
};

export default Radio;
