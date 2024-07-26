import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import {} from "react-scroll";

import MetaTags from "../components/MetaTags";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {
  const [activeDrawer, setActiveDrawer] = useState({
    active: false,
    touched: false,
  });

  const handleDrawerState = () => {
    setActiveDrawer({ active: !activeDrawer.active, touched: true });
  };

  return (
    <>
      <MetaTags />
      <Header
        activeDrawer={activeDrawer}
        handleDrawerState={handleDrawerState}
      />
      <Menu activeDrawer={activeDrawer} handleDrawerState={handleDrawerState} />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
