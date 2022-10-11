import React from "react";
import { Layout } from "../components";
import "../styles/globals.scss";
import { StateContext } from "./../Context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    // <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </StateContext>
  );
}

export default MyApp;
