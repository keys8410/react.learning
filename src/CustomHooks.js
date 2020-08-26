import React from 'react';
import useLocalStorage from './CustomHooks/UseLocalStorage';
import UseFetch from './CustomHooks/UseFetch';

const CustomHooks = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = UseFetch();

  React.useEffect(() => {
    const fetchDATA = async () => {
      const { res, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(res, json);
    };

    fetchDATA();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) {
    return (
      <div>
        <h1>Produto preferido: {produto}</h1>
        <button
          onClick={({ target }) => {
            setProduto(target.innerText);
          }}
        >
          notebook
        </button>
        <br />
        <br />
        <button
          onClick={({ target }) => {
            setProduto(target.innerText);
          }}
        >
          SMARTPHONE
        </button>

        {data.map(({ id, nome }) => (
          <div key={id}>
            <h1>{nome}</h1>
          </div>
        ))}
      </div>
    );
  } else return null;
};

export default CustomHooks;
