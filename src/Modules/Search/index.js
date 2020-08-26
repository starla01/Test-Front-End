// Librerías
import React from "react";

// Componentes
import { ReactComponent as SearchIcon } from "../../Components/Icons/search-icon.svg";

// Estilos
import styles from "./index.module.sass";

export default function Search() {
  return (
    <div className={styles.container}>
      <p>search</p>
      <SearchIcon />
    </div>
  );
}
