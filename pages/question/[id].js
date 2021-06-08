import React from "react";
import Layout from "../../Components/Layout";
import QuestionPage from "../../Components/Questions/QuestionPage";
import Navbar from "../../Components/Navbar/Navbar";

function Question() {
  return (
    <Layout>
      <Navbar />
      <QuestionPage />
    </Layout>
  );
}

export default Question;
