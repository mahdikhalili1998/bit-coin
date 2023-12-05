import TableCoin from "./TableCoin";
import Layout from "../layout/Layout";
import React, { useEffect, useState } from "react";
import apiMaker from "../services/Api";
import Pagenition from "./Pagenition";
import Currency from "./Currency";
import Chart from "./Chart";
function HomePage() {
  const [currency, setCurrency] = useState("usd");

  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [chart, setChart] = useState(null);
  // console.log(chart);
  useEffect(() => {
    const getdata = async () => {
      try {
        setloading(true);
        const res = await fetch(apiMaker(page, currency));
        const json = await res.json();
        setCoins(json);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [page, currency]);
  return (
    <>
      <Layout>
        <Currency currency={currency} setCurrency={setCurrency} />
        <TableCoin
          chart={chart}
          setChart={setChart}
          currency={currency}
          coins={coins}
          loading={loading}
        />
        <Pagenition page={page} setPage={setPage} />
        {!!chart && <Chart coins={coins} chart={chart} setChart={setChart} />}
      </Layout>
    </>
  );
}

export default HomePage;
