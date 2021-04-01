import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Landing/Hero";
import KnowMore from "../Components/Landing/KnowMore";
import Questions from "../Components/Landing/Questions";
import Layout from "../Components/Layout";
import axios from "axios";
import { URL } from "../api";

export default function Home({ topQuestions }) {
  return (
    <Layout title="Home">
      <Navbar tab={"home"} />
      <Hero />
      <KnowMore />
      <Questions topQuestions={topQuestions.questions} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  let respose = {};
  try {
    respose = await axios.get(`${URL}/question/top`);
  } catch (err) {
    respose = {};
  }

  return {
    props: { topQuestions: respose.data },
  };
}
