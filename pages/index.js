import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Landing/Hero";
import KnowMore from "../Components/Landing/KnowMore";
import Questions from "../Components/Landing/Questions";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Navbar tab={"home"} />
      <Hero />
      <KnowMore />
      <Questions />
    </Layout>
  );
}
