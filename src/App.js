// Librerías
import React, { useContext } from "react";
//import useDevice from "usedevice";

// Components
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";
import Home from "./Views/Home";
//import { Context } from "./Providers";

// Estilos
import "./App.css";
import "./variables.css";

// Constantes
//import { BREAKPOINTS as breakpoints } from "./constants";

function App({ history }) {
  //const { state, actions } = useContext(Context);
  //const device = useDevice({ breakpoints });

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
