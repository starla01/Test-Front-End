// Librerías
import React, { useContext, useEffect, useState } from 'react';
import useDevice from 'usedevice';

// Components
import Header from './Modules/Header';
import Footer from './Modules/Footer';
import Home from './Views/Home';
import { Context } from './Providers';

// Estilos
import styles from './app.module.sass';
import './variables.css';

// Constantes
import { BREAKPOINTS as breakpoints } from './constants';

function App({ history }) {
  const { actions, state } = useContext(Context);
  const [listProducts] = useState(state.products);
  const device = useDevice({ breakpoints });
  const { screenSize } = device;

  useEffect(() => {
    actions.getProducts();
  }, [listProducts]);

  return (
    <div className={styles.mainContainer}>
      <Header screenSize={screenSize} state={state} actions={actions} />
      <Home screenSize={screenSize} />
      <Footer screenSize={screenSize} />
    </div>
  );
}

export default App;
