import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "rebass";
import Head from "next/head";

import { useUser } from "../redux/UserSlice";
import MobileNav from "./Navbar/MobileNav";
import Footer from "./Footer";

function Layout({ withAurh, title, children }) {
  const { userState, userDispatch } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!withAurh) return;
    if (!userState?.isLoggedIn || !userState?.token) {
      router.push("/");
    }
  }, [userState]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (JSON.parse(user)) userDispatch.loginUser(JSON.parse(user));
  }, []);

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

Layout.defaultProps = {
  withAurh: false,
};

export default Layout;
