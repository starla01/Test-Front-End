// Librerías
import React from 'react';

// Componentes
import { ReactComponent as SearchIcon } from '../../Components/Icons/search-icon.svg';

// Estilos
import styles from './index.module.sass';

// Constantes
import { PHONE, TABLET } from '../../constants';

/**
 * Search Component
 *
 * @name Search
 * @description Componente para renderizar componente de buscador en el Header
 *
 *
 * @param {Objet} params props del componente React
 * @param {String} params.screenSize Propiedad que contiene el nombre del breackpoin para el ancho de la pantall actual
 *
 * @example
 *
 *     <Search screenSize={screenSize}  />
 *
 * @returns {React.Component}
 */

export default function Search({ screenSize }) {
  const isPhone = screenSize === PHONE;
  const isTablet = screenSize === TABLET;

  return (
    <div
      className={`${styles.container} ${
        (isPhone && styles.phone) || (isTablet && styles.tablet) || styles.desktop
      }`}>
      <div className={styles.wrapperSearch}>
        <input type="text" className={styles.searchInput} placeholder="O que está procurando?" />
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
}
