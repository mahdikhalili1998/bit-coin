import React, { useEffect, useState } from "react";
import Search from "../services/search";
import { RotatingLines } from "react-loader-spinner";
import styles from "../css/Currency.module.css";
function Currency({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(result);
  useEffect(() => {
    setResult([]);
    if (!text) {
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    const getData = async () => {
      try {
        const res = await fetch(Search(text), { signal: controller.signal });
        const json = await res.json();
        setLoading(false);
        if (json.coins) {
          setResult(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        console.log(error);
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setLoading(true);
    getData();
    return () => controller.abort();
  }, [text]);
  return (
    <div className={styles.container}>
      <input
        value={text}
        type="text"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {result.length ? (
        <div className={styles.result}>
          {loading ? (
            <RotatingLines
              strokeColor="#2121a8"
              strokeWidth="2"
              animationDuration="0.75"
              width="50px"
              height="50px"
              visible={true}
            />
          ) : (
            <ul>
              {result.map((item) => (
                <li className={styles.li} key={item.id}>
                  <img src={item.thumb} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Currency;
