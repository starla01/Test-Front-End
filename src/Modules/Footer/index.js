// Librerías
import React from 'react';

// Components
import { Button } from '../../Components/Button';

// Estilos
import styles from './index.module.sass';

// Iconos
import { ReactComponent as AudioIcon } from '../../Components/Icons/audio.svg';
import { ReactComponent as EmailIcon } from '../../Components/Icons/email.svg';
import { ReactComponent as LogoIcon } from '../../Components/Icons/logo-icon-white.svg';
import { ReactComponent as VtexIcon } from '../../Components/Icons/vtex-logo.svg';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.top}>content Top</div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottom}>
          <div id={styles.addressInfo} className={styles.block}>
            <h2 className={styles.title}>Localização</h2>
            <div className={styles.assetLine}></div>
            <div className={styles.address}>
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
              <p>Alphavile SP </p>
              <p>brasil@corebiz.ag </p>
              <p>+55 11 3090 1039</p>
            </div>
          </div>
          <div id={styles.contactInfo} className={styles.block}>
            <Button type="secondary" classname={styles.classButton}>
              <EmailIcon className={styles.iconButtonMail} />
              <span className={styles.textButton}>ENTRE EM CONTATO</span>
            </Button>
            <Button type="secondary" classname={styles.classButton}>
              <AudioIcon className={styles.iconButtonAudio} />
              <span className={styles.textButton}>FALE COM O NOSSO CONSULTOR ONLINE</span>
            </Button>
          </div>
          <div id={styles.enterpriseInfo} className={styles.block}>
            <div className={styles.enteprise}>
              <p className={styles.smallTitle}>Created by</p>
              <LogoIcon />
            </div>
            <div className={styles.enteprise}>
              <p className={styles.smallTitle}>Powered by</p>
              <VtexIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
