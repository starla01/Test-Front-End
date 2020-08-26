// @flow

// Librerías
import React from 'react';

// Componentes
import { ReactComponent as LogoIcon } from '../../Components/Icons/logo-icon.svg';

import Search from '../Search';

// Estilos
import styles from './index.module.sass';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>logo</div>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.profileData}>
          <div className={styles.user}>
            <div className={styles.joinPathsUserIcon}></div>
            <span>Fernando Robles</span>
          </div>
          <div className={styles.cart}></div>
        </div>
      </div>
    </div>
  );
}
