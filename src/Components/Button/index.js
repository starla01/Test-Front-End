// Librerias
import React from 'react';
import { Link } from 'react-router-dom';

// Estilos
import styles from './index.module.sass';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';

/**
 * @name Button
 * @description Componente para renderziar botones
 *
 * @param {String} props.type tipo de boton, de no especificarlo sera el default -> cancel|disabled|continue|buttonBaz|buttonUserBaz|cancelCredit|buttonAuthentication
 * @param {function} props.onClick CB a ejecutar en el click del mismo
 * @param {function} props.classname clase de estilos personalizados
 * @param {Object} props.children Contenido a mostrar dentro del boton
 *
 * @example
 *          //Cancel
 *           <Button type="cancel" onClick={onCancel}>
 *              Regresar
 *           </Button>
 *
 *          //Disabled
 *           <Button type="disabled">
 *              Regresar
 *           </Button>
 *
 *           //Dafault
 *           <Button onClick={handlePayment}>
 *              Pagar
 *           </Button>
 *
 * @returns {React.Component}
 **/

export function Button({ type, onClick, classname, children }) {
  const classType =
    (type === PRIMARY && styles.primary) || (type === SECONDARY && styles.secondary);

  return (
    <div className={`${styles.button} ${classType} ${classname}`} onClick={onClick}>
      {children}
    </div>
  );
}

export function CustomLink({ to, children, ...props }) {
  return (
    <Link {...props} to={to} className={styles.button}>
      {children}
    </Link>
  );
}

export function InputButton({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
