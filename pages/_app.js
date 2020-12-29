import React, { useState, useEffect } from "react";
import "../styles/globals.scss";
import Head from "next/head";
import {} from "react-scroll";

import MetaTags from "../components/MetaTags";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import ProjectsReducer from "../store/reducer";

const store = createStore(ProjectsReducer, applyMiddleware(ReduxThunk));

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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}

export default MyApp;
