// Librerías
import React, { useEffect } from 'react';

// Componentes

// Iconos
import { ReactComponent as LogoIcon } from '../../Components/Icons/logo-icon.svg';
import { ReactComponent as HeadUserIcon } from '../../Components/Icons/userhead-icon.svg';
import { ReactComponent as BodyUserIcon } from '../../Components/Icons/userbody-icon.svg';
import { ReactComponent as CartIcon } from '../../Components/Icons/cart.svg';

import Search from '../Search';

// Estilos
import styles from './index.module.sass';

export default function Header({ state, actions }) {
  const { cart } = state;
  const saveCart = window.localStorage.cart;

  useEffect(() => {
    const recoveryCart = JSON.parse(saveCart);
    recoveryCart.forEach((element) => {
      actions.addToCart(element);
    });
  }, [cart]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoIcon className={styles.logo} />
          <div className={styles.dot}></div>
        </div>
        <div className={styles.search}>
          <Search />
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
    </div>
  );
}
