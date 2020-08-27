// Librerias
import React from 'react';

// Componentes
import { Button } from '../../../../Components/Button';

// Estilos
import styles from './index.module.sass';

// Iconos
import { ReactComponent as StarFullIcon } from '../../../../Components/Icons/full-star.svg';
import { ReactComponent as StarIcon } from '../../../../Components/Icons/star.svg';

export default function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="images/zapato.png" alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>SAPATO FLOATER PRETO</div>
        <div className={styles.stars}>
          <StarFullIcon />
          <StarFullIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className={styles.discount}>
          <span>de R$ 299,00</span>
        </div>
        <div className={styles.price}>
          <span>por R$ 199,00</span>
        </div>
        <div className={styles.offer}>
          <span>ou em 10x de R$ 29,90</span>
        </div>
        <Button type="primary" classname={styles.classButton}>
          <span className={styles.bigTextButton}>Comprar</span>
        </Button>
      </div>
    </div>
  );
}
