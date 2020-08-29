// Librerias
import React from 'react';

// Componentes
import { Button } from '../../../../Components/Button';

// Estilos
import styles from './index.module.sass';

// Utilerias
import currency from '../../../../Utils/currency';

// Iconos
import { ReactComponent as StarIcon } from '../../../../Components/Icons/star.svg';
import { ReactComponent as OfferTag } from '../../../../Components/Icons/offer-tag.svg';
import { ReactComponent as StarFullIcon } from '../../../../Components/Icons/full-star.svg';

// Constantes
import { PHONE, DESKTOP } from '../../../../constants';

/**
 * Product Component
 *
 * @name Product
 * @description Componente para renderizar Cajas Productos en listados de productos
 *
 *
 * @param {Objet} params props del componente React
 * @param {Number} params.screenSize Propiedad que contiene el nombre del breackpoin para el ancho de la pantall actual
 *
 * @example
 *
 *     <Footer screenSize={screenSize} />
 *
 * @returns {React.Component}
 */

export default function Product({ product, actions, screenSize }) {
  const isPhone = PHONE === screenSize;
  const isDesktop = DESKTOP === screenSize;
  const { imageUrl, installments, listPrice, price, productName, stars } = product;

  function handleAddToCart() {
    actions.addToCart(product);
  }

  return (
    <div className={`${styles.container} ${(isPhone && styles.phone) || ''}`}>
      {listPrice && (
        <div className={styles.containerTag}>
          <span className={styles.off}>OFF</span>
          <OfferTag className={styles.tag} />
        </div>
      )}

      <div className={styles.image}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{productName}</div>
        <div className={styles.stars}>
          {[0, 0, 0, 0, 0].map((element, key) => {
            if (key < stars) {
              return <StarFullIcon key={key} />;
            } else {
              return <StarIcon key={key} />;
            }
          })}
        </div>
        <div className={styles.discount}>
          {listPrice && <span>de R$ {currency(listPrice)}</span>}
        </div>
        <div className={`${styles.price} ${(!isDesktop && styles.phone) || ''}`}>
          <span>por R$ {currency(price)}</span>
        </div>
        <div className={styles.offer}>
          {(installments &&
            installments.length &&
            `ou em ${installments[0].quantity}x de R$ ${currency(installments[0].value)}`) ||
            ''}
        </div>
        <div className={`${styles.containerButton} ${(!isDesktop && styles.phone) || ''}`}>
          <Button type="primary" classname={styles.classButton} onClick={handleAddToCart}>
            <span className={styles.bigTextButton}>Comprar</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
