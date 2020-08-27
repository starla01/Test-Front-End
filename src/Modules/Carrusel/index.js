import React from 'react';
import styles from './index.module.sass';
import Swiper from '../../Components/Swiper';
import { Button } from '../../Components/Button';
import Product from './Components/Product';

import { ReactComponent as ArrowLeft } from '../../Components/Icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../Components/Icons/arrow-right.svg';

/**
 *
 * @param {Obejtc} props Props del componente React
 * @param {Array} props.data  Contenido a renderizar
 * @param {String} props.className Estilos a heredar
 * @param {Boolean} props.showArrows Mostrar flechas (true|false)
 * @param {String} props.link valor del link de redirección
 * @example
 *
 *        <Slider className={styles.carousel} data={bannerList} />
 *
 * @returns {React.Component}
 */

const Slider = ({ className = '', showArrows = false, title = '' }) => {
  const data = [{}, {}, {}];

  const childToRender = data.map((slide, index) => {
    return <Product key={index} />;
  });

  return (
    <div>
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
        <div className={styles.downLine}></div>
      </div>
      <Swiper
        type="swipe"
        arrows={true}
        tension={140}
        friction={28}
        infinite={true}
        slidesToShow={4}
        slidesToScroll={1}
        parentClass={styles.parent}
        elementClass={styles.slide}
        leftInactiveElementsClass={styles.leftInactiveClass}
        rightInactiveElementsClass={styles.rightInactiveClass}
        nextArrow={({ onClick, className, onTouchStart }) => (
          <div
            className={`${styles.arrows} ${className} ${styles.right}`}
            onClick={onClick}
            onTouchStart={onTouchStart}>
            <Button width="circle" type="navLinkB" className={styles.color}>
              <ArrowRight />
            </Button>
          </div>
        )}
        prevArrow={({ onClick, className, onTouchStart }) => (
          <div
            className={`${styles.arrows} ${className} ${styles.left}`}
            onClick={onClick}
            onTouchStart={onTouchStart}>
            <Button width="circle" type="navLinkB" className={styles.color}>
              <ArrowLeft />
            </Button>
          </div>
        )}>
        {childToRender}
      </Swiper>
    </div>
  );
};

export default Slider;
