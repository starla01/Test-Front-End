// Librerías
import React, { useEffect } from 'react';

// Componentes
import Search from '../Search';

// Iconos
import { ReactComponent as LogoIcon } from '../../Components/Icons/logo-icon.svg';
import { ReactComponent as HeadUserIcon } from '../../Components/Icons/userhead-icon.svg';
import { ReactComponent as BodyUserIcon } from '../../Components/Icons/userbody-icon.svg';
import { ReactComponent as CartIcon } from '../../Components/Icons/cart.svg';
import { ReactComponent as MenuIcon } from '../../Components/Icons/menu.svg';

// Estilos
import styles from './index.module.sass';

/**
 * Header Component
 *
 * @name Header
 * @description Componente para renderizar El header de la aplicación
 *
 *
 * @param {Objet} params props del componente React
 * @param {String} params.screenSize Propiedad que contiene el nombre del breackpoin para el ancho de la pantall actual
 * @param {Object} params.state Objeto de estado general de la aplicación
 * @param {Funt} params.actions Coleccion de funciones
 *
 * @example
 *
 *     <Header screenSize={screenSize} state={state} actions={actions} />
 *
 * @returns {React.Component}
 */

export default function Header({ screenSize, state, actions }) {
  const { cart } = state;
  const saveCart = window.localStorage.cart;

  useEffect(() => {
    const recoveryCart = (saveCart && JSON.parse(saveCart)) || [];
    recoveryCart.forEach((element) => {
      actions.addToCart(element);
    });
  }, [cart]);

  return (
    <div className={styles.container}>
      {(screenSize !== 'phone' && (
        <div className={styles.content}>
          <div className={styles.logo}>
            <LogoIcon className={styles.logo} />
            <div className={styles.dot}></div>
          </div>
          <div className={styles.search}>
            <Search screenSize={screenSize} />
          </div>
          <div className={styles.profileData}>
            <div className={styles.user}>
              <div className={styles.joinPathsUserIcon}>
                <HeadUserIcon />
                <BodyUserIcon />
              </div>
              <span className={styles.name}>Minha Conta </span>
            </div>
            <div className={styles.cart}>
              <CartIcon />
              <div className={styles.countItems}>{cart.length}</div>
            </div>
          </div>
        </div>
      )) || (
        <div className={styles.contentPhone}>
          <div className={styles.topHeader}>
            <div className={styles.menuPhone}>
              <MenuIcon className={styles.burguerIcon} />
            </div>
            <div className={styles.logoPhone}>
              <LogoIcon className={styles.iconPhone} />
              <div className={styles.dot}></div>
            </div>
            <div className={styles.logoCart}>
              <CartIcon />
              <div className={styles.countItems}>{cart.length}</div>
            </div>
          </div>
          <div className={styles.DownHeader}>
            <div className={styles.search}>
              <Search screenSize={screenSize} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
