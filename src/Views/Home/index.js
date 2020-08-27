// Librerías
import React from 'react';

// Estilos
import styles from './index.module.sass';

// Modules
import Banner from '../../Modules/Banner';
import Carrusel from '../../Modules/Carrusel';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.content}>
        <div className={styles.containerCarrusel}>
          <Carrusel title="Mais Vendidos" />
        </div>
      </div>
    </div>
  );
}
