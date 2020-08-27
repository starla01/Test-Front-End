import React from 'react';
import styles from './index.module.sass';
import Slider from './Slider';

/**
 * Swiper Component
 *
 * @name Swiper
 * @description Componente para renderizar carruseles
 *
 * @param {Objet} params props del componente React
 * @param {Number} params.mass Masa del componente que se desliza, solo aplica para swipe
 * @param {Number} params.tension Tension del componente que se desliza, solo aplica para swipe
 * @param {Number} params.friction Friccion del componente que se desliza, solo aplica para swipe
 * @param {Boolean} params.arrows Renderizar o no flechas de interacción
 * @param {String} params.type Tipo de deslizamiento (swipe|scroll)
 * @param {Boolean} params.infinite Renderizar un deslizamiento infinito, solo aplica para swipe
 * @param {React.Component} params.nextArrow Componente que renderiza la flecha derecha, solo valido para swipe
 * @param {React.Component} params.prevArrow Componente que renderiza la flecha izquierda, solo valido para swipe
 * @param {React.Component} params.dots Componente que renderiza los dots del componente, solo valido para swipe, recibe: realPosition, position y steps
 * @param {Number} params.slidesToShow Número de elementos a mostar
 * @param {Number} params.slidesToScroll Numero de elementos a desplazar solo valido para tipo swipe
 * @param {String} params.activeClass Clase CSS a aplicar a los elementos visibeles dentro del viewport
 * @param {String} params.inactiveClass Clase CSS a aplicar a los elementos fuera del viewport
 * @param {String} params.leftInactiveElementsClass Clase css a aplicar a los elementos fuera del viewport del lado izquierdo
 * @param {String} params.rightInactiveElementsClass Clase css a aplicar a los elementos fuera del viewport del lado derecho
 * @param {String} params.elementClass Clase css a aplicar en todod lo elementos del carrusel
 * @param {React.Component} params.children Elementos a renderizar
 *
 * @example
 *
 *      <Swiper type="swipe" slidesToScroll={5} mass={1} tension={120} friction={40} dots={dots}>
 *        <Element />
 *        <Element />
 *        <Element />
 *      </Swiper>
 *
 * @returns {React.Component}
 */

const Swiper = ({
  mass = 1,
  dots = null,
  tension = 45,
  friction = 25,
  arrows = false,
  type = 'scroll',
  children = null,
  activeClass = '',
  infinite = false,
  nextArrow = null,
  prevArrow = null,
  slidesToShow = 5,
  elementClass = '',
  parentClass = '',
  inactiveClass = '',
  slidesToScroll = 5,
  leftInactiveElementsClass = '',
  rightInactiveElementsClass = '',
}) => {
  if (!children) throw new Error('You need to define a children to render this component');

  const isScroll = type === 'scroll';
  const isSwipe = type === 'swipe';
  const childrenLength = children.length;
  const numberOfSteps = Math.ceil(childrenLength / slidesToShow);

  if (isSwipe) {
    const settings = {
      dots,
      mass,
      arrows,
      tension,
      friction,
      infinite,
      nextArrow,
      prevArrow,
      activeClass,
      parentClass,
      elementClass,
      slidesToShow,
      inactiveClass,
      slidesToScroll,
      leftInactiveElementsClass,
      rightInactiveElementsClass,
    };

    return <Slider {...settings}>{children}</Slider>;
  }

  if (isScroll)
    return (
      <div className={`${styles.component} ${parentClass}`}>
        <div className={styles.container} style={{ width: `${100 * numberOfSteps}%` }}>
          {children}
        </div>
      </div>
    );

  throw new Error(`Type ${type} is not supported, allowed values are scroll and swipe`);
};

export default Swiper;
