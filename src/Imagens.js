import React from 'react';
import styles from './Imagens/Imagens.module.css';

import foto from './Imagens/foto.jpg';
import DogSvg from './Imagens/DogSvg';

const Imagens = () => {
  const [olho, setOlho] = React.useState(0);

  const handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 45 * i);
    }
    setOlho(4);
  };
  return (
    <div>
      <DogSvg color="red" olho={olho} />

      <p className={styles.fundo} onClick={handleClick}></p>

      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default Imagens;
