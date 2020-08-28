// Librerías
import React from 'react';

// Componentes
import { ReactComponent as SearchIcon } from '../../Components/Icons/search-icon.svg';

// Estilos
import styles from './index.module.sass';

export default function Search({ screenSize }) {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.searchInput} placeholder="O que está procurando?" />
      <SearchIcon />
    </div>
  );
}
