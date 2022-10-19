import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
