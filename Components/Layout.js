import React from "react";
import { Box } from "rebass";
import Head from "next/head";
import MobileNav from "./Navbar/MobileNav";
import Footer from "./Footer";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#3d5af1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | RAIZE</title>
      </Head>
      <Box>{children}</Box>
      <MobileNav />
      <Footer />
    </>
  );
}

export default Layout;
