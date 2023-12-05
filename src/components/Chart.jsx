import React, { useState } from "react";
import styles from "../css/Chart.module.css";
import getData from "../helper/chart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ chart, setChart, coins }) {
  const [type, setType] = useState("prices");
  // console.log(getData(chart, type));
  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      // setType(e.target);
      setType(e.target.innerText.toLowerCase());
    }
  };
  const closeHandler = () => {
    setChart(null);
  };
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.close} onClick={closeHandler}>
          X
        </p>
      </div>

      <div className={styles.contJart}>
        <div className={styles.jart}>
          <div className={styles.Ns}>
            <img src={chart.image} />
            <p>{chart.symbol}</p>
          </div>
          <div className={styles.graph}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={500} height={500} data={getData(chart, type)}>
                <Line
                  type="monotone"
                  dataKey={type}
                  stroke="#3874ff"
                  strokeWidth="2px"
                />
                <CartesianGrid stroke="#404042" strokeDasharray="5 5" />
                <YAxis
                  dataKey={type}
                  domain={["auto, auto"]}
                  stroke="#3874ff"
                />
                {/* <XAxis dataKey={"data"} stroke="#3874ff" /> */}
                <Legend />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.tokme} onClick={typeHandler}>
            <button
              className={type === "prices" ? styles.selected : styles.btt}
            >
              Prices
            </button>
            <button
              className={type === "market_caps" ? styles.selected : styles.btt}
            >
              Market_Caps
            </button>
            <button
              className={
                type === "total_volumes" ? styles.selected : styles.btt
              }
            >
              Total_volumes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
