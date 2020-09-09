import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="/"
            className={styles.link}
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            to="contato"
            className={styles.link}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
