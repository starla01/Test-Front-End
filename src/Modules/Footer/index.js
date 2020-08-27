// Librerías
import React from 'react';

// Estilos
import styles from './index.module.sass';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.top}>content Top</div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottom}>
          <div id={styles.addressInfo} className={styles.block}>
            <h2 className={styles.title}>Localização</h2>
            <div className={styles.assetLine}></div>
            <div className={styles.address}>
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
              <p>Alphavile SP </p>
              <p>brasil@corebiz.ag </p>
              <p>+55 11 3090 1039</p>
            </div>
          </div>
          <div id={styles.contactInfo} className={styles.block}></div>
          <div id={styles.enterpriseInfo} className={styles.block}></div>
        </div>
      </div>
    </div>
  );
}
