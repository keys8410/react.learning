import React from 'react';
import Produto from './Produto';

const ButtonProduto = () => {
  const [dados, setDados] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((res) => res.json())
      .then((json) => setProduto(json));
  }, []);

  const handleClick = async (e) => {
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,
    );
    const json = await res.json();

    setDados(json);
  };

  return (
    <div>
      {produto && (
        <ul>
          {produto.map(({ id, nome }) => (
            <li key={id}>
              <button onClick={handleClick}>{nome}</button>
            </li>
          ))}
        </ul>
      )}
      <div>{dados && <Produto props={dados} />}</div>
    </div>
  );
};

export default ButtonProduto;
