import React from "react";
import styles from "../css/Layout.module.css";
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CoinGecko</h1>
        <p>
          <a href="https://www.instagram.com/mahdi_lhj/">Mahdi Khalili</a> |
          Support React.js
        </p>
      </header>
      {children}
      <footer>this is footer</footer>
    </div>
  );
}

export default Layout;
