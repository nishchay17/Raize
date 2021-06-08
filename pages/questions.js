import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Layout from "../Components/Layout";
import QuestionLayout from "../Components/Questions/QuestionLayout";
import axios from "axios";
import { URL } from "../api";

function Questions({ questions }) {
  return (
    <Layout title="Question">
      <Navbar tab="question" />
      <QuestionLayout questions={questions} />
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   let respose = {};

//   try {
//     respose = await axios.get(`${URL}/question/all`);
//   } catch (err) {
//     res = {};
//   }

//   return {
//     props: { questions: respose.data.questions },
//   };
// }

export default Questions;
