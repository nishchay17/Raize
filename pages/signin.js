import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Signin from "../Components/Auth/Signin";
import Layout from "../Components/Layout";

function signin() {
  return (
    <Layout title="Signin">
      <Navbar />
      <Signin />
    </Layout>
  );
}

export default signin;
