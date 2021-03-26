import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Signup from "../Components/Auth/Signup";
import Layout from "../Components/Layout";

function signup() {
  return (
    <Layout title="Signup">
      <Navbar />
      <Signup />
    </Layout>
  );
}

export default signup;
