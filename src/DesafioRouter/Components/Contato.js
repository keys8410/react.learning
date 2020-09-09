import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="contato" description="Entre em contato." />

      <img src={foto} alt="Máquina de escrever" />

      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>yan.garcia@gmail.com</li>
          <li>61 9 8634-0312</li>
          <li>SHA Cj. 01 CH. 44C LT. 38</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
