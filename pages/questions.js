import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Layout from "../Components/Layout";
import QuestionLayout from "../Components/Questions/QuestionLayout";

function Questions() {
  return (
    <Layout title="Question">
      <Navbar tab="question" />
      <QuestionLayout />
    </Layout>
  );
}

export default Questions;
