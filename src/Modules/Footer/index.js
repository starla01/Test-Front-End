// Librerías
import React from "react";

// Estilos
import styles from "./index.module.sass";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.top}>content Top</div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottom}>content Bottom</div>
      </div>
    </div>
  );
}
