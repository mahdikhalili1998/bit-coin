import React from "react";
import styles from "../css/pagenition.module.css";
import { TiMediaFastForward } from "react-icons/ti";
import { TiMediaRewind } from "react-icons/ti";
function Pagenition({ page, setPage }) {
  const PerviousHandler = () => {
    if (page <= 1) {
      setPage(11);
    }
    setPage((page) => page - 1);
  };
  const NextHandler = () => {
    if (page >= 10) {
      setPage(0);
    }
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.container}>
      <button onClick={PerviousHandler}>
        <TiMediaRewind />
      </button>
      <p className={page === 1 ? styles.highlight : null}>1</p>
      <p className={page === 2 ? styles.highlight : null}>2</p>
      {page > 2 && page < 9 ? (
        <>
          <span>...</span>
          <p className={styles.highlight}>{page}</p>
        </>
      ) : null}
      <span>...</span>
      <p className={page === 9 ? styles.highlight : null}>9</p>
      <p className={page === 10 ? styles.highlight : null}>10</p>
      <button onClick={NextHandler}>
        <TiMediaFastForward />
      </button>
    </div>
  );
}

export default Pagenition;
