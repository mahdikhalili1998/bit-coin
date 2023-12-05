import chartUp from "../assets/chart-up.svg";
import chartDown from "../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styles from "../css/TableCoin.module.css";
import { useEffect } from "react";
import chart_api from "../services/chart";

function TableCoin({ chart, setChart, currency, coins, loading }) {
  const showHandler = (id, image, symbol) => {
    try {
      const getData = async () => {
        const res = await fetch(chart_api(id));
        const json = await res.json();
        const new2 = { ...json, image, symbol };
        console.log(new2);
        setChart(new2);
      };
      return getData;
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {loading ? (
          <RotatingLines
            strokeColor="#2121a8"
            strokeWidth="2"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>Total Volume</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coins.map((item) => (
                  <tr className={styles.tr} key={item.id}>
                    <td>
                      <div
                        onClick={showHandler(item.id, item.image, item.symbol)}
                        className={styles.img_name}
                      >
                        <img className={styles.img} src={item.image} />
                        <span>{item.symbol.toUpperCase()}</span>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      {currency === "usd"
                        ? ` $ ${item.current_price.toLocaleString()}`
                        : currency === "eur"
                        ? `€ ${item.current_price.toLocaleString()}`
                        : currency === "jpy"
                        ? `¥ ${item.current_price.toLocaleString()}`
                        : null}
                    </td>
                    <td
                      className={
                        item.price_change_percentage_24h > 0
                          ? styles.green
                          : styles.red
                      }
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>{item.total_volume.toLocaleString()}</td>
                    <td>
                      <img
                        src={
                          item.price_change_percentage_24h > 0
                            ? chartUp
                            : chartDown
                        }
                        alt={item.name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default TableCoin;
