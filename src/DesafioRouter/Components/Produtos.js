import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

const Produto = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Home" description="Descrição do site." />

      {produtos.map(({ id, nome, fotos }) => (
        <Link to={`produto/${id}`} key={id}>
          <img src={fotos[0].src} alt={fotos[0].title} />
          <h1 className={styles.nome}>{nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produto;
