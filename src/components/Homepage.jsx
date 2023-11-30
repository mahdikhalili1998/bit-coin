import TableCoin from "./TableCoin";
import Layout from "../layout/Layout";
import React, { useEffect, useState } from "react";
import apiMaker from "../services/Api";
function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getdata = async () => {
      const res = await fetch(apiMaker());
      const json = await res.json();
      setCoins(json);
      setloading(false);
    };
    getdata();
  }, []);
  return (
    <>
      <Layout>
        <TableCoin coins={coins} loading={loading} />
      </Layout>
    </>
  );
}

export default HomePage;
