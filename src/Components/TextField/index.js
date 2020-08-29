// Librerías
import React, { useState } from 'react';

// Estilos
import styles from './index.module.sass';

const assign = Object.assign;

/**
 * TextField Component
 *
 * @name TextField
 * @description Componente para renderizar Cajas de entradas de Texto
 *
 *
 * @param {Objet} params props del componente React
 * @param {Number} params.className Propiedad que contiene estilos personalizados
 * @param {Number} params.label Etiqueta a mostar como placeholder
 * @param {Number} params.input objeto con datos del control, value, status, change etc
 *
 * @example
 *
 *     <TextField
 *        className={styles.textFieldName}
 *        label=" Digite seu nome"
 *        input={name.input}
 *     />
 *
 * @returns {React.Component}
 */

export default function TextField(props) {
  const [focus, setFocus] = useState(false);
  const overwrite = {};
  const inputData = props.input || {};
  const propsInput = inputData.input || inputData || {};
  const isNewHook = !!inputData.input;

  var open = false;
  if (!focus) {
    overwrite.placeholder = '';
    open = false;
  } else open = true;
  if (propsInput.value || propsInput.defaultValue) open = true;

  const inputAttributes = assign(
    {},
    propsInput,
    {
      onFocus: (e) => {
        if (propsInput.onFocus) propsInput.onFocus(e);
        setFocus(true);
      },
      onBlur: (e) => {
        if (propsInput.onBlur) propsInput.onBlur(e);
        setFocus(false);
      },
    },
    overwrite,
  );

  return (
    <div
      className={`${styles.TextFieldRoot} ${(open && styles.open) || styles.close} ${
        (focus && styles.focus) || ''
      } ${(!!props.input.error && styles.error) || ''} ${
        (inputAttributes.disabled && styles.disabled) || ''
      } ${props.className || ''}`}>
      <label htmlFor={inputData.id || ''}>{props.label}</label>
      <input
        {...inputAttributes}
        value={isNewHook ? inputData.displayValue : inputAttributes.value}
        autoComplete="off"
      />
      {isNewHook && (
        <input
          className={styles.realInput}
          {...inputAttributes}
          id={inputData.id}
          name={inputData.name}
          autoComplete="off"
        />
      )}
      {!!propsInput.error && <div className={styles.errorDescription}>{propsInput.error}</div>}
    </div>
  );
}
