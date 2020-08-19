import React from 'react';
import Produto from './useState-03/Produto';

const UseState = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const handleClick = async (e) => {
    setLoading(true);

    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const resJson = await res.json();

    setDados(resJson);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Tablet</button>

      {loading && <p>Carregando...</p>}
      {!loading && dados ? (
        <Produto dados={dados} />
      ) : (
        <p>
          <br />
          Nenhum item selecionado.
        </p>
      )}
    </div>
  );
};

export default UseState;
