import React, { FC } from "react";

import Layout from "../../ui/layout/Layout";
import Cards from "./cards/Cards";
import Transfer from "./transfer/Transfer";
import SendAgain from "./sendAgain/SendAgain";
import Activity from "./activity/Activity";
import Header from "./header/Header";
import StatusBarBlock from "../../ui/statusBar/StatusBar";

const Home: FC = () => {
  return (
    <Layout>
      <StatusBarBlock />
      <Header />
      <Cards />
      <Transfer />
      <SendAgain />
      <Activity />
    </Layout>
  );
};

export default Home;
