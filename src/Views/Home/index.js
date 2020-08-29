// Librerías
import React from 'react';

// Estilos
import styles from './index.module.sass';

// Modules
import Banner from '../../Modules/Banner';
import Carrusel from '../../Modules/Carrusel';

// Constantes
import { PHONE, TABLET } from '../../constants';

export default function Home({ screenSize }) {
  const isPhone = PHONE === screenSize;
  const isTablet = TABLET === screenSize;

  return (
    <div className={styles.container}>
      <div className={`${styles.banner} ${isPhone && styles.phone}`}>
        <Banner screenSize={screenSize} />
      </div>
      <div
        className={`${styles.content} ${
          (isPhone && styles.phone) || (isTablet && styles.tablet) || ''
        }`}>
        <div className={styles.containerCarrusel}>
          <Carrusel title="Mais Vendidos" screenSize={screenSize} />
        </div>
      </div>
    </div>
  );
}
