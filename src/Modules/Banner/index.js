// Librerias
import React, { useState } from 'react';

// Estilos
import styles from './index.module.sass';

// Iconos
import { ReactComponent as BackBlack } from '../../Components/Icons/banner.svg';

const data = [
  {
    image: '/images/banner.png',
    title: 'Olá, o que você está buscando?',
    text: 'Criar ou migrar seu e-commerce?',
  },
  {
    image: '/images/banner.png',
    title: 'Olá, o que você está buscando?',
    text: 'Criar ou migrar seu e-commerce?',
  },
  {
    image: '/images/banner.png',
    title: 'Olá, o que você está buscando?',
    text: 'Criar ou migrar seu e-commerce?',
  },
  {
    image: '/images/banner.png',
    title: 'Olá, o que você está buscando?',
    text: 'Criar ou migrar seu e-commerce?',
  },
];

export default function Banner() {
  const [positionBanner, setPositionBanner] = useState(0);
  const left = `${positionBanner * -100}%`;
  const widthBanner = `${data.length * 100}%`;

  function Bullets() {
    return (
      <div className={styles.containerBullets}>
        {data.map((data, key) => {
          return (
            <div
              key={key}
              className={`${(key === positionBanner && styles.active) || ''} ${styles.bullet}`}
              onClick={() => setPositionBanner(key)}></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.containerBanner}>
      <Bullets />
      <div
        className={styles.containerImages}
        style={{
          left: left,
          width: widthBanner,
        }}>
        {data.map((banner, key) => {
          const { image, title, text } = banner;
          return (
            <div key={key} className={styles.image}>
              <div className={styles.imageBanner}>
                <img src={image} className={styles.assteImage} alt="" />
              </div>
              <div className={styles.backBlack}>
                <div className={styles.containerInfo}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.text}>{text}</div>
                </div>
                <BackBlack className={styles.backBanner} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
